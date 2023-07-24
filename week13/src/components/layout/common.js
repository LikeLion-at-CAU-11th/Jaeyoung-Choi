import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BtnDiv = styled.div`
  display: flex;
  flex-wrap: nowrap;
`;

export const Button = styled.button`
  all: unset;
  background-color: ${(props) => props.mode};
  color: white;
  padding: 10px;
  border-radius: 20px;
`;

export const Title = styled.div`
  font-size: 30px;
  margin: 20px;
`;

export const Inputs = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

export const Span = styled.span`
  color: ${(props) => props.mode};
`;

export const Input = styled.input`
  & {
    font-size: 15px;
    color: #222222;
    width: 300px;
    border: none;
    border-bottom: solid #aaaaaa 1px;
    padding-bottom: 10px;
    padding-left: 10px;
    position: relative;
    background: none;
    z-index: 5;
    margin-bottom: 10%;
  }

  &::placeholder {
    color: #aaaaaa;
  }
  &:focus {
    outline: none;
  }

  label {
    position: absolute;
    color: #aaa;
    left: 10px;
    font-size: 20px;
    bottom: 8px;
    transition: all 0.2s;
  }

  &:focus ~ label,
  &:valid ~ label {
    font-size: 16px;
    bottom: 40px;
    color: #666;
    font-weight: bold;
  }

  &:focus ~ span,
  &:valid ~ span {
    width: 100%;
  }
`;
