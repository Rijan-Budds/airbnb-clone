"use client";

import React, { useCallback, useState } from "react";
import { BiGlobe } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import useLanguagesModal from "@/app/hooks/useLanguagesModal";
import MenuItem from "./MenuItem";
import useHostModal from "@/app/hooks/useHostModal";

function UserMenu() {
  const languagesModal = useLanguagesModal();
  const hostModal = useHostModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  const toggleHost = useCallback(() => {
   setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <div
          onClick={() => {hostModal.onOpen();}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          Become a host
        </div>
        <div
          onClick={languagesModal.onOpen}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer"
        >
          <BiGlobe size={18} />
        </div>
        <div
          onClick={toggleOpen}
          className="py-3 px-4 rounded-full hover:bg-neutral-100 transition cursor-pointer flex flex-row items-center gap-3"
        >
          <AiOutlineMenu />
        </div>
      </div>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <MenuItem onClick={() => { }} label="Log in" />
            <MenuItem onClick={() => { }} label="Sign up" />
            <hr />
            <MenuItem onClick={() => { }} label="Gift cards" />
            <MenuItem onClick={() => { }} label="Help Center" />
          </div>
        </div>
      )}
    </div>
  );
}

export default UserMenu;
