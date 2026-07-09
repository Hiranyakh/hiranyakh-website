"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/services/weight-loss", label: "Programs" },
  { href: "/contact", label: "Contact" },
];

type NavLinksProps = {
  mobile?: boolean;
  onClick?: () => void;
};

export default function NavLinks({
  mobile = false,
  onClick,
}: NavLinksProps) {
  const pathname = usePathname();

  return (
    <>
      {links.map((link) => {
        const active =
          pathname === link.href ||
          (link.href === "/services/weight-loss" &&
            pathname.startsWith("/services"));

        return (
          <Link
            key={link.href}
            href={link.href}
            onClick={onClick}
            className={clsx(
              "font-medium transition-all duration-300",
              mobile
                ? "block rounded-xl px-4 py-3 text-lg"
                : "px-1 py-2",
              active
                ? "text-[#10B981]"
                : "text-gray-700 hover:text-[#10B981]"
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </>
  );
}