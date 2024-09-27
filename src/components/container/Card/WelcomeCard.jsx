import React from "react";
import Link from "next/link";
import { SealPercent, Wallet } from "@phosphor-icons/react";
const WelcomeCard = () => {
  return (
    <div className="card bg-color-primary shadow-xl w-full">
      <div className="card-body p-5 md:p-auto">
        <div className="flex items-center gap-1">
          {/* avatar */}
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <div className="font-semibold text-color-secondary text-xl">
            Hallo,
            <span className="text-color-secondary font-bold">
              {/* name user auth */}
              Zaskia Nuraini
            </span>
          </div>
        </div>
        <div className="flex gap-1 md:gap-2">
          <div className="w-1/2 hover:scale-105 group overflow-hidden">
            <Link href="/voucher">
              <div className="card bg-color-secondary group-hover:opacity-95 w-full">
                <div className="card-body">
                  <div className="flex gap-2 items-center justify-center">
                    {/* image */}
                    <SealPercent size={34} weight="duotone" className="text-color-light"/>
                    <div className="text-white lg:text-2xl text-lg">Voucher</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-1/2 hover:scale-105 group overflow-hidden">
            <Link href="/balance">
              <div className="card bg-color-secondary group-hover:opacity-95 w-full">
                <div className="card-body">
                  <div className="flex gap-2 items-center justify-center">
                    {/* image */}
                    <Wallet size={34} weight="duotone" className="text-color-light"/>
                    <h2 className="text-white lg:text-2xl text-lg">Saldo</h2>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomeCard;
