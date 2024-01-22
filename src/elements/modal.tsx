import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-neutral-400 bg-opacity-75">
      <div className="w-[509px] bg-white rounded-[10px] p-6">
        {children}
        <div className="flex justify-end mt-4">
          <button
            className="w-[92px] h-[41px] bg-red-600 rounded-[5px] text-white text-xl font-bold font-raleway tracking-wide"
            onClick={onClose}
          >
            No
          </button>
          {/* You can add more buttons or customize as needed */}
        </div>
      </div>
    </div>
  );
};

export default Modal;
