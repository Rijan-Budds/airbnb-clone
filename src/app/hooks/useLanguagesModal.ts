import { create } from 'zustand';

interface LanguagesModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useLanguagesModal = create<LanguagesModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useLanguagesModal;
