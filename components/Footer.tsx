import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="h-[100px] opacity-70 bg-red-100">
      <div className="flex justify-start">
        {/* links/buttons to: tutorials, demos, About:portfolio page,  */}
        <Button variant={"outline"} className="">
          TUTORIALS <ArrowTopRightIcon />
        </Button>
        <Button variant={"outline"} className="">
          PORTFOLIO <ArrowTopRightIcon />
        </Button>
      </div>
    </div>
  );
}
