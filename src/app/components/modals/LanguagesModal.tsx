'use client';

import { useState } from 'react';
import useLanguagesModal from '@/app/hooks/useLanguagesModal';
import Modal from './Modal';
import Button from '../Button';

enum TAB {
    LANGUAGES = 0,
    CURRENCY = 1,
}

const LanguagesModal = () => {
    const languagesModal = useLanguagesModal();
    const [tab, setTab] = useState(TAB.LANGUAGES);

    // Mock Data
    const languages = [
        { label: 'English', region: 'United States' },
        { label: 'Español', region: 'España' },
        { label: 'Français', region: 'France' },
        { label: 'Deutsch', region: 'Deutschland' },
        { label: 'Italiano', region: 'Italia' },
        { label: 'Português', region: 'Brasil' },
        { label: '中文 (简体)', region: '中国' },
        { label: '日本語', region: '日本' },
        { label: '한국어', region: '대한민국' },
        { label: 'Русский', region: 'Россия' },
        { label: 'العربية', region: 'العالم' },
        { label: 'हिन्दी', region: 'भारत' },
    ];

    const currencies = [
        { label: 'United States dollar', symbol: 'USD - $' },
        { label: 'Euro', symbol: 'EUR - €' },
        { label: 'British pound', symbol: 'GBP - £' },
        { label: 'Australian dollar', symbol: 'AUD - $' },
        { label: 'Canadian dollar', symbol: 'CAD - $' },
        { label: 'Chinese yuan', symbol: 'CNY - ¥' },
        { label: 'Japanese yen', symbol: 'JPY - ¥' },
        { label: 'South Korean won', symbol: 'KRW - ₩' },
        { label: 'Indian rupee', symbol: 'INR - ₹' },
        { label: 'Nepalese rupee', symbol: 'NPR - ₨' },
        { label: 'Swiss franc', symbol: 'CHF' },
        { label: 'United Arab Emirates dirham', symbol: 'AED' },
    ];

    const content = (
        <div className='flex flex-col gap-6'>
            {/* Tabs */}
            <div className='flex flex-row items-center gap-4 border-b border-gray-200 pb-2 mb-4'>
                <div
                    onClick={() => setTab(TAB.LANGUAGES)}
                    className={`text-sm font-semibold cursor-pointer py-2 px-2 transition ${tab === TAB.LANGUAGES ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:bg-neutral-100 rounded-md'}`}
                >
                    Language and region
                </div>
                <div
                    onClick={() => setTab(TAB.CURRENCY)}
                    className={`text-sm font-semibold cursor-pointer py-2 px-2 transition ${tab === TAB.CURRENCY ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:bg-neutral-100 rounded-md'}`}
                >
                    Currency
                </div>
            </div>

            {/* Languages Content */}
            {tab === TAB.LANGUAGES && (
                <>
                    <h3 className='text-lg font-semibold mb-2'>Choose a language and region</h3>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 max-h-[50vh] overflow-y-auto'>
                        {languages.map((lang) => (
                            <div key={lang.label} className='p-3 rounded-lg hover:bg-neutral-100 cursor-pointer transition'>
                                <div className='font-normal text-sm text-neutral-800'>{lang.label}</div>
                                <div className='font-light text-xs text-neutral-500'>{lang.region}</div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* Currency Content */}
            {tab === TAB.CURRENCY && (
                <>
                    <h3 className='text-lg font-semibold mb-2'>Choose a currency</h3>
                    <div className='grid grid-cols-1 md:grid-cols-4 gap-4 max-h-[50vh] overflow-y-auto'>
                        {currencies.map((curr) => (
                            <div key={curr.label} className='p-3 rounded-lg hover:bg-neutral-100 cursor-pointer transition'>
                                <div className='font-normal text-sm text-neutral-800'>{curr.label}</div>
                                <div className='font-light text-xs text-neutral-500'>{curr.symbol}</div>
                            </div>
                        ))}
                    </div>
                </>
            )}

        </div>
    );

    return (
        <Modal
            isOpen={languagesModal.isOpen}
            onClose={languagesModal.onClose}
            onSubmit={languagesModal.onClose}
            actionLabel="Close" // We can hide simple "Close" button usage or adapt Modal if needed
            title="" // Empty title as tabs serve as title area
            body={content}
        // To mimic Airbnb, we might want a cleaner modal without standard footer buttons, or customized ones.
        // For now using standard Modal props.
        />
    );
}

export default LanguagesModal;
