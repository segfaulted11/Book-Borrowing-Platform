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
    <div className="py-10">
      <h2 className="text-center font-bold text-3xl mb-8">
        Featured Books
      </h2>

      <div className="container mx-auto px-4">

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000,
          }}
          spaceBetween={20}
          breakpoints={{
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
              <div className="card bg-base-100 shadow-sm h-full">

                <figure>
                  <Image
                    src={book.image_url}
                    alt={book.title}
                    width={200}
                    height={300}
                    className="h-[250px] object-contain"
                  />
                </figure>

                <div className="card-body">
                  <h2 className="card-title">
                    {book.title}
                  </h2>

                  <p>By {book.author}</p>

                  <div className="card-actions justify-end">
                    <Link href={`/bookdetails/${book.id}`}>
                      <button className="btn btn-primary">
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