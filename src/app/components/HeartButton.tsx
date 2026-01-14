"use client";

import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useState } from "react";

interface HeartButtonProps {
    listingId?: string;
    currentUser?: null | { id: string }; // simple user type for now
}

const HeartButton: React.FC<HeartButtonProps> = ({ listingId, currentUser }) => {
    // Mock state for now since we don't have backend integration for favorites yet
    const [hasFavorited, setHasFavorited] = useState(false);

    const toggleFavorite = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        setHasFavorited((value) => !value);
    };

    return (
        <div
            onClick={toggleFavorite}
            className="
        relative
        hover:opacity-80
        transition
        cursor-pointer
      "
        >
            <AiOutlineHeart
                size={28}
                className="
          fill-white
          absolute
          -top-[2px]
          -right-[2px]
        "
            />
            <AiFillHeart
                size={24}
                className={
                    hasFavorited ? "fill-rose-500" : "fill-neutral-500/70"
                }
            />
        </div>
    );
};

export default HeartButton;
