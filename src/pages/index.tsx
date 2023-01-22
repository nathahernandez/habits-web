import Habit from '@/components/Habit'
import Head from 'next/head'

export default function Home() {
	return (
		<>
			<Head>
				<title>Habit</title>
				<meta name="description" content="Application created to track habits" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Habit />
		</>
	)
}
