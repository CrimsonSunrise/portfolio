import {
	GlobalOutlined,
	GithubOutlined,
	LinkedinOutlined,
	InstagramOutlined,
	SunOutlined,
	MoonOutlined,
} from "@ant-design/icons";
import "./App.scss";
import { useEffect, useRef, useState } from "react";
import {
	Layout,
	Tag,
	ConfigProvider,
	theme,
	Button,
	Typography,
	Image,
	Space,
} from "antd";
import { AnimatePresence, motion } from "framer-motion";
import { v4 as uuidv4 } from "uuid";
import { NeatGradient } from "@firecms/neat";

import Img01 from "./assets/images/01.jpg";
import Img02 from "./assets/images/02.jpg";
import Img03 from "./assets/images/03.jpg";
import Img04 from "./assets/images/04.jpg";
import Img05 from "./assets/images/05.jpg";
import Img06 from "./assets/images/06.jpg";
import Img07 from "./assets/images/07.jpg";
import Img08 from "./assets/images/08.jpg";
import Img09 from "./assets/images/09.jpg";
import Img24082024 from "./assets/images/24082024.jpg";
import Img2020 from "./assets/images/2020.png";
import Img2021 from "./assets/images/2021.png";
import Img2022 from "./assets/images/2022.png";
import ImgMoon from "./assets/images/moon.jpg";
import Img2023 from "./assets/images/2023.jpg";
import { Footer } from "antd/es/layout/layout";

const { Title, Text } = Typography;

const tagsData = [
	"Todos",
	"ReactJS",
	"React Native",
	"Python",
	"HTML, CSS and Javascript",
	"Front End",
	"Back End",
];

