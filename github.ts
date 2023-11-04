export interface GithubWehbookPayloadPush {
  ref: string;
  before: string;
  after: string;
  repository: {
    id: number;
    node_id: string;
    name: string;
    full_name: string;
  };
  pusher: {
    name: string;
    email: string;
  };
  organization: {
    login: string;
    id: number;
    node_id: string;
    url: string;
  };
  sender: {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
  };
  created: boolean;
  deleted: boolean;
  forced: boolean;
  base_ref: string | null;
  compare: string;
  commits: Array<{
    id: string;
    tree_id: string;
    distinct: boolean;
    message: string;
    timestamp: string;
    url: string;
    author: {
      name: string;
      email: string;
      username: string;
    };
    committer: {
      name: string;
      email: string;
      username: string;
    };
    added: string[];
    removed: string[];
    modified: string[];
  }>;
  head_commit: {
    id: string;
    tree_id: string;
    distinct: boolean;
    message: string;
    timestamp: string;
    url: string;
    author: {
      name: string;
      email: string;
      username: string;
    };
    committer: {
      name: string;
      email: string;
      username: string;
    };
    added: string[];
    removed: string[];
    modified: string[];
  };
}
