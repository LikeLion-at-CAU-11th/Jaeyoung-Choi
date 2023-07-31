import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Button } from "./common";
import { ThemeContext } from "../../context/context";
import { useRecoilValue } from "recoil";
import {
  userNameAtom,
  emailAtom,
  isSubmitedAtom,
  dateAtom,
} from "../../recoil/atoms";

const Layout = ({ children }) => {
  const context = useContext(ThemeContext);
  const [mode, setMode] = useState(context.blueTheme);

  const userName = useRecoilValue(userNameAtom);
  const email = useRecoilValue(emailAtom);
  const date = useRecoilValue(dateAtom);
  const isSubmited = useRecoilValue(isSubmitedAtom);

  const handleClick = (e) => {
    const color = e.target.value;

    if (color === "blue") {
      setMode(context.blueTheme);
    } else if (color === "green") {
      setMode(context.greenTheme);
    } else {
      setMode(context.pinkTheme);
    }
  };

  return (
    <ThemeContext.Provider value={mode}>
      <Wrapper>
        <Header mode={mode.main}>
          <Button value="blue" onClick={handleClick}>
            Blue Theme
          </Button>
          <Button value="green" onClick={handleClick}>
            Green Theme
          </Button>
          <Button value="pink" onClick={handleClick}>
            Pink Theme
          </Button>
        </Header>

        <div>{children}</div>

        <Footer mode={mode.main}>
          {!isSubmited ? "" : `${userName}의 공간 || 이메일 주소: ${email}`}
        </Footer>
      </Wrapper>
    </ThemeContext.Provider>
  );
};

export default Layout;

const Wrapper = styled.div`
  margin: 0;
  padding: 0;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Header = styled.div`
  display: flex;
  height: 130px;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;

  background-color: ${(props) => props.mode};
`;

const Footer = styled.div`
  display: flex;
  height: 80px;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  background-color: ${(props) => props.mode};
`;
