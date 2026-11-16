import React, { useEffect, useRef } from "react"

const initialPositions = [
		{ x: -4, y: 0 },
		{ x: -4, y: 0 },
		{ x: 20, y: -8 },
		{ x: 20, y: -8 },
	]

const AnimatedBackground = () => {
	const blobRefs = useRef([])


	useEffect(() => {
		let currentScroll = window.pageYOffset
		let ticking = false

		const updatePositions = () => {
			blobRefs.current.forEach((blob, index) => {
				if (!blob) return
				const initialPos = initialPositions[index]

				const xOffset = Math.sin(currentScroll / 100 + index * 0.5) * 340
				const yOffset = Math.cos(currentScroll / 100 + index * 0.5) * 40

				const x = initialPos.x + xOffset
				const y = initialPos.y + yOffset

				blob.style.transform = `translate(${x}px, ${y}px)`
			})
			ticking = false
		}

		const handleScroll = () => {
			currentScroll = window.pageYOffset
			if (!ticking) {
				requestAnimationFrame(updatePositions)
				ticking = true
			}
		}

		window.addEventListener("scroll", handleScroll)
		return () => {
			window.removeEventListener("scroll", handleScroll)
		}
	}, [])

	return (
		<div className="pointer-events-none fixed inset-0" aria-hidden="true">
			<div className="absolute inset-0">
				{[
					"bg-secondary",
					"bg-primary",
					"bg-primary",
					"bg-primary",
				].map((color, i) => (
					<div
						key={i}
						ref={(ref) => (blobRefs.current[i] = ref)}
						className={`absolute rounded-full mix-blend-multiply filter blur-[128px] transition-transform duration-[1400ms] ease-out opacity-40 md:opacity-20 ${i === 0
							? "top-0 -left-4 md:w-96 md:h-96 w-72 h-72"
							: i === 1
								? "top-0 -right-4 w-96 h-96 hidden sm:block"
								: i === 2
									? "-bottom-8 left-[-40%] md:left-20 w-96 h-96"
									: "-bottom-10 right-20 w-96 h-96 hidden sm:block"
							} ${color}`}
					/>
				))}
			</div>
			<div className="absolute inset-0 opacity-40">
				<div className="absolute inset-0 
    bg-gradient-to-r from-grid-line from-[1px] to-transparent to-[1px]
    bg-[length:24px_24px]" />
				<div className="absolute inset-0 
    bg-gradient-to-b from-grid-line from-[1px] to-transparent to-[1px]
    bg-[length:24px_24px]" />
			</div>

		</div>
	)
}

export default AnimatedBackground
