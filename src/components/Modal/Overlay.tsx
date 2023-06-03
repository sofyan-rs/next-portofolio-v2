interface Props {
  isOpen: boolean;
  toggle: () => void;
}

const Overlay = ({ isOpen, toggle }: Props) => {
  if (isOpen) document.body.classList.add("overflow-hidden");
  else document.body.classList.remove("overflow-hidden");

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions
    <div
      className={`${
        isOpen ? "" : "hidden"
      } bg-slate-800/30 dark:bg-slate-800/70 backdrop-blur-sm fixed bottom-0 left-0 right-0 top-0 z-40 overflow-hidden transition duration-300 ease-in-out`}
      onClick={toggle}
    ></div>
  );
}

export default Overlay;
