import Link from 'next/link';

export default function SideNav() {
  const sideNavStyles = {
    backgroundColor: 'var(--sonic)',
    boxShadow: '0px 0px 15px rgba(0,0,0,0.3)'
  };
  
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2 col-span-1 text-slate-200 rounded-md" style={sideNavStyles}>
      <Link href='/'>Home</Link>
    </div>
  )
}