import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import { clerkMiddleware } from '@clerk/express'

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { serve } from "inngest/express";
import inngestClient, { functions } from "./lib/inngest.js";
import chatRoutes from "./routes/chatRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";
// ------------------------------------
// ES MODULE __dirname FIX (IMPORTANT)
// ------------------------------------
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// ------------------------------------
// APP INIT
// ------------------------------------
const app = express();

// ------------------------------------
// MIDDLEWARE
// ------------------------------------
app.use(express.json());
//credential true to allow cookies from frontend
app.use(cors({ origin: ENV.CLIENT_URL, credentials: true,}));
app.use(clerkMiddleware()); //allow Clerk to verify sessions and users
// ------------------------------------
// INNGEST ROUTE
// ------------------------------------
app.use("/api/inngest", serve({ client: inngestClient, functions }));
app.use("/api/chat",chatRoutes);
app.use("/api/sessions",sessionRoutes);
// ------------------------------------
// API HEALTH CHECK (OPTIONAL)
// ------------------------------------
app.get("/health", (req, res) => {
  res.status(200).json({ status: "API running" });
});


// ------------------------------------
// SERVE FRONTEND (PRODUCTION ONLY)
// ------------------------------------
if (ENV.NODE_ENV === "production") {
  // Path: backend/src → backend → project-root → frontend/dist
  const frontendPath = path.join(__dirname, "../../frontend/dist");

  app.use(express.static(frontendPath));

  // React / Vite SPA fallback
  // Use a RegExp route to avoid path-to-regexp parsing errors for '*' in some environments
  app.get(/.*/, (req, res) => {
    res.sendFile(path.join(frontendPath, "index.html"));
  });
}

// ------------------------------------
// START SERVER
// ------------------------------------
const startServer = async () => {
  try {
    await connectDB();

    app.listen(ENV.PORT, () => {
      console.log(`Server running on port ${ENV.PORT}`);
    });
  } catch (error) {
    console.error("Failed to start server:", error);
    process.exit(1);
  }
};

startServer();
