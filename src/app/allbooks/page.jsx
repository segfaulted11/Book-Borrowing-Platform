"use client";

import booksData from "@/data/booksData.json";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AllBooksPage = () => {
  const [searchText, setSearchText] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleSearchOnChange = (e) => {
    setSearchText(e.target.value);
  };

  const categoryFilteredBooks =
    selectedCategory === "All"
      ? booksData
      : booksData.filter(
          (book) => book.category === selectedCategory
        );

  const finalBooks = categoryFilteredBooks.filter((book) =>
    book.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const categories = ["All", "Story", "Tech", "Science"];

  return (
    <div className="container mx-auto px-4 py-6">

      {/* Title */}
      <h2 className="text-center font-bold text-2xl md:text-3xl mb-6">
        All Books
      </h2>

      {/* Search */}
      <div className="mb-6">
        <label className="input input-bordered flex items-center gap-2 w-full">
          <Search size={18} />
          <input
            type="search"
            placeholder="Search Book By Title"
            onChange={handleSearchOnChange}
            className="w-full outline-none"
          />
        </label>
      </div>

      {/* Layout */}
      <div className="flex flex-col lg:flex-row gap-6">

        {/* Sidebar */}
        <aside className="w-full lg:w-56 flex flex-row lg:flex-col gap-2 overflow-x-auto lg:overflow-visible pb-2">

          <h2 className="font-bold text-lg md:text-xl mr-2 lg:mr-0 lg:mb-2 whitespace-nowrap">
            Categories
          </h2>

          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`btn btn-sm lg:btn-md whitespace-nowrap ${
                selectedCategory === cat ? "btn-primary" : ""
              }`}
            >
              {cat === "All" ? "All Books" : cat}
            </button>
          ))}

        </aside>

        {/* Books Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 flex-1">

          {finalBooks.map((book) => (
            <div
              key={book.id}
              className="card bg-base-100 shadow-sm hover:shadow-md transition"
            >

              <figure className="p-3">
                <Image
                  src={book.image_url}
                  alt={book.title}
                  width={300}
                  height={300}
                  className="w-full h-[220px] sm:h-[260px] object-contain"
                />
              </figure>

              <div className="card-body">

                <h2 className="card-title text-base md:text-lg line-clamp-2">
                  {book.title}
                </h2>

                <p className="text-sm md:text-base">
                  <strong>Category:</strong> {book.category}
                </p>

                <div className="card-actions justify-end mt-2">
                  <Link href={`/bookdetails/${book.id}`}>
                    <button className="btn btn-primary btn-sm md:btn-md">
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