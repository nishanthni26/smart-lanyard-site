const githubProjectPath = "/smart-lanyard-site";

const isGitHubProjectSite = () =>
  typeof window !== "undefined" &&
  window.location.hostname === "nishanthni26.github.io" &&
  window.location.pathname.startsWith(githubProjectPath);

export const sitePath = (path = "/") => `${isGitHubProjectSite() ? githubProjectPath : ""}${path}`;
export const managedAsset = (path: string) => sitePath(path);
export const routerBase = () => (isGitHubProjectSite() ? githubProjectPath : "");
