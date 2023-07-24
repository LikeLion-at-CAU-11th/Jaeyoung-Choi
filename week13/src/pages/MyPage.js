import React, { useContext } from "react";
import { Button, Span, Title } from "../components/layout/common";
import styled from "styled-components";
import { ThemeContext } from "../context/context";
import {
  userNameAtom,
  emailAtom,
  isSubmitedAtom,
  dateAtom,
} from "../recoil/atoms";
import { useResetRecoilState, useRecoilValue } from "recoil";
import { useNavigate } from "react-router-dom";

// 리셋 버튼을 누르면 3개의 아톰값을 모두 디폴트 값으로 변경

const MyPage = () => {
  const mode = useContext(ThemeContext);

  // 아톰값을 리셋하는 훅을 사용할 수 있는 변수
  const navigate = useNavigate();

  const resetName = useResetRecoilState(userNameAtom);
  const resetId = useResetRecoilState(emailAtom);
  const resetDate = useResetRecoilState(dateAtom);
  const reset = useResetRecoilState(isSubmitedAtom);

  const userName = useRecoilValue(userNameAtom);
  const date = useRecoilValue(dateAtom);

  const handleDelete = () => {
    reset();
    resetId();
    resetName();
    resetDate();

    navigate("/");
  };

  return (
    <Wrapper mode={mode.main}>
      <Title>
        <Span mode={mode.sub}>&#246;</Span> Welcome {userName}
        <Span mode={mode.sub}>&#09;&#246;</Span>
      </Title>
      <Title>제출 날짜: {date} </Title>
      <Button mode={mode.sub} onClick={handleDelete}>
        리셋
      </Button>
    </Wrapper>
  );
};

export default MyPage;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
  width: 100%;
  border: 5px dashed ${(props) => props.mode};
  border-radius: 3%;
`;
