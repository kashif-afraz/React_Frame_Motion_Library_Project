import { createPortal } from "react-dom";
import { motion } from "framer-motion";
export default function Modal({ title, children, onClose }) {
  // const hiddenAnimation = {opacity:0, y:30};
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        // initial={hiddenAnimation}
        //   animate={{opacity:1, y:0}}
        //   exit={hiddenAnimation}
        variants={{
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 30 },
        }}
        initial="hidden"
        animate="visible"
        exit="hidden"
        open
        className="modal"
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
