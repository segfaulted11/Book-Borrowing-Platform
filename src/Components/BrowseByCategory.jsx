import { BookOpenText, Laptop, Microscope } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const BrowseByCategory = () => {
    return (
        <div className='my-5'>
            <h1 className="text-center text-3xl font-bold">📚 Browse by Category</h1>
            <div className="bg-red-300 grid grid-cols-3 gap-3 mt-3">
<div className="bg-base-100 p-10">
<div className="flex flex-col gap-3 items-center">
<BookOpenText className="text-center"/>
<h4 className="font-bold text-3xl">Story </h4>
<button className='btn btn-soft'><Link href={'/'}>Explore Story Books</Link></button>
</div >
</div>

<div className="bg-base-100 p-10">
<div className="flex flex-col gap-3 items-center">
<Laptop className="text-center"/>
<h4 className="font-bold text-3xl"> Tech</h4>
<button className='btn btn-soft'><Link href={'/'}>Explore Tech Books</Link></button>
</div>
</div>  

<div className="bg-base-100 p-10">
<div className="flex flex-col gap-3 items-center">
<Microscope className="text-center"/>
<h4 className="font-bold text-3xl">Science</h4>
<button className='btn btn-soft'><Link href={'/'}>Explore Science Books</Link></button>
</div>
</div>  

</div>
        </div>
    );
};

export default BrowseByCategory;