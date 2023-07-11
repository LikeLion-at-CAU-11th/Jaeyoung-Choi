import { styled } from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border: 3px solid black;
  border-radius: 3%;
  padding: 30px;
`;

export const Wrapper2 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border: 3px solid black;
  padding: 30px;
  border-radius: 3%;
  font-size: 20px;
  font-weight: 700;
`;

export const Wrapper3 = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  flex-direction: column;
  border: 3px solid black;
  padding: 30px;
  border-radius: 3%;
  font-size: 20px;
  width: 300px;
`;

export const Information = styled.div`
  font-size: 25px;
`;

export const Inputs = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  margin-right: 10px;
`;

export const Form = styled.div`
  display: flex;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 30px;
  font-weight: 700;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  font-size: 20px;
  height: 30px;
  border-radius: 10px;
  border: none;
  padding: 10px;
  &::placeholder {
    color: darkgray;
    font-size: 20px;
    font-weight: 500;
    font-family: "OTWelcomeRA";
  }
`;
