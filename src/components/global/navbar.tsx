import Link from "next/link";
import { ModeToggle } from "./mode-toggler";
import { MenuIcon } from "lucide-react";
import Image from "next/image";

const Navbar = async () => {
  return (
    <div className="fixed right-0 left-0 top-0  backdrop-blur-lg z-[50] shadow-lg">
      <header className="flex items-center py-4 px-4 justify-between container mx-auto">
        <aside className="flex items-center gap-[2px]">
          <Link href="/">
            <Image src="/lazier.png" height={15} width={100} alt="logo" />
          </Link>
        </aside>
        <nav className="absolute left-[50%] top-[50%] transform translate-x-[-50%] translate-y-[-50%] hidden md:block">
          <ul className="flex items-center gap-4 list-none">
            <li>
              <Link href="#">Products</Link>
            </li>
            <li>
              <Link href="#">Pricing</Link>
            </li>
            <li>
              <Link href="#">Documentation</Link>
            </li>
            <li>
              <Link href="#">Resources</Link>
            </li>
          </ul>
        </nav>
        <aside className="flex items-center gap-4">
          <Link
            href="/dashboard"
            className="relative inline-flex h-10 overflow-hidden rounded-full p-[2px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
          >
            <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#C195FF_0%,#393BB2_50%,#C195FF_100%)]" />
            <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
              {/* TODO: User */}
              {true ? "Dashboard" : "Get Started"}
            </span>
          </Link>
          <ModeToggle />
          {/* TODO: User */}
          <MenuIcon className="md:hidden" />
        </aside>
      </header>
    </div>
  );
};

export default Navbar;
