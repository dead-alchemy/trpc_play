import path from "path";
require("dotenv").config({path: path.join(__dirname, "../.env")});

import express from "express";
import cors from "cors";

import {createExpressMiddleware} from "@trpc/server/adapters/express";

import {connectDB} from "./utils/connectDB";

import {appRouter} from "./routers";

const app = express();
app.use(
	cors({
		origin: "http://localhost:3000",
	})
);

app.use("/api", createExpressMiddleware({router: appRouter}));

const port = (process.env.SERVER_PORT as unknown as number) || 8080;

app.listen(port, () => {
	console.log(`🚀 Server listening on port ${port}`);
	// CONNECT DB
	connectDB();
});

export type AppRouter = typeof appRouter;
