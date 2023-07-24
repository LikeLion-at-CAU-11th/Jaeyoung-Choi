import React from "react";
import { Wrapper, Title, Input, Inputs, Form } from "../components/Common";
import { styled } from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../apis/login";
import { useForm } from "../hooks/useForm";

const Home = () => {
  const [id, onChangeId] = useForm();
  const [pw, onChangePw] = useForm();

  const router = useNavigate(); // 라우터를 통해서 다른 페이지로 돌아가는 코드

  const onClick = async () => {
    try {
      //로그인 api를 넣어주기
      const result = await login(id, pw); // state들을 넘겨주기
      console.log(result);
      const { accessToken, refreshToken } = result;
      localStorage.setItem("access", accessToken);
      localStorage.setItem("refresh", refreshToken);
      router("/mypage");
    } catch (error) {
      alert("아이디나 패스워드를 확인하세요");
    }
  };
  return (
    <Wrapper>
      <Title>로그인</Title>
      <Form>
        <Inputs>
          <Input placeholder="ID입력" value={id} onChange={onChangeId}></Input>
          <Input
            placeholder="PW입력"
            type="password"
            value={pw}
            onChange={onChangePw}
          ></Input>
        </Inputs>
        <Button onClick={onClick}>LogIn</Button>
      </Form>
      <CustomLink to="/signup">회원가입</CustomLink>
    </Wrapper>
  );
};

export default Home;

const Button = styled.button`
  background-color: black;
  color: white;
  padding: 20px;
  border-radius: 10px;
`;

const CustomLink = styled(Link)`
  margin-top: 20px;
  color: black;
  text-decoration: none;
  &:visited {
    color: black;
    text-decoration: none;
  }
`;
