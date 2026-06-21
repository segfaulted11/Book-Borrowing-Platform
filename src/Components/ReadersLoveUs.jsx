import { LibraryBig, Lock, ZapIcon } from "lucide-react";

const ReadersLoveUs = () => {
    return (
        <div  className='my-5'>
<h1 className="text-center text-3xl font-bold">⭐ Why Readers Love Us</h1>

<div className="bg-red-300 grid grid-cols-3 gap-3 mt-3">
<div className="bg-base-100 p-10">
<div className="flex flex-col gap-3 items-center">
<LibraryBig className="text-center"/>
<h4 className="font-bold text-3xl"> Diverse Categories </h4>
<p className="text-md">Explore Story, Tech, and Science books.</p>
</div >
</div>

<div className="bg-base-100 p-10">
<div className="flex flex-col gap-3 items-center">
<ZapIcon className="text-center"/>
<h4 className="font-bold text-3xl"> Easy Borrowing</h4>
<p className="text-md">Borrow books with a single click.</p>
</div>
</div>  

<div className="bg-base-100 p-10">
<div className="flex flex-col gap-3 items-center">
<Lock className="text-center"/>
<h4 className="font-bold text-3xl"> Secure Login</h4>
<p className="text-md">Protected with BetterAuth and Google Sign-In.</p>
</div>
</div>  

</div>
        </div>
    );
};

export default ReadersLoveUs;