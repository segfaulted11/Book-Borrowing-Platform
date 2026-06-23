import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import bookImg from "../../public/Essential-Books.avif";

const Banner = () => {
    return (
<div className="container flex flex-col items-center justify-center gap-4 mt-10 mx-auto bg-base-200">

<Image src={bookImg} alt="book-img" width={500} height={200}></Image>
<h1 className="font-bold text-3xl">Find Your Next Read</h1>
<button className="btn btn-soft"><Link href={'/allbooks'}>Browse Now</Link></button>
</div>
    );
};

export default Banner;