import styled from "styled-components";
import React, { ChangeEvent } from "react";

interface Props {
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value: string;
  children: React.ReactNode;
}
const Dropdown = ({ onChange, children, value }: Props) => {
  return (
    <SelectContainer onChange={onChange} value={value}>
      {children}
    </SelectContainer>
  );
};
const SelectContainer = styled.select`
  width: 100px;
  height: 40px;
  padding-left: 10px;
  margin-right: 10px;
  border: none;
  border-radius: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: #000000;
  cursor: pointer;
  &:focus {
    outline: none;
  }
`;

export default Dropdown;
