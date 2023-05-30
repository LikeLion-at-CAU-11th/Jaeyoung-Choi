import React, { useState } from "react";
import styled from "styled-components";
import { getTest, getResult } from "../../apis/liontest";
import QuizBox from "./Quizbox";
import Result from "./Result";

const LionTestModal = () => {
  const [firstPage, setFirstPage] = useState(false);
  const [testData, setTestData] = useState({});
  const [answerData, setAnswerData] = useState([]);
  const [resultData, setResultData] = useState({});

  const getData = async (id) => {
    try {
      const response = await getTest();
      const data = response.data.data;
      const datas = data[id];

      if (datas) {
        setTestData(datas);
        setFirstPage(true);
      } else {
        setFirstPage(false);
      }
    } catch (error) {
      console.error("에러 발생", error);
    }
  };

  const getResultData = async () => {
    const response = await getResult(answerData);
    const data = response.data.data;
    setResultData(data);
  };

  const clickQuestion = (id) => {
    setTestData((answer) => ({
      ...answer,
      answerList: answer.answerList.map((data) => ({
        ...data,
        clicked: data.aid === id,
      })),
    }));
  };

  const myAnswer = (answer) => {
    setAnswerData((prevAnswers) => [...prevAnswers, answer]);
  };

  return (
    <Dom>
      <Title>🐝멋사 테스트🐝</Title>
      {firstPage ? (
        <QuizBox
          testData={testData}
          getData={getData}
          myAnswer={myAnswer}
          clickQuestion={clickQuestion}
        />
      ) : answerData.length > 0 ? (
        <Result getResultData={getResultData} resultData={resultData} />
      ) : (
        <ContentBox>
          <Button onClick={() => getData(0)}>시작하기</Button>
        </ContentBox>
      )}
    </Dom>
  );
};

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80%;
`;

const Title = styled.div`
  font-size: 35px;
  color: white;
  font-weight: 700;
`;

const Dom = styled.div`
  gap: 30px;
  background-color: rgb(139, 114, 176);
  width: 90vw;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 30px 0;
  min-height: 600px;
  border-radius: 20px;
  box-shadow: 5px 5px 5px lightgray;
`;

const Button = styled.div`
  &:hover {
    background-color: rgb(149, 101, 220);
    color: white;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 100px;
  font-size: 25px;
  color: grey;
  background-color: white;
  border-radius: 20px;
  border: 2px solid white;
  cursor: pointer;
  font-weight: 500;
`;

export default LionTestModal;
