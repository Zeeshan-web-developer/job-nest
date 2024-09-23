 var express = require("express");
 const cors = require("cors");

const employerRoutes = require("./routes/employer");
 const companyRoutes = require("./routes/Company");
 const errorMiddelware = require("./middelwares/error");
 const app = express();


app.use(express.json());

// Allow requests from anywhere
 app.use(cors());

app.get("/", (req,res) => {
  try {
    console.log({ message: "Welcome to Job Portal API" });
    res.send({ message: "Welcome to Job Portal API" });
  } catch (error) {
    console.error("Error handling request:", error);
    res.status(500).send({ message: "An error occurred" });
  }
});
app.use((req,res,next) => {
  console.log("Middleware 1",req.body);
  next();
})
app.use("/api/v1/employer", employerRoutes);
  app.use("/api/v1/company", companyRoutes);
 app.use(errorMiddelware);

 app.listen(3009, () => {
 console.log("Server is running on port 3009");
});
