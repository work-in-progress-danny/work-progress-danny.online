import { createContext, useContext, useState } from "react"
import type { ReactNode } from "react"
import type { ProjectIdType } from "../components/projects"
import { industrialDesignProjects, webProjects } from "../components/projects"
import type {
	ProjectBodyIdType,
	ProjectDateIdType,
	ProjectIdTypes,
	ProjectLinkIdType,
	ProjectType,
	ProjectVisualContentIdType,
} from "../components/projects/project"

export type AnimatingElementHandlersType = {
	isAnimating: boolean
	isFinished: boolean
}

type AnimationListContextType = {
	isAnimating: (id: AnimationIdType) => boolean
	isFinished: (id: AnimationIdType) => boolean
	onFinish: () => void
}

type AnimationRefTableType = Record<AnimationIdType, { isAnimating: boolean; isFinished: boolean }>

const AnimationList = createContext<AnimationListContextType | undefined>(undefined)

export type AnimationIdType =
	| "Intro Header"
	| "Intro Text"
	| "Intro Socials github"
	| "Intro Socials X"
	| "Intro Socials substack"
	| "Intro Socials spotify"
	| "Intro Portrait"
	| "InProgress title"
	| "InProgress projects tab web projects"
	| "InProgress projects tab industrial design projects"
	| "InProgress projects"
	| "Footer"
	| ProjectIdTypes

const getProjectAnimationIds = (projects: ProjectType[]): ProjectIdTypes[] => {
	return projects.flatMap(
		({
			title,
			links,
			description,
			createdAt,
			lastUpdatedAt,
		}): [
			ProjectIdType,
			ProjectLinkIdType,
			ProjectDateIdType,
			ProjectDateIdType,
			ProjectBodyIdType,
			ProjectVisualContentIdType,
		] => {
			return [
				`${title}`,
				`${title}-link-${links[0].href}`,
				`${title}-date-${createdAt}`,
				`${title}-date-${lastUpdatedAt}`,
				`${title}-body-${description}`,
				`${title}-visualContent-${title}`,
			]
		},
	)
}

const animationOrderList: AnimationIdType[] = [
	"Intro Header",
	"Intro Text",
	"Intro Portrait",
	"Intro Socials github",
	"Intro Socials X",
	"Intro Socials substack",
	"Intro Socials spotify",
	"InProgress title",
	"InProgress projects tab web projects",
	"InProgress projects tab industrial design projects",
	...getProjectAnimationIds(webProjects),
	...getProjectAnimationIds(industrialDesignProjects),
	"InProgress projects",
	"Footer",
]

const getInitialAnimationRefTable = (): AnimationRefTableType =>
	animationOrderList.reduce((acc, id) => {
		acc[id] = {
			isAnimating: id === "Intro Header", // intro header is the first animation and needs to start it all off
			isFinished: false,
		}
		return acc
	}, {} as AnimationRefTableType)

type AnimationStateType = {
	currentAnimationIndex: number
	animationRefTable: AnimationRefTableType
}

export const AnimationListProvider = ({ children }: { children: ReactNode }) => {
	const [animationState, setAnimationState] = useState<AnimationStateType>({
		animationRefTable: getInitialAnimationRefTable(),
		currentAnimationIndex: 0,
	})

	const onFinish = () => {
		const { currentAnimationIndex, animationRefTable } = animationState
		const nextAnimationIndex = currentAnimationIndex + 1
		const currentlyAnimatingId = animationOrderList[currentAnimationIndex]
		const nextAnimationId = animationOrderList[nextAnimationIndex]

		if (nextAnimationIndex > animationOrderList.length - 1) {
			// Finish up this last animation and return
			animationRefTable[currentlyAnimatingId] = {
				isFinished: true,
				isAnimating: false,
			}
			return
		}

		setAnimationState((prev) => ({
			currentAnimationIndex: nextAnimationIndex,
			animationRefTable: {
				...prev.animationRefTable,
				[currentlyAnimatingId]: {
					isAnimating: false,
					isFinished: true,
				},
				[nextAnimationId]: {
					isAnimating: true,
					isFinished: false,
				},
			},
		}))
	}

	const isAnimating = (id: AnimationIdType) => animationState.animationRefTable[id]?.isAnimating
	const isFinished = (id: AnimationIdType) => animationState.animationRefTable[id]?.isFinished

	return (
		<AnimationList.Provider value={{ onFinish, isAnimating, isFinished }}>
			{children}
		</AnimationList.Provider>
	)
}

type UseAnimationListType = {
	getIsAnimating: () => boolean
	getIsFinished: () => boolean
	onFinish: () => void
}

export const useAnimationList = (id: AnimationIdType): UseAnimationListType => {
	const context = useContext(AnimationList)

	if (!context) {
		throw new Error("useAnimationContext must be used within an AnimationProvider")
	}

	const { isFinished, isAnimating, onFinish } = context

	return {
		onFinish,
		getIsFinished: () => isFinished(id),
		getIsAnimating: () => isAnimating(id),
	}
}
