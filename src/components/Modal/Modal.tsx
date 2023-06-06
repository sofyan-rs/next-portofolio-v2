import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Overlay from "./Overlay";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

interface Props {
  showModal: boolean;
  handleShow: () => void;
  title: string;
  children: React.ReactNode;
}

const Modal = ({
  showModal,
  handleShow,
  title,
  children,
}: Props) => {
  return (
    <>
      <Overlay isOpen={showModal} toggle={handleShow} />
      <div
        className={`${
          showModal ? "top-[30px]" : "-top-[4000px]"
        } w-[500px] max-w-full fixed left-0 right-0 z-50 mx-auto flex place-items-center justify-center overflow-hidden transition-all ease-out`}
      >
        <div className="mx-4 w-full overflow-hidden rounded-sm bg-white dark:bg-slate-700">
          <div className="border-gray-4 relative px-5 py-4 border-b flex justify-between border-slate-100 dark:border-slate-600">
            <span className="font-semibold">{title}</span>
            <button className="text-xl text-red-400" onClick={handleShow}>
              <FontAwesomeIcon icon={faXmark} fixedWidth />
            </button>
          </div>
          {children}
        </div>
      </div>
    </>
  );
}

export default Modal;