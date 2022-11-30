import { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { FaGithub } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { issueState } from "@/lib/states/atoms";

const SearchForm = () => {
  const navigate = useNavigate();
  const [issueInfo, setIssueInfo] = useRecoilState(issueState);

  const handleChangeOwnwer = (e: ChangeEvent<HTMLInputElement>) => {
    setIssueInfo({ owner: e.target.value, repo: issueInfo.repo });
  };

  const handleChangeRepo = (e: ChangeEvent<HTMLInputElement>) => {
    setIssueInfo({ owner: issueInfo.owner, repo: e.target.value });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    navigate(`/${issueInfo.owner}/${issueInfo.repo}`);
  };
  return (
    <SearchFormContainer>
      <FormWrapper>
        <Title>
          Check-Hub <FaGithub />
        </Title>
        <Form onSubmit={handleSubmit}>
          <Input
            placeholder="owner"
            name="owner"
            onChange={handleChangeOwnwer}
            value={issueInfo.owner}
          ></Input>
          <Input
            placeholder="repository"
            name="repository"
            onChange={handleChangeRepo}
            value={issueInfo.repo}
          ></Input>
          <Button type="submit">이슈 검색하기</Button>
        </Form>
      </FormWrapper>
    </SearchFormContainer>
  );
};

const SearchFormContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const FormWrapper = styled.div`
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

const Title = styled.div`
  color: #bec5d9;
  font-weight: 700;
  font-size: 40px;
  margin-bottom: 40px;
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  padding-left: 15px;
  font-size: 15px;
  color: #172c71;
  width: 250px;
  height: 45px;
  margin-bottom: 20px;
  background-color: transparent;
  border-radius: 30px;
  border: 3px #bec5d9 solid;
  box-sizing: border-box;
  &:focus {
    outline: none;
    border: 3px #8099de solid;
  }
`;

const Button = styled.button`
  border: none;
  width: 250px;
  height: 40px;
  border-radius: 10px;
  background-color: #9daedc;
  color: white;
  font-weight: 700;
  &:hover {
    background-color: #8099de;
  }
`;

export default SearchForm;
