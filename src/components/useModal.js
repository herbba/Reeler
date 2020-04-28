import { useState } from 'react';


/**
 * Handle modal stage
 */
const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [register, setRegister] = useState(false);

  /**
   * if register is true return register pop-up else login pop-up
   * @param {*} register 
   */
  function toggle(register) {
    if (register) {
      setRegister(true);
    } else {
      setRegister(false);
    }
    setIsShowing(!isShowing);
  }

  return {
    register,
    isShowing,
    toggle,
  };
};

export default useModal;
