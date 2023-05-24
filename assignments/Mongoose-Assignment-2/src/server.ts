import app from "./app/app";
import connectDb from "./config/connectDb";
import logger from "./utils/logger";

const port = process.env.PORT || 5000;

connectDb();

app.listen(port, () => {
  logger.info(`Example app listening on port ${port}`);
});
