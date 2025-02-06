"use client";
import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import axios from "axios";
import VendorForm from "@/app/components/VendorForm";

function page() {
  const router = useRouter();
  const { id } = useParams(); // Get vendor ID from URL params

  const [vendorData, setVendorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch Vendor Data for Editing
  useEffect(() => {
    if (!id) return;

    const fetchVendor = async () => {
      try {
        const response = await axios.get(
          `http://localhost:3000/api/vendor/${id}`
        );
        setVendorData(response.data);
      } catch (err) {
        console.error("Error fetching vendor:", err);
        setError("Failed to load vendor data.");
      } finally {
        setLoading(false);
      }
    };

    fetchVendor();
  }, [id]);

  // Handle Form Submission for Update
  const handleFormSubmit = async (formData) => {
    try {
      await axios.put(`http://localhost:3000/api/vendor/${id}`, formData);
      router.push("/vendor"); // Redirect to vendor list after update
    } catch (error) {
      console.error("Error updating vendor:", error);
      setError("Failed to update vendor.");
    }
  };

  if (loading) return <div className="p-4">Loading vendor data...</div>;
  if (error) return <div className="p-4 text-red-500">{error}</div>;

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Update Vendor</h2>
      <VendorForm onSubmit={handleFormSubmit} initialData={vendorData} />
    </div>
  );
}

export default page;
