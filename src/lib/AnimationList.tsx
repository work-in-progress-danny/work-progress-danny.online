import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"

export type AnimatingElementHandlersType = {
	isAnimating: boolean
	isFinished: boolean
}

type AnimationListContextType = {
	isAnimating: (id: string) => boolean
	isFinished: (id: string) => boolean
	addSelfToAnimationList: (id: string) => void
	onFinish: (id: string) => void
}
type UseAnimationListType = {
	getIsAnimating: () => boolean
	getIsFinished: () => boolean
	addSelfToAnimationList: () => void
	onFinish: () => void
}

type AnimationListType = Record<string, { isAnimating: boolean; isFinished: boolean }>

const AnimationList = createContext<AnimationListContextType | undefined>(undefined)

export const AnimationListProvider: React.FC<{
	children: ReactNode
}> = ({ children }) => {
	const [animationList, setAnimationList] = useState<AnimationListType>({})

	const onFinish = (id: string) => {
		setAnimationList((prev) => ({
			...prev,
			[id]: { isAnimating: false, isFinished: true },
		}))
		const keys = Object.keys(animationList)
		const justFinished = keys.findIndex((entry) => entry === id)
		if (justFinished + 1 > keys.length - 1) return
		const nextAnimationId = keys[justFinished + 1]
		setAnimationList((prev) => ({
			...prev,
			[nextAnimationId]: { isAnimating: true, isFinished: false },
		}))
	}

	const isAnimating = (id: string) => animationList[id]?.isAnimating
	const isFinished = (id: string) => animationList[id]?.isFinished

	const addSelfToAnimationList = (id: string) => {
		if (animationList[id]) return

		setAnimationList((prev) => ({
			...prev,
			[id]: { isAnimating: id === "intro header", isFinished: false },
		}))
	}

	return (
		<AnimationList.Provider value={{ addSelfToAnimationList, onFinish, isAnimating, isFinished }}>
			{children}
		</AnimationList.Provider>
	)
}

export const useAnimationList = (id: string): UseAnimationListType => {
	const context = useContext(AnimationList)

	if (!context) {
		throw new Error("useAnimationContext must be used within an AnimationProvider")
	}
	const { isFinished, isAnimating, addSelfToAnimationList, onFinish } = context

	return {
		onFinish: () => onFinish(id),
		getIsFinished: () => isFinished(id),
		getIsAnimating: () => isAnimating(id),
		addSelfToAnimationList: () => addSelfToAnimationList(id),
	}
}
