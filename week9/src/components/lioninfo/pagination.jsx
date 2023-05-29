import React from "react";
import styled from "styled-components";

const Pagination = ({ pageNum, clickPage }) => {
  return (
    <Page>
      {pageNum.map((data) => (
        <Number
          key={data.id}
          id={data.id}
          clicked={data.clicked}
          onClick={(e) => clickPage(e.target.id)}
        >
          {data.id}
        </Number>
      ))}
    </Page>
  );
};

export default Pagination;

const Page = styled.div`
  display: flex;
  gap: 20px;
`;

const Number = styled.div`
  color: white;
  font-size: 14px;
  cursor: pointer;
  &:hover {
    color: rgb(149, 101, 220);
    background-color: white;
  }
`;
