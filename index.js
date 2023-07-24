const app = require("./app");
const PORT = process.env.PORT || 8000;
//server port
app.listen(PORT, () => {
  console.log("server is running");
});