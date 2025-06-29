import React from "react";
import {
  SignedIn,
  SignedOut,
  UserButton as ClerkUserButton,
  SignInButton,
} from "@clerk/clerk-react";
import Magnet from "../utils/Magnet"; // 👈 make sure path is correct

const UserButton = () => {
  return (
    <Magnet>
      <div className="inline-block">
        {/* If logged in */}
        <SignedIn>
          <ClerkUserButton afterSignOutUrl="/" />
        </SignedIn>

        {/* If not logged in */}
        <SignedOut>
          <SignInButton mode="modal">
            <button className="bg-white/20 text-white font-bold px-3 py-1 rounded-full transition border backdrop-blur-md border-white">
              Login
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </Magnet>
  );
};

export default UserButton;
