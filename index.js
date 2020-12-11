const { createTeam } = require("./lib/Team");
const { buildPage } = require("./src/template");

(function () {
  createTeam().then((team) => {
    buildPage(team);
  });
})();
