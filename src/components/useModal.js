import { useState } from 'react';

const useModal = () => {
  const [isShowing, setIsShowing] = useState(false);
  const [register, setRegister] = useState(false);

  function toggle(register) {
    if(register) {
      setRegister(true);
    }
    else {
      setRegister(false);
    }
    setIsShowing(!isShowing);
  }

  return {
    register,
    isShowing,
    toggle,
  }
};

export default useModal;
