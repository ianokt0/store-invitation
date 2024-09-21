import React from "react";
import Link from "next/link";
import { SealPercent, Wallet } from "@phosphor-icons/react";
const WelcomeCard = () => {
  return (
    <div className="card bg-color-primary shadow-xl w-full">
      <div className="card-body">
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
        <div className="flex gap-4">
          <div className="w-1/2 hover:scale-105 group">
            <Link href="/voucher">
              <div className="card bg-color-secondary group-hover:opacity-95 group-hover:z-50 w-full">
                <div className="card-body">
                  <div className="flex gap-2 items-center justify-center">
                    {/* image */}
                    <SealPercent size={34} weight="duotone" />
                    <div className="text-white text-2xl">voucher</div>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div className="w-1/2 hover:scale-105 group">
            <Link href="/balance">
              <div className="card bg-color-secondary group-hover:opacity-95 group-hover:z-50 w-full">
                <div className="card-body">
                  <div className="flex gap-2 items-center justify-center">
                    {/* image */}
                    <Wallet size={34} weight="duotone" />
                    <h2 className="text-white text-2xl">saldo</h2>
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
