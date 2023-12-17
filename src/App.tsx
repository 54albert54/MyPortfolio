
import './App.css'
import Layout from './componets/Layout'
import GradientWrapper from './componets/GradientWrapper'
import Features from './componets/ui/Features'
import CTA from './componets/ui/CTA'
import Testimonials from './componets/ui/Testimonials'
import FooterCTA from './componets/ui/FooterCTA'
import { useLandingContext } from './componets/providers/useLandingContext'
import { ProyecCarsdCover, ProyecCarsdDectail } from './componets/ui/ProyecCarsdDectail'
import Hero from './componets/ui/Hero'
import ToolKit from './componets/ui/ToolKit'

function App() {
  const {showProyect }= useLandingContext()


  

  return (
   <>
    <ProyecCarsdDectail/>
     {showProyect && <ProyecCarsdCover/>}
    
     <Layout>
      <Hero/>
      
     <GradientWrapper>
        <Features />
        <CTA />
      </GradientWrapper>
      <ToolKit/>
      <GradientWrapper>
        <Testimonials />
      
      </GradientWrapper>
      <FooterCTA />
     
     </Layout>
   </>
  )
}

export default App
