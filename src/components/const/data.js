import { toolsIcons, developIcons, codeIcons } from "../../assets/icons";

import { memoryImg, podedex, rocklegend } from "../../assets/porfolio"




export const paletaColores={
  primary:'#8A50E9',
  primaryHover:'#FEB8FF',
  second:'#4B4453',
  backGround:"#B0A8B9",
  actions:'#E02114',
  actionHover:"#FF6545"

}



export const features = [
  {
    icon: codeIcons,
    title: "The beautiful software.",
    desc: "I believe that everything you can imagine is posible when you have clearly defined goals, strong design, strategy and just start to create.",
  },
  {
    icon: toolsIcons,
    title: "Strategy & Creative Direction",
    desc: "Strategy is the first ingredient for exceptional, ostentatious work. ",
  },
  {
    icon: developIcons,
    title: "Design & Development",
    desc: "this is where the magic happens, just bring the ideas to life.This step will vary depending on what goals we have but always keep focus and haved fun. ",
  },
];






const allRepo = []


allRepo.push({
  title:'Pokedex React-Natice',
  img:podedex,
  about:'¡Bienvenido a la Pokédex React Native, tu compañero esencial para explorar el fascinante mundo de los Pokémon! Diseñada con la última tecnología en React Native, esta aplicación combina la magia de la nostalgia con la eficiencia de la programación moderna.',
  code:['React Native','MYSQUL'],
  repoLink:'https://github.com/54albert54/PokeNative',
  pageLink:`https://65111f2a70ade65a3ac6363e--astounding-kashata-dbb4fc.netlify.app`
})

allRepo.push({
  title:"MemoryQuiz",
  img:memoryImg,
  about:'Juego creado con HTML CSS y JavaScrip para practicar un poco la logica de programacion, animaciones creadas con CSS para dar la ilucion del voltear las cartas .',
  code:['HTML','CSS','JavaScript'],
  repoLink:'https://github.com/54albert54/memoryQuiz',
  pageLink:`https://memoryquiz.onrender.com`
})

allRepo.push({
  title:'Rock Legends',
  img:rocklegend,
  about:'Juego creado con la etiqueta CANVAS de HTML y JavaScrip recreaccion de un juego para mi hijo ',
  code:['JavaScript','HTML'],
  repoLink:'https://github.com/54albert54/RockLegends2in1',
  pageLink:'https://54albert54.github.io/RockLegends2in1/'
})

export {allRepo}
  
  
