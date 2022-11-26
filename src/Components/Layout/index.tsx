import { ReactElement } from "react";
import styled from "styled-components";
import Header from "../Header";

interface Props {
  children: ReactElement;
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header></Header>
      {children}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  /* justify-content: center; */
  align-items: center;
  background-color: #e4e4e4;
`;

export default Layout;
