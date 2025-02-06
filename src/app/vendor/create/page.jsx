"use client";
import VendorForm from "@/app/components/VendorForm";
import axios from "axios";
import { useRouter } from "next/navigation";
import React from "react";

function page() {
  const router = useRouter();

  const handleFormSubmit = async (formData) => {
    try {
      await axios.post("http://localhost:3000/api/vendor", formData);
      router.push("/vendor"); // Redirect to vendor list
    } catch (error) {
      console.error("Error adding vendor:", error);
    }
  };
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Vendor Create</h2>

      <VendorForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default page;
