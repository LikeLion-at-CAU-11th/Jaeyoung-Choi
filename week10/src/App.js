import styled from "styled-components";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LionInfoModal from "./components/lioninfo/LionInfoModal";
import LionTestModal from "./components/liontest/LionTestModal";

function App() {
  return (
    <AppDom>
      <MenuDom>
        <Link to="/lioninfo" style={{ textDecoration: "none" }}>
          <MenuButton>아기사자 정보</MenuButton>
        </Link>
        <Link to="/liontest" style={{ textDecoration: "none" }}>
          <MenuButton to="/liontest">멋사인 테스트</MenuButton>
        </Link>
      </MenuDom>
      <ModalDom>
        <Routes>
          <Route path="/lioninfo" element={<LionInfoModal />} />
          <Route path="/liontest" element={<LionTestModal />} />
        </Routes>
      </ModalDom>
    </AppDom>
  );
}

export default App;

const AppDom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const MenuButton = styled.div`
  display: flex;
  width: 200px;
  height: 100px;
  border-radius: 20px;
  background-color: ${(props) =>
    props.clicked ? "rgb(149, 101, 220)" : "white"};
  color: ${(props) => (props.clicked ? "white" : "grey")};
  font-size: 25px;
  font-weight: 700;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const MenuDom = styled.div`
  display: flex;
  gap: 20px;
  margin: 20px;
`;

const ModalDom = styled.div`
  display: flex;
  justify-content: center;
`;
