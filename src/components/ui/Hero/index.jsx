import AnimateTxt from "../AnimateTxt";
import ButtonLink from "../ButtonLink";



const infop = `   I build exceptional and accessible digital experiences for the web. A
Frontend focused Web Developer building the Frontend of Websites and Web
Applications that leads to the success of the overall product`


const Hero = () => {

  return(
    <section className="h-1/4 mt-10 sm:mt-0">
      <div className="w-full flex justify-center py-28  flex-row text-gray-600">
   
        
        <div className=" sm:w-1/2 h-[400px]   flex flex-col justify-centers items-center  gap-6 mb-6 px-6  sm:pr-6">
          <AnimateTxt className="!text-4xl !h-[100px] text-gray-800 font-extrabold    sm:text-6xl"
           text={['Frontend Developer','Angel Aberto Bernecha']}/>
          <AnimateTxt className="max-w-xl h-[100px] !text-2xl text-left !font-normal  " text={[infop]}/>
          <p></p>
        <div className="space-y-5 max-w-4xl mx-auto text-center ">
              <ButtonLink  className={' mx-auto'} path={'https://54albert54.github.io'} text={'Ver CV'}/>
          </div>
        
        </div>								
            
        </div>
    </section>
)}

export default Hero
