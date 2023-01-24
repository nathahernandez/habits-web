import Image from "next/image"
import imgLogo from "@/assets/logo.svg"
import imgPlus from "@/assets/plus.svg"

export default function Header () {
	return (
		<header className="w-full max-w-3xl mx-auto flex justify-between items-center">
			<Image
				src={imgLogo}
				alt="Logo image"
			/>
			<button
				type="button"
				className="flex justify-between items-center gap-3 text-white p-4 border border-violet-500 rounded-lg opacity-60
					       hover:opacity-100 transition-opacity duration-150 font-semibold"
			>
				<Image
					src={imgPlus}
					alt="Plus image"
				/>
				Novo Hábito
			</button>
		</header>
	)
}