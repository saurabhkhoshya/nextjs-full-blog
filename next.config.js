const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      env: {
        mongodb_username: "nextJsBlogDbUser",
        mongodb_password: "Vi6yUni8OnLcLkRf",
        mongodb_clustername: "cluster0",
        mongodb_database: "nextJsFullBlog",
      },
    };
  }
  return {
    env: {
      mongodb_username: "nextJsBlogDbUser",
      mongodb_password: "Vi6yUni8OnLcLkRf",
      mongodb_clustername: "cluster0",
      mongodb_database: "nextJsFullBlog",
    },
  };
};
