import React from "react";
import Link from "next/link";
import LanguageDropdown from "./LanguageDropdown";

const Toolbar = () => {
  return (
    <div className="text-color-secondary flex justify-end gap-1 text-xs lg:text-sm font-semibold mb-5">
      <Link href="/about">
        {/* image */}
        tentang invitaitonery |
      </Link>
      <Link href="/help">
        {/* icon */}
        bantuan |
      </Link>
      <LanguageDropdown />
    </div>
  );
};

export default Toolbar;
