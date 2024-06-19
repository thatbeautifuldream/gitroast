import { Octokit } from "octokit";

const octokit = new Octokit();

export const getRepos = async () => {
  const { data } = await octokit.request("GET /users/{username}/repos", {
    username: "thatbeautifuldream",
  });
  return data;
};

// fetch profile metrics
export const getProfileMetrics = async () => {
  const { data } = await octokit.request("GET /users/{username}", {
    username: "thatbeautifuldream",
  });
  return data;
};
