import styled from "styled-components";

const Header = () => {
  return <Wrapper>Angular/Angular-cli</Wrapper>;
};

const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export default Header;
