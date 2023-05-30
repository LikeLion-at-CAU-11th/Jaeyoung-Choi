import React from "react";
import styled from "styled-components";
import {
  getUserPerGender,
  getUserPerPage,
  getUserPerStack,
} from "../../apis/lioninfo";
import { useLocation, useNavigate } from "react-router-dom";

const FilterButton = ({ title, type, setUserData, clickPage, setPage }) => {
  const location = useLocation();
  const navigate = useNavigate();

  const handleClickButton = async () => {
    if (type === "page") setPage(true);
    else setPage(false);

    // type 에 따라서 어떤 api를 호출할건지를 결정해주는 함수
    if (type === "page") {
      const response = await getUserPerPage(1);
      clickPage(1);
      setUserData(response.data.data);
      const searchParams = new URLSearchParams(location.search);
      searchParams.set("page", 1);
      if (title !== "All") {
        searchParams.delete("title");
      }
      navigate(`?${searchParams.toString()}`);
    } else if (type === "stack") {
      const response = await getUserPerStack(title);
      setUserData(response.data.data);
      const searchParams = new URLSearchParams(location.search);
      searchParams.delete("page");
      searchParams.set("title", title);
      navigate(`?${searchParams.toString()}`);
    } else if (type === "gender") {
      const response = await getUserPerGender(title);
      setUserData(response.data.data);
      const searchParams = new URLSearchParams(location.search);
      searchParams.delete("page");
      searchParams.set("title", title);
      navigate(`?${searchParams.toString()}`);
    }
  };

  return <Button onClick={handleClickButton}>{title}</Button>;
};

export default FilterButton;

const Button = styled.div`
  &:hover {
    background-color: rgb(149, 101, 220);
    color: white;
  }
  flex-basis: 13%;
  height: 70px;
  background-color: whitesmoke;
  color: gray;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
  cursor: pointer;
  border: 1px solid white;
`;
