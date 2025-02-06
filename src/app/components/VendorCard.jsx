import React from "react";
import { CiEdit } from "react-icons/ci";
import { AiTwotoneDelete } from "react-icons/ai";

function Vend0rCard({ vendorData, onEdit, onDelete }) {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 flex flex-col w-full">
      <div className="space-y-1">
        <p className="text-lg font-semibold text-gray-900">
          {vendorData?.vendorName}
        </p>
        <p className="text-gray-700 text-base">
          Bank Account No:{" "}
          <span className="text-gray-500 text-sm">
            {vendorData?.bankAccountNo}
          </span>
        </p>
        <p className="text-gray-700">
          Bank Name:
          <span className="text-gray-500 text-sm"> {vendorData?.bankName}</span>
        </p>
      </div>
      <div className="flex gap-4 pt-4">
        <button
          onClick={() => onEdit(vendorData)}
          className="bg-gray-200 px-2 py-2 rounded-full hover:bg-gray-300"
        >
          <CiEdit />
        </button>
        <button
          onClick={() => onDelete(vendorData?.id)}
          className="bg-gray-200 px-2 py-2 rounded-full hover:bg-gray-300"
        >
          <AiTwotoneDelete />
        </button>
      </div>
    </div>
  );
}

export default Vend0rCard;
