import { Octokit } from "octokit";
import { ockokitConfigType, ocktokitToken } from "./OctokitTypes";

export class OctokitAdapter {
  api: Octokit;

  constructor(private readonly config: ockokitConfigType = ocktokitToken) {
    this.api = this.createOctokitInstance();
  }

  createOctokitInstance() {
    return new Octokit({
      auth: this.config.token,
    });
  }
}
