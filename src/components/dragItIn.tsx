import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import { ClosedHandIcon, OpenHandIcon } from "../components/icons"
import { useAnimationList } from "../lib/AnimationList"
import type { AnimationIdType } from "../lib/AnimationList"
import { cn } from "../lib/utils"

export const DragItIn = ({ id, children }: { id: AnimationIdType; children: ReactNode }) => {
	const { onFinish, getIsAnimating, getIsFinished } = useAnimationList(id)
	const isFinished = getIsFinished()
	const isAnimating = getIsAnimating()

	const [cursorType, setCursorType] = useState<"grabbing" | "open">("grabbing")

	useEffect(() => {
		if (!isAnimating) return

		setTimeout(() => {
			setCursorType("open")
		}, 1000)

		setTimeout(() => {
			onFinish()
		}, 1250)
	})

	return (
		<div
			className={cn(
				!isFinished && !isAnimating && "hidden",
				isAnimating && "animate-dragIn",
				"relative",
			)}
		>
			{isAnimating && (
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24">
					{cursorType === "grabbing" ? <ClosedHandIcon /> : <OpenHandIcon />}
				</div>
			)}
			{children}
		</div>
	)
}
