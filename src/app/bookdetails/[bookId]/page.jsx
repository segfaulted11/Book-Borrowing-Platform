import Image from "next/image";
import booksData from "../../../data/booksData.json";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import BorrowButton from "@/Components/BorrowButton";

const BookDetailsPage = async ({ params }) => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  const book = booksData.find(
    (b) => b.id === parseInt(params.bookId)
  );

  if (!book) {
    return (
      <div className="text-center mt-10 text-lg">
        Book not found
      </div>
    );
  }

  return (
    <div className="px-4 py-6 md:py-10">
      <h2 className="text-center font-bold text-2xl md:text-3xl mb-6">
        Book Details
      </h2>

      <div className="flex justify-center">
        <div className="card bg-base-100 shadow-md w-full max-w-sm sm:max-w-md md:max-w-lg">

          {/* Image */}
          <figure className="p-4">
            <Image
              src={book.image_url}
              alt={book.title}
              width={300}
              height={400}
              className="w-full h-[250px] sm:h-[300px] object-contain"
            />
          </figure>

          {/* Content */}
          <div className="card-body space-y-2">

            <h2 className="card-title text-lg md:text-xl flex flex-col sm:flex-row sm:items-center gap-2">
              {book.title}
              <div className="badge badge-error text-xs">
                {book.category}
              </div>
            </h2>

            <p className="text-sm md:text-base font-semibold">
              Author - {book.author}
            </p>

            <p className="text-sm md:text-base leading-relaxed">
              {book.description}
            </p>

            <div className="badge badge-secondary text-xs md:text-sm w-fit">
              {book.available_quantity} books left!
            </div>

            <div className="pt-2">
              <BorrowButton />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetailsPage;