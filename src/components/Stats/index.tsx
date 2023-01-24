import { generateDates } from "@/utils/generate-dates"
import { v4 as uuidv4 } from "uuid"
import DaysWeek from "../DaysWeek"
import StatsBox from "../StatsBox"

const days = ["D", "S", "T", "Q", "Q", "S", "S"]

const statsDates = generateDates()
const minDaysToFill = 18 * 7
const amountToFill = minDaysToFill - statsDates.length


export default function Stats () {
	return (
		<section
			className="w-full flex"
		>
			<div
				className="grid grid-rows-{7} grid-flow-row gap-3"
			>
				{ days.map ((day) => <DaysWeek key={`${uuidv4()}`} day={day}/>) }

			</div>

			<div
				className="grid grid-rows-7 grid-flow-col gap-3"
			>
				{ statsDates.map(day => <StatsBox key={day.toString()} />) }
				{ amountToFill > 0 && Array.from({ length: amountToFill }).map(() => <StatsBox disabled={true} key={`${uuidv4()}`} />)}
			</div>

		</section>
	)
}