import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sidebar, Navbar } from "@/components";

const Profile = () => {
  return (
    <section>
      <div>
        <Navbar />
        <Sidebar />
      </div>
    </section>
  );
};

export default Profile;
