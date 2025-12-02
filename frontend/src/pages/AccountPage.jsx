import { useUser } from "../provider/userProvider";
import { useState } from "react";
import { Link, useNavigate } from "react-router";

export default function AccountPage() {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  // All users start with 1000 credits — ideally fetched from backend later
  const [credits] = useState(1000);

  const handleLogout = () => {
    logout();
    navigate("/auth/login"); // 🔥 redirect after logout
  };

  return (
    <div className="space-y-8">

      {/* ACCOUNT HEADER */}
      <div className="p-8 bg-base-100 border border-base-300 rounded-xl shadow-sm">
        <h2 className="text-3xl font-bold mb-2">Account Settings</h2>
        <p className="text-base-content/70">
          Manage your account information and security preferences.
        </p>
      </div>

      {/* USER INFO */}
      <div className="p-8 bg-base-100 border border-base-300 rounded-xl shadow-sm flex items-center gap-6">
        <div className="w-20 h-20 rounded-full bg-primary text-primary-content flex items-center justify-center text-3xl font-bold">
          {user?.userName?.charAt(0).toUpperCase()}
        </div>

        <div>
          <h3 className="text-xl font-semibold">{user?.userName}</h3>
          <p className="text-base-content/70">{user?.email}</p>
          <p className="text-base-content/50 text-sm mt-1">Member since 2024</p>
        </div>
      </div>

      {/* CREDITS SECTION */}
      <div className="p-8 bg-base-100 border border-base-300 rounded-xl shadow-sm">
        <h3 className="text-xl font-bold mb-3">Credits Remaining</h3>

        <div className="flex items-center gap-4">
          <div className="text-4xl font-bold text-primary">{credits}</div>
          <p className="text-base-content/70">credits available</p>
        </div>

        <p className="text-base-content/60 mt-2 text-sm">
          Credits can be used for exclusive offers, loyalty rewards, and faster checkout.
        </p>
      </div>

      {/* ACTIONS */}
      <div className="p-8 bg-base-100 border border-base-300 rounded-xl shadow-sm space-y-4">
        
        {/* Change Password */}
        <Link to="/profile/account/editpassword">
          <button className="btn btn-outline btn-primary w-full">
            Change Password
          </button>
        </Link>

        {/* Logout */}
        <button
          className="btn btn-error w-full"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </div>
  );
}
