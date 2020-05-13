import styled, { css } from "styled-components";

export const Container = styled.button`
  border: 0;
  border-radius: 8px;
  color: #fff;
  font-weight: 700;
  margin-top: 16px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  transition: filter 0.2s;
  width: ${props => (props.width ? props.width + "px" : "100%")};
  height: ${props => (props.height ? props.height + "px" : "60px")};
  background: ${props => (props.primary ? "#E02041" : "#9999")};
`;

export const Text = styled.text`
  background: "#FFFF";
  font-weight: 700;
  font-size: 30px;
`;

export const Loading = styled.div`
  padding-left: 5px;
`;
