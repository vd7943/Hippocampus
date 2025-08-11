import React from "react";
import { useAuth } from "../Context/AuthProvider";
import toast from "react-hot-toast";

const Logout = () => {
  const [authUser, setAuthUser] = useAuth();

  const handleLogout = () => {
    try {
      setAuthUser({
        ...authUser,
        user: null,
      });
      localStorage.removeItem("user");
      toast.success("Logout successfully");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (error) {
      toast.error("Error: " + error.message);
    }
  };

  return (
    <div>
      <button
        className="px-4 py-2 lg:mb-3 text-lg font-semibold text-white bg-red-500 rounded-lg cursor-pointer shadow-lg 
               transform transition-all duration-300 hover:scale-102 hover:shadow-xl active:scale-95"
        onClick={handleLogout}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
