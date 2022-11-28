import { Octokit } from "@octokit/rest";
const { REACT_APP_GITHUB_TOKEN } = process.env;

const octokit = new Octokit({
  auth: REACT_APP_GITHUB_TOKEN
});

export const getIssueList = async (pageNumber: number) => {
  const { data } = await octokit.rest.issues.listForRepo({
    owner: "angular",
    repo: "angular-cli",
    state: "open",
    sort: "comments",
    page: pageNumber,
    per_page: 20
  });
  return data;
};

export const getIssue = async (issueNumber: number) => {
  const { data } = await octokit.rest.issues.get({
    owner: "angular",
    repo: "angular-cli",
    issue_number: issueNumber
  });
  return data;
};
