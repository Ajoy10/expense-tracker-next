import { Price } from "@/components/Price";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-full flex flex-col">
      <Price price={-500} className=" text-3xl font-bold mt-8" />
      {/* Expense List */}
      <div id="add-btns" className="flex items-center gap-2">
        <Link
          className="p-2 bg-[#28584B] rounded-md flex-1 flex justify-center items-center"
          href="/add?loss=false"
        >
          Income
        </Link>
        <Link
          className="p-2 bg-[#742525] rounded-md flex-1 flex justify-center items-center"
          href="/add?loss=true"
        >
          Loss
        </Link>
      </div>
    </div>
  );
}
