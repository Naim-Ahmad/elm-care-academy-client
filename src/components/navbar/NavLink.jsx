"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export default function NavLink(props) {
  const pathname = usePathname()
  // console.log(pathname)
  return (
    <Link {...props} className={`${props.className} ${pathname === props.href ? "active" : null}`}>
      {props.children}
    </Link>
  )
}