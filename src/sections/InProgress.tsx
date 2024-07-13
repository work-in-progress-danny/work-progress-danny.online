import { useEffect } from "react"
import { TypingText } from "../components/typingText"
import { useAnimationList } from "../lib/AnimationList"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { IndustrialDesignProjects, WebProjects } from "../components/projects"

const Title = () => {
	const { addSelfToAnimationList, onFinish, getIsAnimating, getIsFinished } =
		useAnimationList("in progress title")
	const isFinished = getIsFinished()
	const isAnimating = getIsAnimating()

	useEffect(() => {
		addSelfToAnimationList()
	}, [addSelfToAnimationList])

	return (
		<h2 className="title text-5xl pb-2 md:pb-5">
			<TypingText
				text="IN MOTION..."
				onFinish={onFinish}
				isFinished={isFinished}
				startTyping={isAnimating}
			/>
		</h2>
	)
}

export const InProgress = () => {
	return (
		<div className="w-full flex flex-col">
			<Title />
			<Tabs defaultValue="web development" className="">
				<TabsList>
					<TabsTrigger value="web development">Web Development & Design</TabsTrigger>
					<TabsTrigger value="industrial design">3D Modeling & Product Design</TabsTrigger>
				</TabsList>
				<TabsContent value="web development">
					<WebProjects />
				</TabsContent>
				<TabsContent value="industrial design">
					<IndustrialDesignProjects />
				</TabsContent>
			</Tabs>
		</div>
	)
}
