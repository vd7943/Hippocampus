import React, { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const EditHeroContent = ({ isOpen, onClose, onUpdate }) => {
  const [formData, setFormData] = useState({
    title: "",
    description1: "",
    description2: "",
  });
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (isOpen) {
      const fetchHero = async () => {
        try {
          const res = await axios.get(
            `${import.meta.env.VITE_BACKEND_URL}/hero/get`
          );
          setFormData(res.data);
        } catch (err) {
          toast.error("Failed to load hero content");
        }
      };
      fetchHero();
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/hero/update`,
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      if (res.data) {
        toast.success("Hero content updated successfully!");
        onUpdate();
        onClose();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Update failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-[#01010D] flex justify-center items-center z-50">
      <div className="bg-white text-[#12123B] p-6 rounded-lg w-full max-w-md">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-center">
          Edit Hero Content
        </h2>
        <form onSubmit={handleSubmit}>
          <textarea
            className="w-full border p-2 rounded mb-4"
            rows="1"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter your title..."
          ></textarea>
          <textarea
            className="w-full border p-2 rounded mb-4"
            rows="6"
            name="description1"
            value={formData.description1}
            onChange={handleChange}
            placeholder="Enter the first paragraph of your description..."
          ></textarea>
          <textarea
            className="w-full border p-2 rounded mb-4"
            rows="6"
            name="description2"
            value={formData.description2}
            onChange={handleChange}
            placeholder="Enter the second paragraph of your description..."
          ></textarea>
          <div className="flex justify-end space-x-2">
            <button
              type="submit"
              disabled={loading}
              className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:opacity-90"
            >
              {loading ? "Updating..." : "Update"}
            </button>
            <button
              type="button"
              onClick={onClose}
              className="cursor-pointer bg-gray-300 px-4 py-2 rounded hover:opacity-90"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditHeroContent;
