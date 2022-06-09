const app = require("./index");

const connect = require("./configs/db");

app.listen(8080, async () => {
  try {
    await connect();
    console.log("listening on port 8080");
  } catch (error) {
    console.log(error.message);
  }
});