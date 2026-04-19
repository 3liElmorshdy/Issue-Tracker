import Link from 'next/link'
import React from 'react'
import { FaBug } from "react-icons/fa6";

const NavBar = () => {
  const links = [
    {
      label: "Dashboard",
      href: "/"
    },
    {
      label: "Issues",
      href: "/issues"
    }
  ]
  return( <>
  <nav className="flex space-x-6 items-center mb-5 h-14 border-b px-5">
  <Link href="/" >
    <FaBug />
  </Link>

  <ul className="flex space-x-6 list-none">
    {links.map((link) => (
      <li key={link.href} className='space-x-6'>
        <Link
          className="text-zinc-500 hover:text-zinc-800 transition-colors "
          href={link.href}
        > 
          {link.label}
        </Link>
      </li>
    ))}
  </ul>
</nav></>)
}

export default NavBar