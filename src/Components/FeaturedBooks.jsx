import Image from "next/image";
import booksData from "../data/booksData.json";
import Link from "next/link";
const FeaturedBooks = () => {
  return (
    <div className="bg-red-400">
      <h2 className="text-center font-bold text-3xl my-5">Featured Books </h2>
      <div className="grid grid-cols-4 mx-auto container">
        {booksData.map((book) => {
          return (
            <div key={book.id} className="">
              {book.id === 1 ||
              book.id === 2 ||
              book.id === 3 ||
              book.id === 4 ? (
                <div className="card bg-base-100 w-50 shadow-sm ">
                  <figure>
                    <Image
                      src={book.image_url}
                      alt="bookimg"
                      width={200}
                      height={100}
                    ></Image>
                  </figure>
                  <div className="card-body">
                    <h2 className="card-title">{book.title}</h2>
                    <p>{book.description}</p>
                    <div className="card-actions justify-end">
                      <button className="btn btn-primary">
                        <Link href={`/bookdetails/${book.id}`}>View Details</Link></button>
                    </div>
                  </div>
                </div>
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedBooks;
