
import { htmlIcons, nextjsIcons ,photoshopIcons , githubIcons,
    toolsIcons , developIcons ,codeIcons , cssIcons ,figmaIcons ,javaScriptIcons,mysqlIcons,nodejsIcons ,reactIcons,sassIcons,  tailsindIcons , typescriptIcons} from '../../../assets/icons'
import SectionWrapper from "../../SectionWrapper"


const Features = () => {


    const features = [
        {
            icon:codeIcons,
            title: "The beautiful software.",
            desc: "I belive that everything you can imagine is posible when you have clearly defined goals, strong design, strategy and just start to create."
        },
        {
            icon:toolsIcons
               ,
            title: "Strategy & Creative Direction",
            desc: "Strategy is the neccessary ingredient for exeptional, purposefull work. "
        },
        {
            icon:  developIcons,
            title: "Design & Development",
            desc: "this is where the magic happens, just bring the ideas to life.This step will vary depending on what goals we have but always keep focus and haved fun. "
        }
    ]

    return (
        <SectionWrapper>
            <div id="features" className="custom-screen text-gray-600">
                <ul className="grid gap-x-12 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                    {
                        features.map((item, idx) => (
                            <li key={idx} className="space-y-3 flex flex-col items-center">
                                <div className="w-12 h-12 border text-indigo-600 rounded-full flex items-center justify-center">
                                    <img src={item.icon} alt="" />
                                    
                                </div>
                                <h4 className="text-lg w-full text-gray-800 font-semibold">
                                    {item.title}
                                </h4>
                                <p>
                                    {item.desc}
                                </p>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </SectionWrapper>
    )
}

export default Features


