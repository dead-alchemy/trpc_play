import path from "path";
require("dotenv").config({path: path.join(__dirname, "../../.env")});

const customConfig: {port: number; origin: string; dbUri: string} = {
	port: process.env.MONGODB_PORT as unknown as number,
	origin: process.env.MONGODB_ORIGIN as unknown as string,
	dbUri: process.env.MONGODB_URI as unknown as string,
};

export default customConfig;
