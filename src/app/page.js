import Marquee from "@/Components/Marquee";
import FeaturedBooks from "@/Components/FeaturedBooks";
import ReadersLoveUs from "@/Components/ReadersLoveUs";
import BrowseByCategory from "@/Components/BrowseByCategory";
import Footer from "@/Components/Footer";
import Banner from "@/Components/Banner";
export default function Home() {
  return (
    <div>

{/* Bannee */}
<Banner/>

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
