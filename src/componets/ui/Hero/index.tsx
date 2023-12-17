

// import NavLink from "../../../assets/CV/angelBernecheaCV.png"

import NavLink from "../NavLink";





const Hero = () => {

  return(
    <section>
      <div className="custom-screen py-28 text-gray-600">
        <div className=" w-full h-[400px]  flex flex-col justify-center items-end gap-6 mb-6 pr-6">
          <h2 className="text-4xl text-gray-800 font-extrabold mx-autso  sm:text-6xl">Frontend Developer</h2>
          <h1 className="max-w-xl text-4xl mx-autso">Angel Aberto Bernecha</h1>
        </div>								
        <div className="space-y-5 max-w-4xl mx-auto text-center ">
            <NavLink className="text-white bg-gray-800 hover:bg-gray-600 active:bg-gray-900 " target="blank"  href={'https://54albert54.github.io'}> See CV</NavLink>
          
          </div>
        </div>
    </section>
)}

export default Hero
