import { Endpoints } from "@octokit/types";

export type ReposResponse =
  Endpoints["GET /repos/{owner}/{repo}/issues/{issue_number}"]["response"]["data"];

export type IssueListType =
  Endpoints["GET /repos/{owner}/{repo}/issues"]["response"]["data"];
