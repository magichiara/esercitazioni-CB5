import "./modal.scss";
import { MdOutlineClose } from "react-icons/md";

export const Modal = ({ children, modalstate, modalHandler }) => {
  if (!modalstate) return "";
  return (
    <div className="Modal">
      <div className="content">
        <button onClick={modalHandler}>
          <MdOutlineClose />
        </button>
        {children}
      </div>
      <div className="overlay"></div>
    </div>
  );
};
