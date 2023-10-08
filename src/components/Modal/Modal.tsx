import Overlay from "./Overlay";
import { XIcon } from "lucide-react";

interface Props {
  showModal: boolean;
  handleShow: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({ showModal, handleShow, title, children }: Props) => {
  return (
    <>
      <Overlay isOpen={showModal} toggle={handleShow} />
      <div
        className={`${
          showModal ? "top-[40px]" : "-top-[4000px]"
        } fixed left-0 right-0 z-50 mx-auto flex w-[500px] max-w-full place-items-center justify-center overflow-hidden transition-all ease-out`}
      >
        <div className="mx-4 w-full rounded-sm bg-white dark:bg-slate-700">
          <div className="border-gray-4 relative flex justify-between gap-3 border-b border-slate-100 px-5 py-4 dark:border-slate-600">
            <span className="font-semibold">{title}</span>
            <button className="text-xl text-red-400" onClick={handleShow}>
              <XIcon />
            </button>
          </div>
          <div className="max-h-[calc(100dvh-140px)] overflow-auto">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
