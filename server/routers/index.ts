import {t} from "../trpc";
import {z} from "zod";
import {userRouter} from "./users";

export const appRouter = t.router({
	greeting: t.procedure.input(z.string().optional()).query(({input}) => {
		return {greeting: `Hello ${input}`};
	}),
	logToServer: t.procedure
		.input((v) => {
			if (typeof v === "string") return v;

			throw new Error("Invalid Input: Expected String");
		})
		.mutation((req) => {
			//console.log(`Client says ${req.input}`);
			return true;
		}),
	users: userRouter,
});
