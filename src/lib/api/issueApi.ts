import { Octokit } from "@octokit/rest";
const { REACT_APP_GITHUB_TOKEN } = process.env;

const octokit = new Octokit({
  auth: REACT_APP_GITHUB_TOKEN
});

export const getIssueList = async (
  pageNumber: number,
  owner: string,
  repo: string,
  state?: any,
  sort?: any
) => {
  // console.log(state, sort);
  if (
    (state === "open" ||
      state === "closed" ||
      state === "all" ||
      state === undefined) &&
    (sort === "comments" ||
      sort === "created" ||
      sort === "updated" ||
      sort === undefined)
  ) {
    const { data } = await octokit.rest.issues.listForRepo({
      owner: owner,
      repo: repo,
      state: state,
      sort: sort,
      page: pageNumber,
      per_page: 20
    });
    return data;
  }
};

export const getIssue = async (
  issueNumber: number,
  owner: string,
  repo: string
) => {
  const { data } = await octokit.rest.issues.get({
    owner: owner,
    repo: repo,
    issue_number: issueNumber
  });
  return data;
};
