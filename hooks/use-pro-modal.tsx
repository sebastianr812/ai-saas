import { create } from 'zustand'

interface UseProModalStore {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useProModal = create<UseProModalStore>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false })
}));

export default useProModal;