export default function DaysWeek ({ day } : { day: string }) {
	return (
		<div
			className="text-zinc-400 text-xl w-10 h-10 flex justify-center items-center font-bold"
		>
			{day}
		</div>
	)
}