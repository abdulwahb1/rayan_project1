import React from "react";
import Link from "next/link";

const Navbar2 = () => {
  return (
    <div className="w-full flex justify-end items-center mt-5 -ml-5">
      <Link href="/">
        <span className="text-white hover:text-darkblueui">Our Mission</span>
      </Link>
      <Link href="/">
        <span className="text-white ml-8 hover:text-darkblueui">Pricing</span>
      </Link>
      <Link href="/">
        <span className="text-white ml-8 hover:text-darkblueui">Contact</span>
      </Link>
      <button className="text-darkblueui font-bold bg-white px-4 py-1 text-base rounded-full ml-8 hover:bg-gray-200">
        Sign In
      </button>
    </div>
  );
};

export default Navbar2;
