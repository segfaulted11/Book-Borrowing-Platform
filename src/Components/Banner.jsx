import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import bookImg from "../../public/Essential-Books.avif";

const Banner = () => {
    return (
        <div className="container mx-auto mt-6 md:mt-10 px-4">
            <div className="flex flex-col items-center justify-center gap-4 md:gap-6 bg-neutral-800 text-black rounded-lg py-8 md:py-12 lg:py-16">
                
                <Image
                    src={bookImg}
                    alt="book-img"
                    width={500}
                    height={200}
                    className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto"
                    priority
                />

                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center px-2">
                    Find Your Next Read
                </h1>

                <button className="btn btn-soft w-full max-w-xs sm:w-auto">
                    <Link href="/allbooks">Browse Now</Link>
                </button>

            </div>
        </div>
    );
};

export default Banner;