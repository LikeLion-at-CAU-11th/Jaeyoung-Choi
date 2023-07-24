import React from "react";
import { Title, Inputs, Input, Wrapp, Wrapper2 } from "../components/Common";
import { useForm } from "../hooks/useForm";
import { styled } from "styled-components";
import { signUp } from "../apis/signUp";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [id, onChangeId] = useForm();
  const [pw, onChangePw] = useForm();
  const [name, onChangeName] = useForm();
  const [age, onChangeAge] = useForm();

  const router = useNavigate();

  const onClick = async () => {
    await signUp(id, pw, name, age);
    router("/");
  };

  return (
    <Wrapper2>
      <Title>회원가입</Title>
      <Inputs>
        <Input placeholder="아이디" value={id} onChange={onChangeId} />
        <Input
          placeholder="비밀번호"
          type="password"
          value={pw}
          onChange={onChangePw}
        />
        <Input placeholder="성함" value={name} onChange={onChangeName} />
        <Input placeholder="나이" value={age} onChange={onChangeAge} />
      </Inputs>
      <Button onClick={onClick}>가입하기</Button>
    </Wrapper2>
  );
};

export default Signup;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 10px 20px 10px 20px;
  margin-top: 10%;
  border-radius: 5px;
`;
