import Link from "next/link";
import clsx from "clsx";

const baseStyles = {
  solid: 'block text-center sm:mb-0 px-4 sm:px-8 font-lexend rounded-md transition-all',
  outline: 'block text-center sm:mb-0 px-4 sm:px-8 font-lexend rounded-md transition-all ring-2'
}

const variantStyles = {
  solid: {
    slate: 'bg-slate-700 hover:slate-400 text-slate-50',
    blue: 'bg-sky-900 hover:bg-sky-600 text-slate-50 shadow-md'
  },
  outline: {
    slate: 'ring-slate-700 text-slate-50 shadow-md',
    blue: 'ring-sky-900 text-sky-900'
  }
}

const heightStyles = {
  small: 'py-2.5 sm:py-3 text-sm sm:text-base',
  tall: 'py-3 '
}


export default function Button({variant = 'solid', color = 'slate', height = 'small', className = '', href, children}) {

  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    heightStyles[height],
    className
  )

  return href ? (
    <Link href={href} className={className}>{children}</Link>
  ) : (
    <button className={className}>{children}</button>
  )
}