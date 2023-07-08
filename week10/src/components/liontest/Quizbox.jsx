import React from "react";
import styled from "styled-components";

const QuizBox = ({ testData, getData, myAnswer, clickQuestion }) => {
  const clickNext = () => {
    const clickedAnswer = testData.answerList.find((data) => data.clicked);
    const answer = clickedAnswer ? clickedAnswer.aid : 0;

    myAnswer({
      id: testData.id,
      answer: answer,
    });

    getData(testData.id + 1);
  };

  return (
    <>
      <QuestionSection>
        <Title>{testData.title}</Title>
      </QuestionSection>
      <AnswerSection>
        {testData.answerList.length > 0 &&
          testData.answerList.map((answer, idx) => (
            <Answer
              key={idx}
              onClick={() => clickQuestion(answer.aid)}
              clicked={answer.clicked}
            >
              {answer.content}
            </Answer>
          ))}
      </AnswerSection>
      <NextBtn onClick={clickNext}>다음</NextBtn>
    </>
  );
};

const Answer = styled.div`
  padding: 30px;
  border-radius: 20px;
  background-color: white;
  font-size: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  border: 2px solid white;
  &:hover {
    cursor: pointer;
    background-color: rgb(149, 101, 220);
    color: white;
  }
`;

const NextBtn = styled.div`
  &:hover {
    background-color: rgb(149, 101, 220);
    color: white;
  }
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 25px 30px;
  font-size: 20px;
  background-color: white;
  border: 2px solid white;
  color: black;
  cursor: pointer;
  width: 12%;
  border-radius: 20px;
`;

const QuestionSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  gap: 25px;
  align-items: center;
`;

const Title = styled.div`
  font-size: 22px;
  font-weight: 500;
  color: white;
`;

const AnswerSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 60%;
  gap: 15px;
`;

export default QuizBox;
