"use client";

import booksData from "@/data/booksData.json";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AllBooksPage = () => {
  // State for storing search input
  const [searchText, setSearchText] = useState("");

  // State for storing selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Handles search input changes
  const handleSearchOnChange = (e) => {
    setSearchText(e.target.value);
  };

  // Step 1: Filter books by category
  const categoryFilteredBooks =
    selectedCategory === "All"
      ? booksData
      : booksData.filter(
          (book) => book.category === selectedCategory
        );

  // Step 2: Filter the category-filtered books by search text
  const finalBooks = categoryFilteredBooks.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <div className="container mx-auto px-4">

      <h2 className="text-center font-bold text-3xl my-5">
        All Books
      </h2>

      {/* Search Bar */}
      <label className="input my-5 w-full">
        <Search />
        <input
          type="search"
          placeholder="Search Book By Title"
          onChange={handleSearchOnChange}
        />
      </label>

      {/* Main Layout */}
      <div className="flex gap-6">

        {/* ================= Sidebar ================= */}
        <div className="w-56 flex flex-col gap-3">

          <h2 className="font-bold text-xl">
            Categories
          </h2>

          <button
            onClick={() => setSelectedCategory("All")}
            className={`btn ${
              selectedCategory === "All"
                ? "btn-primary"
                : ""
            }`}
          >
            All Books
          </button>

          <button
            onClick={() => setSelectedCategory("Story")}
            className={`btn ${
              selectedCategory === "Story"
                ? "btn-primary"
                : ""
            }`}
          >
            Story
          </button>

          <button
            onClick={() => setSelectedCategory("Tech")}
            className={`btn ${
              selectedCategory === "Tech"
                ? "btn-primary"
                : ""
            }`}
          >
            Tech
          </button>

          <button
            onClick={() => setSelectedCategory("Science")}
            className={`btn ${
              selectedCategory === "Science"
                ? "btn-primary"
                : ""
            }`}
          >
            Science
          </button>

        </div>

        {/* ================= Books Section ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 flex-1">

          {finalBooks.map((book) => (
            <div
              key={book.id}
              className="card bg-base-100 shadow-sm"
            >
              <figure>
                <Image
                  src={book.image_url}
                  alt={book.title}
                  width={200}
                  height={100}
                  className="w-[400px] h-[400px] object-contain mx-auto"
                />
              </figure>

              <div className="card-body">

                <h2 className="card-title">
                  {book.title}
                </h2>

                <p>
                  <strong>Category:</strong> {book.category}
                </p>

                <div className="card-actions justify-end">
                  <Link href={`/bookdetails/${book.id}`}>
                    <button className="btn btn-primary">
                      View Details
                    </button>
                  </Link>
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </div>
  );
};

export default AllBooksPage;