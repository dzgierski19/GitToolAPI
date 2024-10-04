import { createBufferFromFile } from "../Buffer/Buffer";
import { OctokitAdapter } from "../Octokit/OctokitAdapter";
import {
  REPO_ACCESS,
  gitConfig,
  gitToolConfig,
  repoAccessType,
} from "./GitToolTypes";

export interface IGitToolAdapter {
  getUserName(): Promise<string>;
}

export class GitToolAdapter implements IGitToolAdapter {
  constructor(
    private readonly octokitApi: OctokitAdapter,
    private readonly userConfig: gitToolConfig = gitConfig
  ) {}

  async getUserName() {
    const {
      data: { login },
    } = await this.octokitApi.api.rest.users.getAuthenticated();
    console.log("Hello, %s", login);
    return login;
  }

  async getRepositories(type: repoAccessType = REPO_ACCESS.ALL) {
    const repos = await this.octokitApi.api.request(`GET /user/repos`, {
      type: type,
      per_page: 100,
      sort: "updated",
      headers: {
        "X-GitHub-Api-Version": "2022-11-28",
      },
    });
    return repos;
  }
}

// Get the current commit object
// Retrieve the tree it points to
// Retrieve the content of the blob object that tree has for that particular file path
// Change the content somehow and post a new blob object with that new content, getting a blob SHA back
// Post a new tree object with that file path pointer replaced with your new blob SHA getting a tree SHA back
// Create a new commit object with the current commit SHA as the parent and the new tree SHA, getting a commit SHA back
// Update the reference of your branch to point to the new commit SHA

// handle git repository is empty error case
