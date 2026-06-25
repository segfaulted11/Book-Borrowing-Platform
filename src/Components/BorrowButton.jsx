"use client";
import toast from "react-hot-toast";

const BorrowButton = () => {
  const handleBorrow = () => {
    toast.success("Book borrowed successfully!");
  };

  return (
    <button
      onClick={handleBorrow}
      className="
        btn btn-primary mt-3
        w-full sm:w-auto
        text-sm sm:text-base
        px-4 sm:px-6
      "
    >
      Borrow This Book
    </button>
  );
};

export default BorrowButton;