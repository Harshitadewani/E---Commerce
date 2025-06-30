// server/controllers/orderController.js
import Order from "../models/Order.js";

// GET /api/orders — user: own orders, admin: all orders
export const getAllOrders = async (req, res) => {
  try {
    const orders =
      req.user.role === "admin"
        ? await Order.find().sort({ createdAt: -1 })
        : await Order.find({ userId: req.user._id }).sort({ createdAt: -1 });

    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
};

// POST /api/orders — user only
export const createOrder = async (req, res) => {
  try {
    const { items, shippingAddress, paymentStatus, orderStatus } = req.body;

    if (!items || items.length === 0) {
      return res.status(400).json({ error: "No order items provided" });
    }

    const newOrder = new Order({
      userId: req.user._id,
      items,
      shippingAddress,
      paymentStatus: paymentStatus || "pending",
      orderStatus: orderStatus || "processing",
    });

    const saved = await newOrder.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ error: "Failed to create order" });
  }
};

// PUT /api/orders/:id — admin only
export const updateOrder = async (req, res) => {
  try {
    const updated = await Order.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: "Order not found" });

    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: "Failed to update order" });
  }
};

// DELETE /api/orders/:id — admin only
export const deleteOrder = async (req, res) => {
  try {
    const deleted = await Order.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Order not found" });

    res.status(200).json({ message: "Order deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete order" });
  }
};
