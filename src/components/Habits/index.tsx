import Header from "@/components/Header"
import Stats from "@/components/Stats"

export default function Habits () {
	return (
		<div className="w-full max-w-5xl px-6 flex flex-col gap-[70px]">
			<Header />
			<Stats />
		</div>
	)
}