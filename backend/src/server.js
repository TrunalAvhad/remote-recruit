import express from "express";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

import { ENV } from "./lib/env.js";
import { connectDB } from "./lib/db.js";
import { serve } from "inngest/express";
import inngestClient, { functions } from "./lib/inngest.js";

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

app.use(
  cors({
    origin: ENV.CLIENT_URL,
    credentials: true,
  })
);

// ------------------------------------
// INNGEST ROUTE
// ------------------------------------
app.use("/api/inngest", serve({ client: inngestClient, functions }));

// ------------------------------------
// API HEALTH CHECK (OPTIONAL)
// ------------------------------------
app.get("/api/health", (req, res) => {
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
  app.get("*", (req, res) => {
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
