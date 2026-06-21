import Image from "next/image";
import bookImg from "../../public/Essential-Books.avif"
import Link from "next/link";
import Marquee from "@/Components/Marquee";
import FeaturedBooks from "@/Components/FeaturedBooks";
import ReadersLoveUs from "@/Components/ReadersLoveUs";
import BrowseByCategory from "@/Components/BrowseByCategory";
import Footer from "@/Components/Footer";
export default function Home() {
  return (
    <div>

<div className="container flex flex-col items-center justify-center gap-4 mt-10 mx-auto bg-base-200">

{/* Banner */}
<Image src={bookImg} alt="book-img" width={500} height={200}></Image>
<h1 className="font-bold text-3xl">Find Your Next Read</h1>
<button className="btn btn-soft"><Link href={'/'}>Browse Now</Link></button>
</div>

{/* Marquee */}
<Marquee/>

{/* Featured Books */}
<FeaturedBooks/>

{/* Browse By Category */}
<BrowseByCategory/>

{/* Why Readers Love Us */}
<ReadersLoveUs/>

{/* Footer */}
<Footer/>

    </div>
  );
}