const projects = [
	{
		id: 100,
		name: "Tibia Viplist",
		tags: ["Todos", "ReactJS", "Front End", "HTML, CSS and Javascript"],
		repository: "https://github.com/CrimsonSunrise/tibia-viplist",
		preview_url: "https://tibiaviplist.vercel.app",
		thumbnail: Img02,
		description: (
			<>
				<p>
					Tibia Viplist is a web tool that allows you to track the
					online status of characters in the game Tibia without the
					need to log in to the game. You can add characters from
					different servers (worlds) and easily monitor their
					online/offline status.
				</p>
				<p>
					The application is built using React with Vite, and it
					utilizes the{" "}
					<a href="https://tibiadata.com" target="_blank">
						Tibia Data API
					</a>{" "}
					to fetch near-real-time information about the characters.
				</p>
			</>
		),
	},
	{
		id: 101,
		name: "Glimpse",
		tags: [
			"Todos",
			"ReactJS",
			"Python",
			"Front End",
			"Back End",
			"HTML, CSS and Javascript",
		],
		repository: "https://github.com/CrimsonSunrise/Glimpse",
		preview_url: "",
		thumbnail: Img03,
		description:
			"Glimpse is an open source bundle of systems and algorithms that together automate strategies and signals in brokers.",
	},
	{
		id: 102,
		name: "Mobile Pokédex with Shared Elements",
		tags: ["Todos", "React Native", "Front End"],
		repository:
			"https://github.com/CrimsonSunrise/React-Native-Shared-Elements-Simple-Pokedex",
		preview_url: "",
		thumbnail: Img01,
		description: (
			<>
				<p>
					This is a simple React Native App to demonstrate how Shared
					Elements transition works using Navigation.
				</p>
				<p>
					I'm using the{" "}
					<a href="https://pokeapi.co/docs/v2" target="_blank">
						Pokémon API
					</a>{" "}
					to fetch and show some cute little creatures.
				</p>
				<p>
					Also, to make showing and scrolling through the Pokémon list
					⚡blazingly fast⚡, it uses{" "}
					<a
						href="https://shopify.github.io/flash-list/"
						target="_blank"
					>
						FlashList
					</a>
					, a modern and optimized way to create lists in React
					Native.
				</p>
			</>
		),
	},
	{
		id: 103,
		name: "Ichimoku Speculations",
		tags: ["Todos", "Python"],
		repository: "https://github.com/CrimsonSunrise/Ichimoku-Speculations",
		preview_url: "",
		thumbnail: Img04,
		description:
			"This study was based on the Ichimoku Clouds indicator and aims to test its effectiveness in different markets.",
	},
	{
		id: 104,
		name: "Card Parallax Effect with CSS",
		tags: ["Todos", "ReactJS", "Front End", "HTML, CSS and Javascript"],
		repository: "https://github.com/CrimsonSunrise/card-parallax-effect",
		preview_url: "https://card-parallax-effect.vercel.app",
		thumbnail: Img05,
		description: (
			<>
				<p>
					A simple ReactJS page with a parallax effect done using css
					and javascript.
				</p>
				<p>
					The parallax effect is visible at anytime when the cursor is
					moving.
				</p>
			</>
		),
	},
	{
		id: 105,
		name: "Students Rank",
		tags: ["Todos", "ReactJS", "Front End", "HTML, CSS and Javascript"],
		repository: "https://github.com/CrimsonSunrise/rankAlunos",
		preview_url: "https://rank-alunos.vercel.app",
		thumbnail: Img06,
		description: (
			<>
				<p>Students Rank is a simple web view of a student score.</p>
				<p>
					I created this page a while ago when I took part in a
					development bootcamp and saw the student rank being
					presented in a slow excel sheet.
				</p>
			</>
		),
	},
	{
		id: 106,
		name: "Tech Chair 5000",
		tags: ["Todos", "ReactJS", "Front End", "HTML, CSS and Javascript"],
		repository: "https://github.com/CrimsonSunrise/techchair5000",
		preview_url: "https://techchair5000.vercel.app",
		thumbnail: Img07,
		description: (
			<>
				<p>
					This is a landing page for the revolutionary Tech Chair
					5000, the chair of all your needs!
				</p>
			</>
		),
	},
	{
		id: 107,
		name: "Seu Humor Hoje",
		tags: ["Todos", "ReactJS", "Front End", "HTML, CSS and Javascript"],
		repository: "https://github.com/CrimsonSunrise/SeuHumorHoje",
		preview_url: "https://seu-humor-hoje.vercel.app",
		thumbnail: Img08,
		description:
			"A simple HTML page with CSS animations, a bit of JavaScript, and SVG manipulation to measure our mood.",
	},
	{
		id: 108,
		name: "Take Note",
		tags: ["Todos", "HTML, CSS and Javascript", "Front End"],
		repository: "https://github.com/CrimsonSunrise/takenote",
		preview_url: "https://takenote-hazel.vercel.app",
		thumbnail: Img09,
		description: (
			<>
				<p>
					A simple HTML page with panels with the ability to create,
					edit and delete notes.
				</p>
				<p>
					You can rearrange the notes, drag and drop notes from one
					panel to the other and expand or collapse them.
				</p>
				<p>
					A cool page for keeping track of things to do or use as a
					Kanban board.
				</p>
			</>
		),
	},
];

