import SectionWrapper from "../../SectionWrapper"
import NavLink from "../NavLink"
const ctaImage = `https://phantom-elmundo.unidadeditorial.es/0d47e36cc1f95d92ce86ee41c0cc6757/resize/473/f/webp/assets/multimedia/imagenes/2023/08/01/16908932497284.jpg`

import imgFondo from '../../../assets/playa.webp'
import { useLandingContext } from "../../providers/useLandingContext"
import { TRepositorio } from "../../const/data"

const CTA = () => {
  const { mainProyect , showMoProyect  }= useLandingContext()
  const data:TRepositorio = mainProyect
  return (
    <SectionWrapper id="cta" className="pb-0">
      <div className=" pb-12">
        <div className="items-center gap-x-12 lg:flex">
          <figure className="flex-1  sm:hidden lg:block">
              <img    src={data.img} className=" w-4/6 rounded-lg md:max-w-lg mx-auto border-md" alt="the last proyects" />
          </figure>
          <div className="max-w-xl mt-6 md:mt-0 lg:max-w-2xl">
              <h2 className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                {data.title}
              </h2>
              <p className="mt-3 text-gray-600">
                 {data.about}
              </p>
                <div 
                className="py-2.5 px-4 text-center rounded-lg duration-150 inline-block mt-4 font-medium text-sm text-white bg-indigo-600 hover:bg-indigo-700 active:bg-indigo-800"
                onClick={()=>showMoProyect(data)}>
                  check Proyect
                </div>

             
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}

export default CTA