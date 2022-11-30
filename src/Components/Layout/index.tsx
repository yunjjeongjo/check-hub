import { ReactElement } from "react";
import styled from "styled-components";

interface Props {
  children: ReactElement;
}

const Layout = ({ children }: Props) => {
  return <Container>{children}</Container>;
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  min-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #e4e4e4;
`;

export default Layout;
