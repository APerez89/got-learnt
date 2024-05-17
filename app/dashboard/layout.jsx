'use client';
import SideNav from "../ui/dashboard/side-nav";
import StatsNav from "../ui/dashboard/stats-nav";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col p-6 bg-slate-200">
      <div className="w-full h-full flex-none grid gap-4 grid-cols-7">
        <SideNav />
        <div className="flex-grow p-6 col-span-4 text-black">{children}</div>
        <StatsNav />
      </div>
    </div>
  )
}