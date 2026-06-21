import Marquee from "react-fast-marquee";
import booksData from "../data/booksData.json";
const Marqueee = () => {
  console.log(booksData); //array of objects

  return (
    <div className="bg-olive-600 flex gap-3">
      <button className="btn btn-soft font-bold text-red-500">
        New Arrivals :{" "}
      </button>
      <Marquee pauseOnHover={true} speed={50}>
        <div className="flex gap-3 ">
          {booksData.map((book) => (
            <span key={book.id}> {book.title}</span>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Marqueee;
