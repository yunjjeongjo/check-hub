import { useParams } from "react-router-dom";
import { getIssue } from "@/lib/api/issueApi";
import { Endpoints } from "@octokit/types";
import { useEffect, useState } from "react";
import Spinner from "@/Components/Spinner";
import styled from "styled-components";
import dayjs from "dayjs";
import Markdown from "@/Components/Markdown";
import { useRecoilValue } from "recoil";
import { issueState } from "@/lib/states/atoms";

type ReposResponse =
  Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}"]["response"]["data"];

const DetailPage = () => {
  const { id } = useParams();
  const { owner, repo } = useRecoilValue(issueState);
  const [data, setData] = useState<ReposResponse | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getData = async () => {
    setIsLoading(true);
    const res = await getIssue(Number(id), owner, repo);
    setData(res);
    setIsLoading(false);
  };

  useEffect(() => {
    if (id) {
      getData();
    }
  }, []);
  return (
    <>
      {isLoading ? (
        <Spinner></Spinner>
      ) : (
        <PageContainer>
          <HeaderContainer>
            <UserAvatar>
              <img src={data?.user?.avatar_url}></img>
            </UserAvatar>
            <TitleContainer>
              <Title>
                <span>{data?.title}</span>
                <IssueNumber>#{data?.number}</IssueNumber>
              </Title>
              <Info>
                <UserName>@{data?.user?.login}</UserName>
                <span>
                  {dayjs(data?.created_at).format("YYYY년 MM월 DD일")}
                </span>
                <Comments>{data?.comments} comments</Comments>
              </Info>
            </TitleContainer>
          </HeaderContainer>
          <ContentWrapper>
            <Markdown content={data?.body || ""} />
          </ContentWrapper>
        </PageContainer>
      )}
    </>
  );
};

const PageContainer = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HeaderContainer = styled.div`
  margin-top: 40px;
  width: 80%;
  display: flex;
`;

const UserAvatar = styled.div`
  width: 70px;
  display: inline-block;
  overflow: hidden;
  line-height: 1;
  vertical-align: middle;
  border-radius: 6px;
  flex-shrink: 0;
  border-radius: 50% !important;
  margin-right: 20px;

  & img {
    width: 100%;
    vertical-align: middle;
  }
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px;
`;

const IssueNumber = styled.span`
  margin-left: 10px;
  color: #5a5a5a;
`;

const UserName = styled.span`
  color: #5a5a5a;
  font-weight: 500;
  margin-right: 10px;
`;

const Comments = styled.span`
  font-weight: 500;
  margin-left: 10px;
  color: #1947e5;
`;

const Info = styled.h2`
  margin-bottom: 10px;
`;

export const ContentWrapper = styled.div`
  width: 80%;
  border-top: 2px lightgray solid;
  margin: 1rem auto;
  max-width: 1280px;
  padding: 2rem 1rem;
`;

export default DetailPage;
