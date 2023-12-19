import { useRef, useEffect } from 'react';
import { createPortal } from 'react-dom';

function Modal({ open, children, onClose }) {
  // kad se componenta prvi put izvrsi, ovo dialog nije set je
  const dialog = useRef();
  
  useEffect(() =>{
    if (open) {
      dialog.current.showModal();
    } else {
      dialog.current.close();
    }
  }, [open]);

  // mozes da mislis na ovaj kod kao side Effect, iako imaju uticaj na UI, nema veze sa ovim sto ova component vraca
  // it's not directly related to this render cycle
  // so here im' not using useEffect to fix infinite loop, but to sync with broswer api's



  return createPortal(
    <dialog className="modal" ref={dialog} onClose={onClose}>
      {open ? children : null}
    </dialog>,
    document.getElementById('modal')
  );
}

export default Modal;
