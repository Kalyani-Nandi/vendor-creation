"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import VenderCard from "../components/VendorCard";
import { useRouter } from "next/navigation";
import { FiPlus } from "react-icons/fi";
import Swal from "sweetalert2";
import Shimmer from "../components/Shimmer";

function Page() {
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12; // Adjust as needed
  const router = useRouter();

  useEffect(() => {
    getAllVendors();
  }, []);

  const getAllVendors = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://localhost:3000/api/vendor");
      setVendors(response?.data);
    } catch (error) {
      console.error("Error fetching vendors:", error);
      setError("Failed to fetch vendor data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  const handleEdit = (vendor) => {
    router.push(`vendor/edit/${vendor?.id}`);
  };

  const handleDelete = async (id) => {
    try {
      const result = await Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#28a745",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      });

      if (result.isConfirmed) {
        await axios.delete(`http://localhost:3000/api/vendor/${id}`);

        setVendors((prev) => prev.filter((v) => v.id !== id));

        await Swal.fire({
          title: "Deleted!",
          text: "Your vendor has been deleted.",
          icon: "success",
        });
      }
    } catch (error) {
      console.error("Error deleting vendor:", error);
    }
  };

  // Pagination Logic
  const totalPages = Math.ceil(vendors.length / itemsPerPage);
  const paginatedVendors = vendors.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="p-4">
      <div className="flex w-full justify-between items-center mb-4">
        <span className="text-xl font-bold">Vendor List</span>
        <button
          onClick={() => router.push("/vendor/create")}
          className="bg-emerald-600 text-white px-4 py-2 gap-2 justify-center items-center rounded-lg hover:bg-emerald-700 flex"
        >
          <FiPlus />
          Add New Vendor
        </button>
      </div>

      {loading ? (
        <div className="grid gap-8 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {[...Array(12)].map((_, index) => (
            <Shimmer key={index} />
          ))}
        </div>
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : paginatedVendors.length === 0 ? (
        <div className="text-gray-500">No vendors found.</div>
      ) : (
        <div className="grid gap-8 xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
          {paginatedVendors.map((vendor) => (
            <VenderCard
              key={vendor?.id}
              vendorData={vendor}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}

      {/* Pagination Controls */}
      <div className="flex justify-end mt-6">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`mx-1 px-3 py-1 rounded-lg ${
              currentPage === index + 1
                ? "bg-emerald-600 text-white"
                : "bg-gray-200"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Page;
