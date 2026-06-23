"use client";
import booksData from "@/data/booksData.json";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AllBooksPage = () => {
  //declaring state
  const [searchText, setSearchText] = useState("");
  //handle search onChange function
  const handleSearchOnChange = (e) => {
    const getTheText = e.target.value;
    setSearchText(getTheText);
  };
  //filter 
  const filteredBook = booksData.filter((book)=>book.title.toLowerCase().includes(searchText.toLowerCase()));
  //remaining 
  const remainingBooks = searchText === "" ? booksData : booksData.filter((book)=>!book.title.toLowerCase().includes(searchText.toLowerCase()));

  return (
    <div>
      <h2 className="text-center font-bold text-3xl my-5">All boooks page.</h2>
      <label className="input my-3">
        <Search />
        <input
          type="search"
          required
          placeholder="Search Book By Title"
          onChange={handleSearchOnChange}
        />
      </label>
      <div className="grid grid-cols-3 gap-5">

{/*displaying the book based on search */}
{searchText && filteredBook.map((book)=>
          <div key={book.id} className="card bg-red-400 w-96 shadow-sm">
            <figure>
              <Image
                src={book.image_url}
                alt="book-img"
                width={200}
                height={100}
                className="w-[400px] h-[400px] object-contain mx-auto"
              ></Image>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{book.title} (The searched book)</h2>
              <div className="card-actions justify-end">
                <Link href={`/bookdetails/${book.id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>)
}

        {/* displaying all the books initially and then after the searching displaying  remaining books(the books that was not searched)*/}
        {remainingBooks.map((book) => (
          <div key={book.id} className="card bg-base-100 w-96 shadow-sm">
            <figure>
              <Image
                src={book.image_url}
                alt="book-img"
                width={200}
                height={100}
                className="w-[400px] h-[400px] object-contain mx-auto"
              ></Image>
            </figure>
            <div className="card-body">
              <h2 className="card-title">{book.title}</h2>
              <div className="card-actions justify-end">
                <Link href={`/bookdetails/${book.id}`}>
                  <button className="btn btn-primary">View Details</button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllBooksPage;