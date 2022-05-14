const connect = require("./configs/db");
const app = require("./index");
require("dotenv").config();

const port = process.env.PORT || 8081;

app.listen(port, async () => {
  try {
    await connect();
    console.log(`I'm Listening on ${port}`);
  } catch (e) {
    console.log(e.message);
  }
});
