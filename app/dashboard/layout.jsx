import SideNav from "../ui/dashboard/side-nav";
import StatsNav from "../ui/dashboard/stats-nav";

export default function Layout({ children }) {
  return (
    <div className="flex h-screen flex-col">
      <div className="w-full h-full flex-none grid gap-4 grid-cols-7">
        <SideNav />
        <div className="flex-grow p-6 bg-amber-800 col-span-4">{children}</div>
        <StatsNav />
      </div>
    </div>
  )
}