"use client";
import { useState } from "react";
import { FaStarOfLife } from "react-icons/fa";
import { useRouter } from "next/navigation";

const VendorForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    vendorName: initialData?.vendorName ?? "",
    bankName: initialData?.bankName ?? "",
    bankAccountNo: initialData?.bankAccountNo ?? "",
    addressLine1: initialData?.addressLine1 ?? "",
    addressLine2: initialData?.addressLine2 ?? "",
    city: initialData?.city ?? "",
    country: initialData?.country ?? "",
    zipCode: initialData?.zipCode ?? "",
  });
  const router = useRouter();

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateForm = () => {
    let newErrors = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "addressLine2") {
        newErrors[key] = `This ${key} field is required`;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    onSubmit(formData);
  };

  return (
    <div className="w-full mx-auto ">
      {/* Vendor Name */}
      <div className="bg-white md:px-8 px-4 pt-8 pb-10 grid md:grid-cols-2 grid-cols-1 gap-x-8 gap-y-4 rounded-lg shadow-md">
        <div>
          <label className="flex text-gray-600 font-medium pb-2 gap-2">
            Vendor Name <FaStarOfLife color="red" size={7} />
          </label>
          <input
            type="text"
            name="vendorName"
            value={formData.vendorName}
            onChange={handleChange}
            className="w-full p-2 border rounded shadow-sm"
          />
          {errors.vendorName && (
            <p className="text-red-600 text-sm pt-2">{errors.vendorName}</p>
          )}
        </div>

        {/* Bank Name */}
        <div>
          <label className="flex text-gray-600 font-medium pb-2 gap-2">
            Bank Name <FaStarOfLife color="red" size={7} />
          </label>
          <input
            type="text"
            name="bankName"
            value={formData.bankName}
            onChange={handleChange}
            className="w-full p-2 border rounded shadow-sm"
          />
          {errors.bankName && (
            <p className="text-red-600 text-sm pt-2">{errors.bankName}</p>
          )}
        </div>

        {/* Bank Account No */}
        <div>
          <label className="flex text-gray-600 font-medium pb-2 gap-2">
            Bank Account No <FaStarOfLife color="red" size={7} />
          </label>
          <input
            type="number"
            name="bankAccountNo"
            value={formData.bankAccountNo}
            onChange={handleChange}
            className="w-full p-2 border rounded shadow-sm"
          />
          {errors.bankAccountNo && (
            <p className="text-red-600 text-sm pt-2">{errors.bankAccountNo}</p>
          )}
        </div>

        {/* Address Line 1 */}
        <div>
          <label className="flex text-gray-600 font-medium pb-2 gap-2">
            Address Line 1 <FaStarOfLife color="red" size={7} />
          </label>
          <input
            type="text"
            name="addressLine1"
            value={formData.addressLine1}
            onChange={handleChange}
            className="w-full p-2 border rounded shadow-sm"
          />
          {errors.addressLine1 && (
            <p className="text-red-600 text-sm pt-2">{errors.addressLine1}</p>
          )}
        </div>

        {/* Address Line 2 (Optional) */}
        <div>
          <label className="block text-gray-600 font-medium pb-2">
            Address Line 2 (Optional)
          </label>
          <input
            type="text"
            name="addressLine2"
            value={formData.addressLine2}
            onChange={handleChange}
            className="w-full p-2 border shadow-sm"
          />
        </div>

        {/* City */}
        <div>
          <label className="flex text-gray-600 font-medium pb-2 gap-2">
            City
            <FaStarOfLife color="red" size={7} />
          </label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="w-full p-2 border shadow-sm"
          />
          {errors.city && (
            <p className="text-red-600 text-sm pt-2">{errors.city}</p>
          )}
        </div>

        {/* Country */}
        <div>
          <label className="flex text-gray-600 font-medium pb-2 gap-2">
            Country <FaStarOfLife color="red" size={7} />
          </label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className="w-full p-2 border shadow-sm"
          />
          {errors.country && (
            <p className="text-red-600 text-sm pt-2">{errors.country}</p>
          )}
        </div>

        {/* Zip Code */}
        <div>
          <label className="flex text-gray-600 font-medium pb-2 gap-2">
            Zip Code <FaStarOfLife color="red" size={7} />
          </label>
          <input
            type="text"
            name="zipCode"
            value={formData.zipCode}
            onChange={handleChange}
            className="w-full p-2 border shadow-sm"
          />
          {errors.zipCode && (
            <p className="text-red-600 text-sm pt-2">{errors.zipCode}</p>
          )}
        </div>
      </div>
      {/* Submit Button */}
      <div className="mt-6 flex w-full justify-between items-center font-semibold">
        <button
          type="button"
          onClick={() => router.push("/vendor")}
          className="bg-gray-600 text-white px-4 py-2 justify-center items-center rounded-lg hover:bg-gray-700"
        >
          Cancel
        </button>
        <button
          type="button"
          onClick={handleSubmit}
          className="bg-emerald-600 text-white px-4 py-2 justify-center items-center rounded-lg hover:bg-emerald-700"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default VendorForm;
