'use client';

import { useState } from 'react';
import Modal from './Modal';
import { FaTags } from "react-icons/fa";

const PriceDisplayModal = () => {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return null;

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <div className="text-center font-light text-neutral-500 mt-2">
                <div className="flex flex-row items-center justify-center gap-2 mb-4">
                    <div className="p-2 bg-transparent rounded-full text-rose-500">
                        <FaTags size={40} />
                    </div>
                </div>
                <div className="text-xl font-bold text-neutral-800 mb-2">
                    One total price
                </div>
                <div className="text-lg">
                    Now you’ll see one price for your trip, all fees included.
                </div>
            </div>
        </div>
    );

    return (
        <Modal
            isOpen={isOpen}
            title=" "
            actionLabel="Got it"
            onClose={() => setIsOpen(false)}
            onSubmit={() => setIsOpen(false)}
            body={bodyContent}
        />
    );
};

export default PriceDisplayModal;
