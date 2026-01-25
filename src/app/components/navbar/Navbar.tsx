"use client";
import React from "react";
import Container from "../Container";
import Logo from "./Logo";
import Search from "./Search";
import UserMenu from "./UserMenu";
import HostModal from "../modals/HostModal";
import Homes from "./Homes";

function Navbar() {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm md:48 rem">
      <Container>
        {/* The Parent Container is now a Column */}
        <div className="flex flex-col py-4 gap-4">
          
          {/* LAYER 1: Logo and Homes and UserMenu */}
          <div className="flex flex-row items-center justify-between">
            <Logo />
            <Homes />
            <UserMenu />
            <HostModal />
          </div>
            {/* LAYER 2: Search Bar */}
          <div className="flex justify-center">
            <Search />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Navbar;
