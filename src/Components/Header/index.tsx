import styled from "styled-components";
import { FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate, useParams } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const { owner, repo } = useParams();
  const handelClick = () => {
    navigate(-1);
  };
  return (
    <Wrapper>
      <GoBackIcon onClick={handelClick} />
      <Title>
        {owner} / {repo}
      </Title>
    </Wrapper>
  );
};

const GoBackIcon = styled(FaChevronLeft)`
  position: absolute;
  left: 40px;
  cursor: pointer;
  color: #1947e5;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 18px;
  border-bottom: 3px #bec5d9 solid;
`;

const Wrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export default Header;
