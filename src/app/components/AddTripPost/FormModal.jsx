import { useEffect } from 'react';
import AddTripForm from '@/app/components/AddTripPost/AddTripForm';
import FormProvider from '@/app/components/AddTripPost/FormContext';
import CloseIcon from '@/app/icons/CloseIcon';
const FormModal = ({ isOpen, onClose }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isOpen]);

  if (!isOpen) return null;
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50 isolate ${isOpen ? 'block' : 'hidden'}`}
      style={{ zIndex: 1000 }}
    >
      <div className="md:w-11/12 w-full h-full lg:w-3/4 md:h-5/6 rounded-md relative overflow-hidden isolate z-50">
        <button
          className="absolute top-1 right-1 z-10 bg-black/50 flex justify-center items-center w-10 rounded-md"
          onClick={onClose}
        >
          <CloseIcon color="white" />
        </button>
        <FormProvider>
          <AddTripForm onClose={onClose} />
        </FormProvider>
      </div>
    </div>
  );
};

export default FormModal;
