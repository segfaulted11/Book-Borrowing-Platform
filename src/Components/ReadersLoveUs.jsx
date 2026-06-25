import { LibraryBig, Lock, ZapIcon } from "lucide-react";

const ReadersLoveUs = () => {
  return (
    <div className="my-8 md:my-12 px-4">
      <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">
        ⭐ Why Readers Love Us
      </h1>

      <div className=" grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 p-4 rounded-lg">

        <div className="bg-base-100 p-6 md:p-8 lg:p-10 rounded-lg shadow-sm">
          <div className="flex flex-col gap-3 items-center text-center">
            <LibraryBig size={40} />
            <h4 className="font-bold text-2xl md:text-3xl">
              Diverse Categories
            </h4>
            <p className="text-sm md:text-base">
              Explore Story, Tech, and Science books.
            </p>
          </div>
        </div>

        <div className="bg-base-100 p-6 md:p-8 lg:p-10 rounded-lg shadow-sm">
          <div className="flex flex-col gap-3 items-center text-center">
            <ZapIcon size={40} />
            <h4 className="font-bold text-2xl md:text-3xl">
              Easy Borrowing
            </h4>
            <p className="text-sm md:text-base">
              Borrow books with a single click.
            </p>
          </div>
        </div>

        <div className="bg-base-100 p-6 md:p-8 lg:p-10 rounded-lg shadow-sm sm:col-span-2 lg:col-span-1">
          <div className="flex flex-col gap-3 items-center text-center">
            <Lock size={40} />
            <h4 className="font-bold text-2xl md:text-3xl">
              Secure Login
            </h4>
            <p className="text-sm md:text-base">
              Protected with BetterAuth and Google Sign-In.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ReadersLoveUs;