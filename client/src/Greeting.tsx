import {trpc} from "./utils/trpc";

export function Greeting() {
	const {data} = trpc.greeting.useQuery("Client");

	return <div>{data?.greeting}</div>;
}
