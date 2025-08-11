import { config } from "dotenv";
import express from "express";
import cors from "cors";
import fileUpload from "express-fileupload";
import mongoose from "mongoose";
import cloudinary from "cloudinary";
import session from "express-session";
import compression from "compression";
import MongoStore from "connect-mongo";
import cookieParser from "cookie-parser";
import bodyParser from "body-parser";
import userRoute from "./route/user.route.js";

const app = express();
config();

const PORT = process.env.PORT || 4001;
const URI = process.env.MONGODB_URI;

main().catch((err) => console.log(err));

async function main() {
  await mongoose.connect(URI);
  console.log("database connected");
}

cloudinary.v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  fileUpload({
    useTempFiles: true,
    tempFileDir: "/tmp/",
  })
);
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SESSION_SECRET || "yourSecretKey",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
      mongoUrl: URI,
      ttl: 14 * 24 * 60 * 60,
    }),
  })
);
app.use(compression());

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`server is listening on port ${PORT}`);
});
