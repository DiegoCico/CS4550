import "dotenv/config";
import session from "express-session";
import express from "express";
import cors from "cors";

import Hello from "./Hello.js";
import Lab5 from "./Lab5/index.js";

import db from "./Kambaz/Database/index.js";
import UserRoutes from "./Kambaz/Users/routes.js";
import CourseRoutes from "./Kambaz/Courses/routes.js";
import ModulesRoutes from "./Kambaz/Modules/routes.js";
import AssignmentsRoutes from "./Kambaz/Assignments/routes.js";
import EnrollmentsRoutes from "./Kambaz/Enrollments/routes.js";
const app = express();

// CORS must be configured before session
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL || "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

const sessionOptions = {
  secret: process.env.SESSION_SECRET || "kambaz",
  resave: false,
  saveUninitialized: false,
  cookie: {
    sameSite: "lax",
    secure: false,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  },
};

if (process.env.SERVER_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
  };
}
console.log("Session options:", sessionOptions);
console.log("Environment:", process.env.SERVER_ENV);
console.log("Client URL:", process.env.CLIENT_URL);

app.use(session(sessionOptions)); 
app.use(express.json());

// Debug middleware to log session info
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  console.log("Session ID:", req.sessionID);
  console.log("Has session:", !!req.session);
  console.log("Current user:", req.session?.currentUser?.username || "none");
  console.log("---");
  next();
});

// Test endpoint to check session
app.get("/api/test/session", (req, res) => {
  res.json({
    hasSession: !!req.session,
    hasUser: !!req.session?.currentUser,
    user: req.session?.currentUser || null,
    sessionID: req.sessionID,
  });
});

Hello(app);
Lab5(app);
UserRoutes(app, db);
CourseRoutes(app, db);
ModulesRoutes(app, db);
AssignmentsRoutes(app, db);
EnrollmentsRoutes(app, db);

app.listen(process.env.PORT || 4000);