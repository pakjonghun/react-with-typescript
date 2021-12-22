import React, { useCallback, useState } from "react";

export const useInput = () => {
  const [value, setValue] = useState("");

  const onChange = useCallback((event: React.FormEvent<HTMLInputElement>) => {
    setValue(event.currentTarget.value);
  }, []);

  return { onChange, value };
};
