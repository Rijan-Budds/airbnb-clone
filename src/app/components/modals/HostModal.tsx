// HostModal.tsx
"use client";
import React from "react";
import useHostModal from "@/app/hooks/useHostModal";
import { FaHome } from "react-icons/fa";
import { IoBalloon } from "react-icons/io5";
import { FaConciergeBell } from "react-icons/fa";

const HostModal = () => {
  const hostModal = useHostModal();

  if (!hostModal.isOpen) return null; // Don't render if modal is closed

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
        <h2 className="text-lg font-semibold mb-4">What would you like to host?</h2>
        <div className="flex flex-row items-center gap-6">
          <div className="text-sm font-semibold cursor-pointer hover:text-rose-500">
            <FaHome /> Homes
          </div>
          <div className="text-sm font-semibold cursor-pointer hover:text-rose-500">
            <IoBalloon />Experiences
          </div>
          <div className="text-sm font-semibold cursor-pointer hover:text-rose-500">
            <FaConciergeBell /> Online Experiences
          </div>
        </div>
        <button
          className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          onClick={hostModal.onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default HostModal;
