import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import PostRouter from "./route/Post.Route.js";
import AuthRouter from "./route/auth.Router.js";
import TestRouter from "./route/test.route.js";
import UserRouter from "./route/user.Router.js";
const app = express();
console.log("test");
app.use(express.json());
app.use(cookieParser());


 
app.use(cors({origin:process.env.CLIENT_URL,credentials:true}))
app.use("/api/post",PostRouter)
app.use("/api/user",UserRouter)
app.use("/api/auth",AuthRouter)
app.use("/api/test",TestRouter) 


 
app.listen(8800, () => {
  console.log("server is running");
});


