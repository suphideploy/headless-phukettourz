import React from 'react';
import Link from 'next/link';

const Navigation = () => (
    <nav className='flex justify-center gap-8 mb-5'>
        <Link href="/home" className='font-semibold text-teal-800'>Home</Link>
        <Link href="/tours" className='font-semibold text-teal-800'>Sea Tours</Link>
        <Link href="/blog" className='font-semibold text-teal-800'>Blog</Link>
        <Link href="/about" className='font-semibold text-teal-800'>About</Link>
        <Link href="/home" className='font-semibold text-teal-800'>Contact</Link>
    </nav>
);

export default Navigation;
