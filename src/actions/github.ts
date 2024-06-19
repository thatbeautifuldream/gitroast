import { Octokit } from "octokit";
import type { Endpoints } from "@octokit/types";

// type listUserReposParameters =
//   Endpoints["GET /repos/{owner}/{repo}"]["parameters"];
// type listUserReposResponse = Endpoints["GET /repos/{owner}/{repo}"]["response"];

const octokit = new Octokit();

export const getProfile = async ({ username }: { username: string }) => {
  const { data } = await octokit.request("GET /users/{username}", {
    username: username,
  });
  return data;
};

export type Profile =
  Endpoints["GET /users/{username}"]["response"]["data"];

export const getRepos = async ({ username }: { username: string }) => {
  const { data } = await octokit.request("GET /users/{username}/repos", {
    username: username,
  });
  return data;
};

export type Repos =
  Endpoints["GET /users/{username}/repos"]["response"]["data"];
