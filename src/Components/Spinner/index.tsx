import styled, { keyframes } from "styled-components";
import { GoSync } from "react-icons/go";

const rotateAnim = keyframes`
    0% {
        transform:rotate(0deg);
    }
    50% {
        transform: rotate(180deg) ;
    }
    100% {
        transform:rotate(360deg) ;
        
    }
`;
const SpinnerWrapper = styled.div`
  padding: 1rem;
  font-size: 32px;
  text-align: center;
  margin: 0 auto;
  width: 70px;
  height: 70px;
  color: #8394be;
  & .icon {
    animation: ${rotateAnim} 1s infinite linear;
  }
`;

const Spinner = () => {
  return (
    <SpinnerWrapper>
      <GoSync className="icon" />
    </SpinnerWrapper>
  );
};
export default Spinner;
