import app from "./app";
import connectDb from "./config/connectDb";

const port = process.env.PORT || 5000;

connectDb();

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
