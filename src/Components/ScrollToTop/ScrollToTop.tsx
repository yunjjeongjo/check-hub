import styled from "styled-components";
import { useEffect, useState } from "react";
import { throttle } from "@/lib/utils/throttle";
import { FaChevronUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [scrollFlag, setScrollFlag] = useState(false);

  const updateScroll = () => {
    const { scrollY } = window;
    scrollY > 10 ? setScrollFlag(true) : setScrollFlag(false);
  };
  const handleScroll = throttle(updateScroll, 100);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const moveToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  return <>{scrollFlag && <ScrollButton onClick={moveToTop}></ScrollButton>}</>;
};

const ScrollButton = styled(FaChevronUp)`
  padding: 7px;
  width: 25px;
  height: 25px;
  position: fixed;
  right: 30px;
  bottom: 30px;
  border-radius: 10px;
  background-color: #9daedc;
  color: white;
  cursor: pointer;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export default ScrollToTop;
