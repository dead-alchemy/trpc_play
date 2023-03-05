import express from "express";
import cors from "cors";
import {initTRPC} from "@trpc/server";
import {createExpressMiddleware} from "@trpc/server/adapters/express";

const t = initTRPC.create();

const appRouter = t.router({
	greeting: t.procedure.query(() => {
		return "Hi";
	}),
	logToServer: t.procedure
		.input((v) => {
			if (typeof v === "string") return v;

			throw new Error("Invalid Input: Expected String");
		})
		.mutation((req) => {
			console.log(`Client says ${req.input}`);
			return true;
		}),
});

const app = express();
app.use(
	cors({
		origin: "http://localhost:3000",
	})
);
app.use("/api", createExpressMiddleware({router: appRouter}));

app.listen(8080);

export type AppRouter = typeof appRouter;
