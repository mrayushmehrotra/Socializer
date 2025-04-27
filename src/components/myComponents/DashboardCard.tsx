import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface Props {
  CardTitle: string;
  about: string;
  link: string;
}

const DashboardCard = ({ CardTitle, about, link }: Props) => {
  return (
    <div className="w-full sm:max-w-[70%]  md:max-w-md lg:max-w-lg border border-gray-600 bg-gradient-to-tr from-zinc-700 via-black to-slate-900 rounded-xl shadow-lg overflow-hidden mx-auto transition-transform duration-300 hover:scale-105">
      <div className="flex justify-between items-center px-4 sm:px-6 py-4">
        <div className="flex space-x-4">
          <div>
            <div className="text-lg text-white font-semibold">{CardTitle}</div>
          </div>
        </div>
      </div>
      <div className="px-4 sm:px-6 py-4">
        <div className="text-sm text-gray-300">{about}</div>
      </div>
      <div className="flex justify-between items-center pt-4 border-t border-gray-600 p-4">
        <div className="flex items-center space-x-4">
          <Link href={link}>
            <Button className="bg-transparent text-white border-2 border-white rounded-lg hover:bg-white hover:text-black transition-all duration-300">
              <h1 className="text-[15px] sm:text-[17px]">Go</h1>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DashboardCard;
