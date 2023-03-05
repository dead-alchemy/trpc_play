import express from "express";
import cors from "cors";

import {createExpressMiddleware} from "@trpc/server/adapters/express";

import {appRouter} from "./routers";

const app = express();
app.use(
	cors({
		origin: "http://localhost:3000",
	})
);

app.use("/api", createExpressMiddleware({router: appRouter}));

app.listen(8080);

export type AppRouter = typeof appRouter;
