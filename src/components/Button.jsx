import Link from "next/link";
import clsx from "clsx";

const baseStyles = {
  solid: 'block text-center sm:mb-0 px-4 sm:px-8 font-lexend rounded-md transition-all',
  outline: 'block text-center sm:mb-0 px-4 sm:px-8 font-lexend rounded-md transition-all border-2'
}

const variantStyles = {
  solid: {
    slate: 'bg-slate-700 hover:slate-400 text-slate-50',
    blue: 'bg-sky-900 hover:bg-sky-600 text-slate-50 shadow-md'
  },
  outline: {
    slate: 'border-slate-900 text-slate-900 shadow-md',
    white: 'ring-slate-50 text-slate-50 shadow-md',
    blue: 'border-sky-900 text-sky-900'
  }
}

const sizeStyles = {
  small: 'py-2.5 sm:py-3 text-sm sm:text-base',
  medium: 'text-lg py-3',
  big: 'text-xl py-3 w-72'
}


export default function Button({variant = 'solid', color = 'slate', size = 'small', className = '', href, onClick, children}) {

  className = clsx(
    baseStyles[variant],
    variantStyles[variant][color],
    sizeStyles[size],
    className
  )

  if (href) {
    return <Link href={href} className={className}>{children}</Link>
  } else if (onClick) {
    return <button onClick={onClick} className={className}>{children}</button>
  } else {
    return <button className={className}>{children}</button>
  }
}