function App() {
	const { defaultAlgorithm, darkAlgorithm } = theme;
	const [isDarkMode, setIsDarkMode] = useState(false);

	const [filtered, setFiltered] = useState<any>([]);
	const [selectedId, setSelectedId] = useState<string | null>(null);
	const [selectedTags, setSelectedTags] = useState<string[]>(["Todos"]);

	useEffect(() => {
		setFiltered(projects);

		const isDark = localStorage.getItem("isDarkMode");
		if (isDark != undefined && isDark != null) {
			setIsDarkMode(JSON.parse(isDark));
		} else {
			localStorage.setItem("isDarkMode", isDarkMode.toString());
		}
	}, []);

	const handleClick = () => {
		setIsDarkMode((previousValue) => !previousValue);
		localStorage.setItem("isDarkMode", (!isDarkMode).toString());
	};

	const handleChange = (tag: string, checked: boolean) => {
		const nextSelectedTags = checked
			? [...selectedTags, tag]
			: selectedTags.filter((t) => t !== tag);

		if (tag === "Todos" || nextSelectedTags.length === 0) {
			setSelectedTags(["Todos"]);
			setFiltered(projects);
		} else {
			const filteredTags = nextSelectedTags.filter((t) => t !== "Todos");
			setSelectedTags(filteredTags);

			const newFiltered = projects.filter((project) =>
				filteredTags.every((t) => project.tags.includes(t))
			);

			setFiltered(newFiltered);
		}
	};

	const images = [
		{
			key: uuidv4(),
			text: "Caldwell 76 (Scorpius Constellation)",
			image: Img24082024,
			type: "photo",
		},
		{
			key: uuidv4(),
			text: "Waning Gibbous Moon",
			image: ImgMoon,
			type: "photo",
		},
		{
			key: uuidv4(),
			text: "Tree on a Brain",
			image: Img2022,
			type: "drawing",
		},
		{
			key: uuidv4(),
			text: "A Cute Axolotl",
			image: Img2021,
			type: "drawing",
		},
		{
			key: uuidv4(),
			text: "Thor in his Throne",
			image: Img2020,
			type: "drawing",
		},
		{
			key: uuidv4(),
			text: "Open Book",
			image: Img2023,
			type: "drawing",
		},
	] as any;

	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const gradientRef = useRef<NeatGradient | null>(null);

	const [nameFront, setNameFront] = useState(["Crimson", "Sunrise"]);
	const [nameBack, setNameBack] = useState(["Crimson", "Sunrise"]);

	const namesA = ["Crimson", "Sunrise"];
	const namesB = ["João", "Alan"];

	useEffect(() => {
		const intervalId = setInterval(() => {
			const isSwitchingToB =
				nameFront[0] === namesA[0] && nameFront[1] === namesA[1];
			const targetNames = isSwitchingToB ? namesB : namesA;

			let currentStep =
				nameFront[0].length > nameFront[1].length
					? nameFront[0].length
					: nameFront[1].length;
			const clearIntervalId = setInterval(() => {
				setNameFront((prev) => [
					currentStep > 0
						? prev[0].substring(0, currentStep - 1)
						: "",
					currentStep > 0
						? prev[1].substring(0, currentStep - 1)
						: "",
				]);
				setNameBack((prev) => [
					currentStep > 0
						? prev[0].substring(0, currentStep - 1)
						: "",
					currentStep > 0
						? prev[1].substring(0, currentStep - 1)
						: "",
				]);

				currentStep--;
				if (currentStep < 0) {
					clearInterval(clearIntervalId);

					let writeStep = 0;
					const writeIntervalId = setInterval(() => {
						setNameFront((_) => [
							writeStep < targetNames[0].length
								? targetNames[0].substring(0, writeStep + 1)
								: targetNames[0],
							writeStep < targetNames[1].length
								? targetNames[1].substring(0, writeStep + 1)
								: targetNames[1],
						]);
						setNameBack((_) => [
							writeStep < targetNames[0].length
								? targetNames[0].substring(0, writeStep + 1)
								: targetNames[0],
							writeStep < targetNames[1].length
								? targetNames[1].substring(0, writeStep + 1)
								: targetNames[1],
						]);

						writeStep++;
						if (
							writeStep >=
							Math.max(
								targetNames[0].length,
								targetNames[1].length
							)
						) {
							clearInterval(writeIntervalId);
						}
					}, 100);
				}
			}, 100);
		}, 5000);

		return () => clearInterval(intervalId);
	}, [nameFront]);

	useEffect(() => {
		if (!canvasRef.current) return;

		gradientRef.current = new NeatGradient({
			ref: canvasRef.current,
			colors: [
				{
					color: "#79CFEE",
					enabled: true,
				},
				{
					color: "#757AEE",
					enabled: true,
				},
				{
					color: "#48D7D7",
					enabled: true,
				},
				{
					color: "#19A2E5",
					enabled: true,
				},
				{
					color: "#1D2E92",
					enabled: false,
				},
			],
			speed: 3,
			horizontalPressure: 5,
			verticalPressure: 8,
			waveFrequencyX: 1,
			waveFrequencyY: 3,
			waveAmplitude: 8,
			shadows: 7,
			highlights: 5,
			colorBrightness: 1,
			colorSaturation: 7,
			wireframe: false,
			colorBlending: 5,
			backgroundColor: "#003FFF",
			backgroundAlpha: 0.3,
			resolution: 0.5,
		});

		return gradientRef.current.destroy;
	}, [canvasRef.current]);

	const track = useRef(document.getElementById("image-track")) as any;

	const [isDraggingDown, setIsDraggingDown] = useState(false);
	const [isDraggingMove, setIsDraggingMove] = useState(false);

	const handleOnDown = (e: any) => {
		track.current.dataset.mouseDownAt = e.clientX;
		setIsDraggingDown(true);
	};

	const handleOnUp = (_: any) => {
		track.current.dataset.mouseDownAt = "0";
		track.current.dataset.prevPercentage = track.current.dataset.percentage;
		setIsDraggingDown(false);
		setIsDraggingMove(false);
	};

	const draggingSpeed = 1;

	const handleOnMove = (e: any) => {
		if (isDraggingDown) setIsDraggingMove(true);

		if (track.current.dataset.mouseDownAt === "0") return;

		const mouseDelta =
				parseFloat(track.current.dataset.mouseDownAt) - e.clientX,
			maxDelta = window.innerWidth / draggingSpeed;

		const percentage = (mouseDelta / maxDelta) * -100;
		const nextPercentageUnconstrained =
			parseFloat(track.current.dataset.prevPercentage) + percentage;
		const nextPercentage = Math.max(
			Math.min(nextPercentageUnconstrained, 0),
			-100
		);

		if (track.current) track.current.dataset.percentage = nextPercentage;

		if (track.current) {
			track.current.animate(
				{
					transform: `translate(${nextPercentage}%, -50%)`,
				},
				{ duration: 1200, fill: "forwards" }
			);
			for (const image of track.current.getElementsByClassName("image")) {
				image.animate(
					{
						objectPosition: `${100 + nextPercentage}% center`,
					},
					{ duration: 1200, fill: "forwards" }
				);
			}
		}
	};

	window.onmousedown = (e) => handleOnDown(e);

	window.ontouchstart = (e) => handleOnDown(e.touches[0]);

	window.onmouseup = (e) => handleOnUp(e);

	window.ontouchend = (e) => handleOnUp(e.touches[0]);

	window.onmousemove = (e) => handleOnMove(e);

	window.ontouchmove = (e) => handleOnMove(e.touches[0]);

	return (
		<ConfigProvider
			theme={{
				algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
				token: {
					fontFamily: "Nunito",
				},
			}}
		>
			<Layout className="layout">
				<div className="content">
					<Button
						shape={"circle"}
						size={"large"}
						onClick={handleClick}
						className="dark-mode-switch"
					>
						{isDarkMode ? <SunOutlined /> : <MoonOutlined />}
					</Button>

					<section className="hero">
						<canvas
							className={""}
							style={{
								isolation: "isolate",
								height: "100%",
								width: "100%",
							}}
							ref={canvasRef}
						/>
						<div className="title-wrapper">
							<h1 className="sweet-title">
								<span data-text={nameFront[0]}>
									{nameBack[0]}
								</span>
								<span data-text={nameFront[1]}>
									{nameBack[1]}
								</span>
							</h1>
							<span className="bottom-title">
								I'm João Alan, also know on the web as Crimson
								Sunrise. An enthusiastic developer fascinated by
								possibilities.
							</span>
						</div>
						<div className="socials">
							<Button
								href="https://github.com/CrimsonSunrise"
								target="_blank"
								shape="round"
								size="large"
								icon={<GithubOutlined />}
							>
								Github
							</Button>
							<Button
								href="https://www.linkedin.com/in/joaoalan"
								target="_blank"
								size="large"
								shape="round"
								icon={<LinkedinOutlined />}
							>
								LinkedIn
							</Button>
							<Button
								href="https://www.instagram.com/joaoalan_"
								target="_blank"
								size="large"
								shape="round"
								icon={<InstagramOutlined />}
							>
								Instagram
							</Button>
						</div>
					</section>

					<section className="projects">
						<Title>Some projects of my own</Title>
						<div className="projects-filter">
							{tagsData.map<React.ReactNode>((tag) => (
								<Tag.CheckableTag
									key={tag}
									checked={selectedTags.includes(tag)}
									onChange={(checked: boolean) =>
										handleChange(tag, checked)
									}
								>
									{tag}
								</Tag.CheckableTag>
							))}
						</div>
						<motion.div layout className="projects-list">
							<AnimatePresence>
								{filtered.map((project: any) => (
									<motion.div
										layout
										key={project.id}
										animate={{ opacity: 1 }}
										initial={{ opacity: 0 }}
										exit={{ opacity: 0 }}
										layoutId={project.name}
										onClick={() =>
											setSelectedId(project.name)
										}
										whileHover={{ scale: 1.05 }}
										transition={{ duration: 0.1 }}
										className="project"
									>
										<img
											loading="lazy"
											src={project.thumbnail}
										></img>
										<div className="project-name">
											{project.name}
										</div>
										<div className="project-mask"></div>
									</motion.div>
								))}

								<div
									className={`mask ${
										selectedId ? "active" : ""
									}`}
									onClick={() => setSelectedId(null)}
								></div>

								{selectedId && (
									<motion.div
										layoutId={selectedId}
										className="project-preview"
										key={222}
									>
										<img
											loading="lazy"
											src={
												projects.find(
													(project: any) =>
														project.name ==
														selectedId
												)?.thumbnail
											}
											alt={
												projects.find(
													(project: any) =>
														project.name ==
														selectedId
												)?.name
											}
										></img>
										<div className="project-preview-content">
											<Title level={4}>
												{selectedId}
											</Title>
											<div className="preview-description">
												{
													projects.find(
														(project: any) =>
															project.name ==
															selectedId
													)?.description
												}
											</div>
											<div className="preview-tags">
												{projects
													.find(
														(project: any) =>
															project.name ===
															selectedId
													)
													?.tags.map(
														(tag: string) => {
															return tag !==
																"Todos" ? (
																<span
																	key={tag}
																	className="preview-tag"
																>
																	{tag}
																</span>
															) : null;
														}
													)}
											</div>
											<div className="preview-footer">
												{projects.find(
													(project: any) =>
														project.name ===
														selectedId
												)?.repository ? (
													<a
														href={
															projects.find(
																(
																	project: any
																) =>
																	project.name ===
																	selectedId
															)?.repository
														}
														target="_blank"
													>
														<Button
															type="primary"
															shape="round"
															icon={
																<GithubOutlined />
															}
														>
															Repository
														</Button>
													</a>
												) : null}

												{projects.find(
													(project: any) =>
														project.name ===
														selectedId
												)?.preview_url ? (
													<a
														href={
															projects.find(
																(
																	project: any
																) =>
																	project.name ===
																	selectedId
															)?.preview_url
														}
														target="_blank"
													>
														<Button
															type="primary"
															shape="round"
															icon={
																<GlobalOutlined />
															}
														>
															Live preview
														</Button>
													</a>
												) : null}
											</div>
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					</section>

					<section className="extra">
						<Title>Because life is not just code 🍃</Title>

						<div className="carousel-wrapper">
							<div
								id="image-track"
								ref={track}
								data-mouse-down-at="0"
								data-prev-percentage="0"
							>
								{images.map((image: any) => {
									return (
										<div
											key={`slider-img${image.text}`}
											className="image-holder"
										>
											<Image
												key={image.id}
												draggable="false"
												preview={
													isDraggingMove
														? false
														: {
																toolbarRender: (
																	_,
																	{}
																) => (
																	<Space
																		size={
																			12
																		}
																		className="toolbar-wrapper"
																	></Space>
																),
														  }
												}
												className="image"
												loading="lazy"
												src={image.image}
											/>
											<div className="image-info">
												<Text>{image.text}</Text>
												<span className="type">
													{image.type}
												</span>
											</div>
										</div>
									);
								})}
							</div>
						</div>
					</section>
				</div>
				<Footer
					style={{
						display: "flex",
						alignItems: "center",
						flexDirection: "column",
						justifyContent: "center",
						gap: 10,
						height: 200,
						width: "100%",
						backgroundColor: "rgba(100, 100, 100, 0.1)",
					}}
				>
					<Text
						style={{
							fontFamily: "Nunito Bold",
							fontSize: "1.2em",
						}}
					>
						My links
					</Text>
					<div
						className="socials"
						style={{
							display: "flex",
							gap: 10,
						}}
					>
						<Button
							href="https://github.com/CrimsonSunrise"
							target="_blank"
							shape="round"
							size="large"
							icon={<GithubOutlined />}
						>
							Github
						</Button>
						<Button
							href="https://www.linkedin.com/in/joaoalan"
							target="_blank"
							size="large"
							shape="round"
							icon={<LinkedinOutlined />}
						>
							LinkedIn
						</Button>
						<Button
							href="https://www.instagram.com/joaoalan_"
							target="_blank"
							size="large"
							shape="round"
							icon={<InstagramOutlined />}
						>
							Instagram
						</Button>
					</div>
				</Footer>
			</Layout>
		</ConfigProvider>
	);
}

export default App;
