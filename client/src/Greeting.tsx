import {trpc} from "./utils/trpc";

export function Greeting() {
	const {data} = trpc.greeting.hello.useQuery("Client");
	const {data: timeData} = trpc.greeting.time.useQuery(-7);

	// const mutation = trpc.logToServer.useMutation();
	// mutation.mutate("Hello");

	return (
		<div>
			{data?.greeting} Current time: {timeData?.time}
		</div>
	);
}
