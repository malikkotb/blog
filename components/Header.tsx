import { ModeToggle } from "./ModeToggle";

import Link from "next/link";
import Image from "next/image";
export default function Header() {
  return (
    <div>
      <nav className="px-5 py-4 items-center mx-auto flex justify-between w-full">
        <Link href={"/"}>
          <Image alt="logo" width={36} height={36} src={"./Ellipse.png"} />
        </Link>
        <ModeToggle />
      </nav>
      <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
    </div>
  );
}
