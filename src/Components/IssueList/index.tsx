import styled from "styled-components";
import { getIssueList } from "@/lib/api/issueApi";
import { Endpoints } from "@octokit/types";
import { useState } from "react";
import IssueItem from "../IssueItem";
import useIntersectionObserver from "@/lib/hooks/useIntersectionObserver";
import Spinner from "../Spinner";

interface Props {
  owner: string;
  repo: string;
}

const IssueList = ({ owner, repo }: Props) => {
  type IssueListType =
    Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"];

  const [page, setPage] = useState(1);
  const [data, setData] = useState<IssueListType>([]);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    setPage((page) => page + 1);
    const res = await getIssueList(page, owner, repo);
    setData([...data, ...res]);
    console.log(data);
    setIsLoading(false);
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
  overflow-y: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 30px;
`;

const Target = styled.div`
  height: 1px;
`;

export default IssueList;
