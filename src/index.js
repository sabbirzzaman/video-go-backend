import app from "./app.js";
import connectDB from "./database/index.js";

connectDB()
  .then(() => {
    app.on("error", (error) => {
      console.error("Connection error: ", error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log("Server is running at port: ", process.env.PORT || 8000);
    });
  })
  .catch((err) => {
    console.error("Database Connection Error: ", err);
  });
