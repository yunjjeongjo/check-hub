import styled from "styled-components";
import dayjs from "dayjs";
import { FaRegCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IssueListType } from "@/lib/types/types";
export interface IssueCardProps {
  issue: IssueListType[number];
}

const IssueItem = ({ issue }: IssueCardProps) => {
  return (
    <IssueItemContainer>
      <ContentContainer>
        <TitleContainer>
          <IssueNumber>#{issue.number}</IssueNumber>
          <Link to={`detail/${issue.number}`}>
            <IssueTitle>{issue.title}</IssueTitle>
          </Link>
        </TitleContainer>
        <InfoContainer>
          <UserName>
            <a href={issue.user?.html_url} target="_blank" rel="noreferrer">
              @{issue.user?.login}
            </a>
          </UserName>
          <Date>{dayjs(issue.created_at).format("YYYY년 MM월 DD일")}</Date>
        </InfoContainer>
      </ContentContainer>
      <CommentContainer>
        <CommentsIcon></CommentsIcon>
        <CommentsNumber>{issue.comments}</CommentsNumber>
      </CommentContainer>
    </IssueItemContainer>
  );
};

const IssueItemContainer = styled.div`
  width: 70%;
  height: 100px;
  background-color: white;
  border-radius: 20px;
  margin-bottom: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  transition: all 0.3s ease-out;
  &:hover {
    transform: translateY(-5px);
  }
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
`;
const IssueNumber = styled.div`
  margin-right: 20px;
  color: #5a5a5a;
`;
const IssueTitle = styled.div`
  font-weight: 500;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  padding-bottom: 0.14em;
  &:hover {
    color: #1947e5;
  }
`;

const InfoContainer = styled.div`
  margin-top: 20px;
  display: flex;
  align-items: center;
  font-size: 12px;
`;

const UserName = styled.div`
  margin-right: 30px;
  font-weight: 500;
  color: #9c9c9c;
  font-size: 14px;
`;
const Date = styled.div``;

const ContentContainer = styled.div``;

const CommentContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CommentsIcon = styled(FaRegCommentAlt)`
  margin-right: 6px;
  font-size: 13px;
`;

const CommentsNumber = styled.div`
  font-size: 13px;
`;

export default IssueItem;
