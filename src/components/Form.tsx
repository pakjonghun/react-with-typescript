import React, { FormEvent, useCallback, useMemo } from "react";
import { useInput } from "./Input";

const Form = () => {
  const st = { backgroundColor: "tomato" };
  const sta = useMemo(() => st, []);

  const attrs = useInput();

  const onSubmit = useCallback(
    (e: React.SyntheticEvent) => {
      e.preventDefault();
      console.log(attrs.value);
    },
    [attrs.value]
  );

  return (
    <form onSubmit={onSubmit}>
      <input type="text" {...attrs} style={sta} />
      <button type="submit">submit</button>
    </form>
  );
};

export default Form;
