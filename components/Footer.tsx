import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowTopRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
export default function Footer() {
  return (
    <div className="h-[40vh] opacity-70">
      <hr className="h-px border-t-0 bg-transparent bg-gradient-to-r from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100" />
      <div className="py-8 flex flex-col w-full items-center gap-4 ">
        {/* links/buttons to: tutorials, demos, About:portfolio page,  */}
        <div className="flex gap-4">
          <Button variant={"outline"} className="">
            TUTORIALS <ArrowTopRightIcon />
          </Button>
          <Button variant={"outline"} className="">
            PORTFOLIO <ArrowTopRightIcon />
          </Button>
        </div>
        <p className="text-[2.5vw] font-bold leading-none text-center">
          Things for creative devs <br />
          <span className="text-slate-600">sent to your inbox every week.</span>
        </p>
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Your email"
            className="rounded-xl border p-3 w-[30vw]"
          />
          <button className="bg-black text-white p-4 rounded-xl">Submit</button>
        </div>
      </div>
    </div>
  );
}
