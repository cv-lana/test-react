import { useState } from "react";

const initialState = {
  readonly: true,
  disabled: true
};

export const useDisabled = () => {
  const [active, setActive] = useState(initialState);

  const changeForm = () => {
    setActive({
      readonly: false,
      disabled: false
    });
  };

  return { active, changeForm };
};