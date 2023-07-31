import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MyPage from "./pages/MyPage";
import Layout from "./components/layout/Layout";

// 라우터를 미리 설정하고 컴포넌트 만들기
// 홈페이지와 내가 만들 페이지들 개수만큼 Route 생성
// 라우트를 전부 레이아웃으로 감쌈 이유는 아직 잘 모르겠음
// 하위 컴포넌트들을 포함한 레이아웃

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/mypage" element={<MyPage />}></Route>
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;

// 과제
// atom값 하나를 더 추가해서 다양한 input type이 있거든용?
// 상태 데이터를 하나 추가해보고
// 제출 버튼을 누르면 입력한 정보가 맞는지 확인하는 모달창 만들기
// 모달창에 필요한 훅
// 리코일 stateValue를 이용해 데이터 불러오기
// 모달창은 useContext()를 이용해서 디자인 하기
// sub라는 컬러를 이용해 모달창 디자인?
// [확인]버튼을 만들어서  -> welcome과 함꼐 /mypage 이동
// [취소]버튼을 만들어서 -> 모달창 끄기
