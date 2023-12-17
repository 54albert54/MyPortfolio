// @ts-checks
import { cssIcons, figmaIcons, githubIcons, htmlIcons, javaScriptIcons, mysqlIcons, nextjsIcons, nodejsIcons, photoshopIcons, reactIcons, sassIcons, tailsindIcons, typescriptIcons } from "../../../assets/icons"
import SectionWrapper from "../../SectionWrapper"




const features = [
	{
		  icon: htmlIcons,
			title: "HTML",			
	},
	{
			icon: cssIcons,
			title: "CSS",
			
	},
	{
		icon: sassIcons,
		title: "Sass",
},
	{
			icon: javaScriptIcons,
			title: "JavaScrip",
			
	},
	{
			icon: typescriptIcons,
			title: "TypesScrip",
			
	},
	{
			icon: reactIcons,
			title: "React",
			
	},
	
	{
			icon: nextjsIcons,
			title: "Next.js",
		
	},
	{
			icon: tailsindIcons,
			title: "Tailwind CSS",
		
	},
	{
			icon: nodejsIcons,
			title: "Node.js",
		
	},
	{
			icon: figmaIcons,
			title: "Figma",
			
	},
	{
		icon: githubIcons,
		title: "git & gitHub",
		
},
	{
			icon: photoshopIcons,
			title: "photoshop",
	},
	{
		icon: mysqlIcons,
		title: "MySql",
},
]

const ToolKit = () => {

   

	return (
			<SectionWrapper>
					<div id="toolkit" className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
							<div className="max-w-2xl mx-auto space-y-3 sm:text-center">
									<h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
											Work with the best toolkit
									</h2>
									<p>
											These are a few of our favourite things
									</p>
							</div>
							<div className="mt-12">
									<ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
											{
													features.map((item, idx) => (
															<li key={idx} className="relative h-36 flex  gap-x-4 items-center shadow-xl justify-center  gradient-border rounded-lg">
																	<div className="flex-none w-12 h-12    flex items-center justify-center">
																			<img src={item.icon} alt={item.title} />
																	</div>
																	<div>
																			<h4 className="text-lg absolute text-gray-800 font-semibold">
																				{item.title}
																			</h4>
																			<p className="mt-3">
																				
																			</p>
																	</div>
															</li>
													))
											}
									</ul>
							</div>
					</div>
			</SectionWrapper>
	)
}

export default ToolKit