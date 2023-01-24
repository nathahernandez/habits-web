import Habits from "@/components/Habits"
import Head from "next/head"

export default function Home() {
	return (
		<div className="w-screen h-screen flex justify-center items-center">
			<Head>
				<title>Habit</title>
				<meta name="description" content="Application created to track habits" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<Habits />
		</div>
	)
}
