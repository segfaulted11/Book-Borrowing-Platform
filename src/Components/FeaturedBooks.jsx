"use client";

import Image from "next/image";
import Link from "next/link";
import booksData from "../data/booksData.json";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const FeaturedBooks = () => {
  const featuredBooks = booksData.slice(0, 4);

  return (
    <div className="py-8 md:py-10 lg:py-14">
      <h2 className="text-center font-bold text-2xl sm:text-3xl md:text-4xl mb-6 md:mb-8">
        Featured Books
      </h2>

      <div className="container mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          spaceBetween={20}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {featuredBooks.map((book) => (
            <SwiperSlide key={book.id}>
              <div className="card bg-neutral-800 text-neutral-content shadow-sm h-full flex flex-col">

                <figure className="px-4 pt-4">
                  <Image
                    src={book.image_url}
                    alt={book.title}
                    width={200}
                    height={300}
className="w-full max-w-[180px] sm:max-w-[200px] h-[220px] sm:h-[250px] md:h-[280px]"
                  />
                </figure>

                <div className="card-body flex flex-col">
                  <h2 className="card-title text-lg md:text-xl line-clamp-2">
                    {book.title}
                  </h2>

                  <p className="text-sm md:text-base">
                    By {book.author}
                  </p>

                  <div className="card-actions justify-end mt-auto">
                    <Link href={`/bookdetails/${book.id}`}>
                      <button className="btn btn-primary w-full sm:w-auto">
                        View Details
                      </button>
                    </Link>
                  </div>

                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default FeaturedBooks;