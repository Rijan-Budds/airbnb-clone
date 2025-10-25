"use client";
import React from "react";
import Image from "next/image";

function Avatar() {
  return (
    <Image
      className="rounded-full"
      src="/images/avatar.jpg"
      alt="User Avatar"
      width={30}
      height={30}
    />
  );
}

export default Avatar;
