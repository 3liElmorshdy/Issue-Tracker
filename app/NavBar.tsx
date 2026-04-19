"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'
import { FaBug } from "react-icons/fa6";
import classNames from 'classnames';
const NavBar = () => {

  const currentPath = usePathname();
  console.log(currentPath);
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
        className={classNames(
          'text-zinc-500 hover:text-zinc-800 transition-colors',
          {
            'text-zinc-800': currentPath === link.href
          }
        )}
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