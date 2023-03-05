import {trpc} from "./utils/trpc";

export function Greeting() {
	const {data} = trpc.greeting.useQuery("Client");

	// const mutation = trpc.logToServer.useMutation();
	// mutation.mutate("Hello");

	return <div>{data?.greeting}</div>;
}
