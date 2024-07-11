import { useEffect, useState } from "react"
import type { ReactNode } from "react"
import { ClosedHandIcon, OpenHandIcon } from "../components/icons"
import { useAnimationList } from "../lib/AnimationList"
import { cn } from "../lib/utils"

export const DragItIn = ({ id, children }: { id: string; children: ReactNode }) => {
	const { addSelfToAnimationList, onFinish, isAnimating, isFinished } = useAnimationList(id)

	const [cursorType, setCursorType] = useState<"grabbing" | "open">("grabbing")

	useEffect(() => {
		addSelfToAnimationList()
	}, [addSelfToAnimationList])

	useEffect(() => {
		if (!isAnimating()) return
		setTimeout(() => {
			setCursorType("open")
		}, 1500)
		setTimeout(() => {
			onFinish()
		}, 3000)
	})

	return (
		<div
			className={cn(
				!isFinished() && !isAnimating() && "hidden",
				isAnimating() && "animate-dragIn",
				"relative",
			)}
		>
			{isAnimating() && (
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-24">
					{cursorType === "grabbing" ? <ClosedHandIcon /> : <OpenHandIcon />}
				</div>
			)}
			{children}
		</div>
	)
}
