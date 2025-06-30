// server/controllers/productController.js
import Product from "../models/Product.js";
import cloudinary from "../config/cloudinary.js";

// GET /api/products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch products" });
  }
};

// GET /api/products/:id
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ error: "Product not found" });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch product" });
  }
};

// POST /api/products
export const createProduct = async (req, res) => {
  try {
    let imageUrl = "";

    if (req.file) {
      const streamUpload = (req) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "jewellery-images" },
            (error, result) => {
              if (result) resolve(result);
              else reject(error);
            }
          );
          stream.end(req.file.buffer);
        });
      };
      const result = await streamUpload(req);
      imageUrl = result.secure_url;
    }

    const product = new Product({
      ...req.body,
      images: imageUrl ? [imageUrl] : [],
    });

    const saved = await product.save();
    res.status(201).json(saved);
  } catch (error) {
    res.status(500).json({ error: "Product creation failed" });
  }
};

// PUT /api/products/:id
export const updateProduct = async (req, res) => {
  try {
    let imageUrl = "";

    if (req.file) {
      const streamUpload = (req) => {
        return new Promise((resolve, reject) => {
          const stream = cloudinary.uploader.upload_stream(
            { folder: "jewellery-images" },
            (error, result) => {
              if (result) resolve(result);
              else reject(error);
            }
          );
          stream.end(req.file.buffer);
        });
      };
      const result = await streamUpload(req);
      imageUrl = result.secure_url;
    }

    const updated = await Product.findByIdAndUpdate(
      req.params.id,
      {
        ...req.body,
        ...(imageUrl && { images: [imageUrl] }),
      },
      { new: true }
    );

    if (!updated) return res.status(404).json({ error: "Product not found" });
    res.status(200).json(updated);
  } catch (error) {
    res.status(500).json({ error: "Update failed" });
  }
};

// DELETE /api/products/:id
export const deleteProduct = async (req, res) => {
  try {
    const deleted = await Product.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: "Product not found" });
    res.status(200).json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ error: "Deletion failed" });
  }
};
