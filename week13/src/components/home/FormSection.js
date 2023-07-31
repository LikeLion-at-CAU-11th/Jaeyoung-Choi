import React, { useContext, useState } from "react";
import { ThemeContext } from "../../context/context";
import Form from "./Form";
import { Button } from "../layout/common";

import { isSubmitedAtom } from "../../recoil/atoms";
import { useSetRecoilState } from "recoil";
import { useNavigate } from "react-router-dom";
import Modals from "../modal/modals";

const FormSection = () => {
  const mode = useContext(ThemeContext);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const isSubmited = useSetRecoilState(isSubmitedAtom);
  const navigate = useNavigate();

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = () => {
    isSubmited(true);
    setIsModalOpen(false);
    navigate("/mypage");
  };

  return (
    <>
      <Modals
        isOpen={isModalOpen}
        onClose={closeModal}
        onConfirm={handleConfirm}
      />
      <Form type="text" inputType="이름" />
      <Form type="email" inputType="이메일" />
      <Form type="date" inputType="날짜" />
      <Button mode={mode.button} onClick={handleClick}>
        제출
      </Button>
    </>
  );
};

export default FormSection;
