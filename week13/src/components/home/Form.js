import React from "react";
import { styled } from "styled-components";

import { useSetRecoilState } from "recoil";
import { userNameAtom, emailAtom, dateAtom } from "../../recoil/atoms";
import { Input } from "../layout/common";

const Form = ({ type, inputType }) => {
  const setUserName = useSetRecoilState(userNameAtom);
  const setEmail = useSetRecoilState(emailAtom);
  const setDate = useSetRecoilState(dateAtom);

  const onChange = (e) => {
    const data = e.target.value;

    if (inputType === "이름") {
      setUserName(data);
    } else if (inputType === "이메일") {
      setEmail(data);
    } else if (inputType === "날짜") {
      setDate(data);
    }
  };

  return (
    <Wrapper>
      <Input placeholder={inputType} type={type} onChange={onChange} />
    </Wrapper>
  );
};

export default Form;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 20px;
`;
