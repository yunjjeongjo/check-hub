import IssueList from "@/Components/IssueList";
import {
  issueActiveState,
  issueSortState,
  issueState
} from "@/lib/states/atoms";
import { useRecoilState, useRecoilValue } from "recoil";
import swal from "sweetalert";
import { ChangeEvent, useState, useEffect } from "react";
import { getIssueList } from "@/lib/api/issueApi";
import { useNavigate } from "react-router-dom";
import Spinner from "@/Components/Spinner";
import Dropdown from "@/Components/Dropdown";
import styled from "styled-components";
import { sorts, states } from "@/lib/constants/state";
import { IssueListType } from "@/lib/types/types";
import ScrollToTop from "@/Components/ScrollToTop/ScrollToTop";

const MainPage = () => {
  const [activeState, setActiveState] = useRecoilState(issueActiveState);
  const [sortState, setSortState] = useRecoilState(issueSortState);
  const { owner, repo } = useRecoilValue(issueState);
  const [data, setData] = useState<IssueListType>([]);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleActiveStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    setActiveState(e.target.value);
  };

  const handleSortStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortState(e.target.value);
  };

  const getData = async () => {
    try {
      setIsLoading(true);
      const res = await getIssueList(1, owner, repo, activeState, sortState);
      if (res) {
        setData(res);
      }
      setIsLoading(false);
    } catch (e) {
      swal(
        "이슈 검색 실패",
        "owner 또는 repository가 존재하지 않습니다.",
        "error"
      ).then(() => {
        navigate("/");
      });
    }
  };

  useEffect(() => {
    getData();
  }, [sortState, activeState]);
  return (
    <>
      <Filter>
        <Dropdown onChange={handleActiveStatus} value={activeState}>
          {states.map((state, index) => {
            return (
              <option value={state} key={index}>
                {state}
              </option>
            );
          })}
        </Dropdown>
        <Dropdown onChange={handleSortStatus} value={sortState}>
          {sorts.map((sort, index) => {
            return (
              <option value={sort} key={index}>
                {sort}
              </option>
            );
          })}
        </Dropdown>
      </Filter>
      {isLoading ? <Spinner /> : <IssueList issueList={data}></IssueList>}
      <ScrollToTop></ScrollToTop>
    </>
  );
};

const Filter = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  justify-content: end;
  align-items: center;
  padding-right: 15%;
`;

export default MainPage;
