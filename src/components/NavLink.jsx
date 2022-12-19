import Link from "next/link";

export default function NavLink({href, pathname, mobile = false, children}) {

  let className = '';
  if (pathname && mobile){
    className = pathname == href ? 'relative pl-10 py-4 bg-slate-50 w-full font-lexend'
      : 'relative pl-10 py-4 w-full font-lexend text-slate-50'
  } else if (pathname) {
    className = pathname == href ? 'hidden sm:inline relative py-2 font-lexend after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:bg-slate-500'
      : 'hidden sm:inline relative py-2 font-lexend after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:bg-slate-400 after:scale-0 after:opacity-0 after:transition-all hover:after:scale-100 hover:after:opacity-100'
  } else {
    className = 'hidden sm:inline relative py-2 font-lexend after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-center after:bg-slate-400 after:scale-0 after:opacity-0 after:transition-all hover:after:scale-100 hover:after:opacity-100'
  };

  return (
    <Link href={href} className={className}>
    {children}
  </Link>
  )
}

