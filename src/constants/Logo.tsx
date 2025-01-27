import { Code2 } from "lucide-react";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href="/">
      <div className="flex-center flex-col gap-2">
        <div className="flex-center gap-1">
          <Code2 size={40} />
          <h1 className="text-3xl font-black text-gray-700 text-center">
            <span className="text-gradient">FindDevs</span>
          </h1>
        </div>
      </div>
    </Link>
  );
};

export default Logo;
