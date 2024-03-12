import { create } from 'zustand';



interface PreviewModalStore {
  isOpen: boolean;


  onClose: () => void;
}

const usePreviewModal = create<PreviewModalStore>((set) => ({
  isOpen: false,
  data: undefined,

  onClose: () => set({ isOpen: false }),
}));

export default usePreviewModal;
