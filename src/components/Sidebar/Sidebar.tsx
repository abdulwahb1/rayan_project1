import React from "react";
import SidebarCard from "../ui/SidebarCard";
import { PROFILE_SIDEBAR } from "../../constants/constant";

const Sidebar = () => {
  return (
    <section className="flex flex-col min-w-[250px] max-w-[250px] bg-[#181849] min-h-screen">
      <h2 className="text-white text-2xl font-bold mt-4 ml-6">Profile</h2>
      <div className="flex flex-col w-full mt-5">
        {PROFILE_SIDEBAR.map(
          (sidebar: { id: React.Key | null | undefined; title: string }) => (
            <SidebarCard key={sidebar.id} title={sidebar.title} />
          )
        )}
      </div>
    </section>
  );
};

export default Sidebar;
