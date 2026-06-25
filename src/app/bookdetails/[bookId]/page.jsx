import Image from "next/image";
import booksData from "../../../data/booksData.json";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import BorrowButton from "@/Components/BorrowButton";
const BookDetailsPage = async ({ params }) => {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) {
    redirect("/login");
  }
  const res = await params;
  const { bookId } = res;
  return (
    <div>
      {" "}
      <h2 className="text-center font-bold text-3xl my-4">
        BookDetailsPage
      </h2>{" "}
      <div className="flex justify-center">
        {" "}
        {booksData.map((book) => (
          <div key={book.id}>
            {" "}
            {book.id === parseInt(bookId) ? (
              <div className="card bg-neutral-800 text-black w-100 shadow-sm ">
                {" "}
                <figure>
                  {" "}
                  <Image
                    src={book.image_url}
                    alt="bookimg"
                    width={200}
                    height={100}
                  ></Image>{" "}
                </figure>{" "}
                <div className="card-body">
                  {" "}
                  <h2 className="card-title">
                    {" "}
                    {book.title}{" "}
                    <div className="badge badge-error">
                      {book.category}
                    </div>{" "}
                  </h2>{" "}
                  <p className="font-semibold">Author - {book.author}</p>{" "}
                  <p>{book.description}</p>{" "}
                  <div className="badge badge-secondary">
                    {" "}
                    {book.available_quantity} books left!{" "}
                  </div>{" "}
                  <BorrowButton />{" "}
                </div>{" "}
              </div>
            ) : null}{" "}
          </div>
        ))}{" "}
      </div>{" "}
    </div>
  );
};
export default BookDetailsPage;
