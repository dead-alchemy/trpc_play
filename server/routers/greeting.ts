import {t} from "../trpc";
import {z} from "zod";

const helloProcesure = t.procedure.input(z.string().optional());

const timeProcedure = t.procedure.input(z.number().optional());

export const greetingRouter = t.router({
	hello: helloProcesure.query(({input}) => {
		return {greeting: `Hello ${input || "world"}`};
	}),
	getTime: timeProcedure.query(({input}) => {
		const time = new Date();
		if (input) time.setHours(time.getHours() + input);

		return {
			time,
		};
	}),
});
