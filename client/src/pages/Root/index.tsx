import {trpc} from "../../utils/trpc";

const Root = () => {
	const {data} = trpc.greeting.hello.useQuery("Client");
	const {data: timeData} = trpc.greeting.getTime.useQuery(-7);

	return (
		<div>
			{data?.greeting} Current time: {timeData?.time}
		</div>
	);
};

export default Root;
