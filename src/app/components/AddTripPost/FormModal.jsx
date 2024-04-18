import { CloseIcon } from '../../icons';
import AddTripForm from '@/app/components/AddTripPost/AddTripForm';
import FormProvider from '@/app/components/AddTripPost/FormContext';
const FormModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;
  return (
    <div
      className={`fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-50 ${isOpen ? 'block' : 'hidden'}`}
    >
      <div className="grid bg-white w-11/12 lg:w-1/2 h-5/6 rounded-md p-5">
        <button className="p-1 focus:outline-none" onClick={onClose}>
          <CloseIcon color="black" />
        </button>
        <FormProvider>
          <AddTripForm />
        </FormProvider>
      </div>
    </div>
  );
};

export default FormModal;
