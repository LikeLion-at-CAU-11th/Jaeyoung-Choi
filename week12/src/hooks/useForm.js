// 커스텀 훅을 사용해보자

import { useState } from "react";

// 무조건 use로 시작해야된다 이유는 모르겠음

export const useForm = () => {
  const [value, setValue] = useState("");
  const onChange = (e) => {
    setValue(e.target.value);
  };

  return [value, onChange];
};

//
