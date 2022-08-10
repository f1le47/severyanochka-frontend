import usePortal from "hooks/usePortal";
import { createPortal } from "react-dom";
import { IModal } from "./IModal";

const Modal = ({id, children}: IModal) => {
  const target = usePortal(id)
  return createPortal(children, target)
}

export default Modal