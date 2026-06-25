import { BookOpenText, Laptop, Microscope } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const BrowseByCategory = () => {
    return (
        <div className="my-8 md:my-12 px-4">
            <h1 className="text-center text-2xl sm:text-3xl md:text-4xl font-bold">
                📚 Browse by Category
            </h1>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mt-6 p-4 rounded-lg">

                <div className="bg-neutral-800 text-neutral-content p-6 md:p-8 lg:p-10 rounded-lg shadow-sm">
                    <div className="flex flex-col gap-3 items-center text-center">
                        <BookOpenText size={40} />
                        <h4 className="font-bold text-2xl md:text-3xl">
                            Story
                        </h4>
                        <button className="btn btn-soft w-full sm:w-auto">
                            <Link href="/">Explore Story Books</Link>
                        </button>
                    </div>
                </div>

                <div className="bg-neutral-800 text-neutral-content p-6 md:p-8 lg:p-10 rounded-lg shadow-sm">
                    <div className="flex flex-col gap-3 items-center text-center">
                        <Laptop size={40} />
                        <h4 className="font-bold text-2xl md:text-3xl">
                            Tech
                        </h4>
                        <button className="btn btn-soft w-full sm:w-auto">
                            <Link href="/">Explore Tech Books</Link>
                        </button>
                    </div>
                </div>

                <div className="bg-neutral-800 text-neutral-content p-6 md:p-8 lg:p-10 rounded-lg shadow-sm">
                    <div className="flex flex-col gap-3 items-center text-center">
                        <Microscope size={40} />
                        <h4 className="font-bold text-2xl md:text-3xl">
                            Science
                        </h4>
                        <button className="btn btn-soft w-full sm:w-auto">
                            <Link href="/">Explore Science Books</Link>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default BrowseByCategory;