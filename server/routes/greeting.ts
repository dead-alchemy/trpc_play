export const greeting = (procedure) => {
		// This is the input schema of your procedure
		// 💡 Tip: Try changing this and see type errors on the client straight away
		procedure.input(
			z
				.object({
					name: z.string().nullish(),
				})
				.nullish()
		)
		.query(({input}) => {
			// This is what you're returning to your client
			return {
				text: `hello ${input?.name ?? "world"}`,
				// 💡 Tip: Try adding a new property here and see it propagate to the client straight-away
			};
		}),
}