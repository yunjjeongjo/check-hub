import styled from "styled-components";
import { getIssueList } from "@/lib/api/issueApi";
import { useState } from "react";
import IssueItem from "../IssueItem";
import useIntersectionObserver from "@/lib/hooks/useIntersectionObserver";
import Spinner from "../Spinner";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { useRecoilValue } from "recoil";
import { IssueListType } from "@/lib/types/types";
import {
  issueActiveState,
  issueSortState,
  issueState
} from "@/lib/states/atoms";

interface Props {
  issueList: IssueListType;
}

const IssueList = ({ issueList }: Props) => {
  const { owner, repo } = useRecoilValue(issueState);

  const navigate = useNavigate();

  const [page, setPage] = useState(1);
  const [data, setData] = useState<IssueListType>(issueList);
  const [isLoading, setIsLoading] = useState(false);
  const activeState = useRecoilValue(issueActiveState);
  const sortState = useRecoilValue(issueSortState);

  const getData = async () => {
    try {
      setIsLoading(true);
      setPage((page) => page + 1);
      const res = await getIssueList(page, owner, repo, activeState, sortState);
      if (res) {
        setData([...data, ...res]);
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

  const observerRef = useIntersectionObserver(
    async (entry, observer) => {
      if (!isLoading) {
        getData();
      }
      observer.unobserve(entry.target);
    },
    { threshold: 1.0 }
  );

  return (
    <>
      <IssueListContainer>
        {data?.map((issue, index) => (
          <IssueItem key={index} issue={issue}></IssueItem>
        ))}
      </IssueListContainer>
      <div>{isLoading && <Spinner></Spinner>}</div>
      <Target ref={observerRef}></Target>
    </>
  );
};

const IssueListContainer = styled.div`
  height: 100%;
  width: 100%;
  padding-top: 20px;
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Target = styled.div`
  height: 1px;
`;

export default IssueList;
