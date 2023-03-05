import {t} from "../trpc";
import {z} from "zod";
import {userRouter} from "./users";
import {greetingRouter} from "./greeting";

export const appRouter = t.router({
	logToServer: t.procedure
		.input((v) => {
			if (typeof v === "string") return v;

			throw new Error("Invalid Input: Expected String");
		})
		.mutation((req) => {
			return true;
		}),
	users: userRouter,
	greeting: greetingRouter,
});
