// adr/log4brains.config.js
module.exports = {
  site: {
    title: "TROi Architecture Decisions",
    description: "Centralized ADR knowledge with DDD context",
    author: "TROi",
    // Important so assets/routes work under https://troi.se/adr-l4b/
    basePath: "/adr-l4b/"
  },
  adr: {
    // Your ADR markdown files live here (YOU have adr/docs/adr)
    path: "docs/adr",
    defaultStatus: "Accepted"
  }
};
