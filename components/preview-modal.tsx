"use client";

import Info from "@/components/info";
import Modal from "@/components/ui/modal";
import usePreviewModal from "@/hooks/use-preview-modal";


const PreviewModal = () => {
  const previewModal = usePreviewModal();
  const products:string[] = ['בונדטק','אקריל','P.C uv','FR P.V.D.F','PVC FOAM']


  if (!products) {
    return null;
  }

  return ( 
    <Modal 
      open={previewModal.isOpen} 
      onClose={previewModal.onClose}
    >
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <div className="sm:col-span-4 lg:col-span-5">
        </div>
        <div className="sm:col-span-8 lg:col-span-7">
          <Info data={products} />
        </div>
      </div>
    </Modal>
  );
}
 
export default PreviewModal;
