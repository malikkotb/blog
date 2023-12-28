import { ModeToggle } from "./ModeToggle";

import Ellipse from "./Ellipse";
export default function Header() {
  return (
    <nav className="border-b px-5 py-4 items-center mx-auto flex justify-between w-full">
      <div>
        <Ellipse width={32} height={32} />
      </div>
      <ModeToggle />
    </nav>
  );
}
