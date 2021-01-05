const app = require("./app");
const { PORT } = require("./config");

app.listen(PORT, () => {
  console.log(`Express server is listening at http://localhost:${PORT}`);
});
