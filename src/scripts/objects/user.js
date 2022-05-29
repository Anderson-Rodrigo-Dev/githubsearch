const user = {
  avatarUrl: "",
  name: "",
  bio: "",
  userName: "",
  followers: 0,
  following: 0,
  repositories: [],
  events: [],
  setInfo(gitHubUser) {
    this.avatarUrl = gitHubUser.avatar_url;
    this.name = gitHubUser.name;
    this.bio = gitHubUser.bio;
    this.followers = gitHubUser.followers;
    this.following = gitHubUser.following;
    this.userName = gitHubUser.login;
  },
  setRepositories(repositories) {
    this.repositories = repositories;
  },

  setEvents(activity) {
    this.events = activity
      .filter((activity) => activity.payload.commits)
      .slice(0, 10);
  },
};

export { user };
