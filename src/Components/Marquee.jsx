import Marquee from "react-fast-marquee";
import booksData from "../data/booksData.json";

const Marqueee = () => {
  return (
    <div className="bg-olive-600 flex items-center gap-2 md:gap-4 px-3 md:px-4 py-2 overflow-hidden">
      <button className="btn btn-soft btn-sm md:btn-md font-bold text-red-500 whitespace-nowrap shrink-0">
        New Arrivals:
      </button>

      <Marquee
        pauseOnHover={true}
        speed={50}
        className="flex-1"
      >
        <div className="flex gap-6 md:gap-10 text-sm md:text-base">
          {booksData.map((book) => (
            <span
              key={book.id}
              className="whitespace-nowrap"
            >
              📖 {book.title}
            </span>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Marqueee;