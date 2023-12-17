

import { memoryImg, podedex, rocklegend } from "../../assets/porfolio"




export const paletaColores={
  primary:'#8A50E9',
  primaryHover:'#FEB8FF',
  second:'#4B4453',
  backGround:"#B0A8B9",
  actions:'#E02114',
  actionHover:"#FF6545"

}

 const allRepo = []


allRepo.push({
  title:'Pokedex React-Natice',
  img:podedex,
  about:'lindo portfolio explicando la cualidades de que e aprendido',
  code:['REACT','REACT','MYSQUL'],
  repoLink:'https://github.com/54albert54/PokeNative',
  pageLink:`https://65111f2a70ade65a3ac6363e--astounding-kashata-dbb4fc.netlify.app`
})

allRepo.push({
  title:"MemoryQuiz",
  img:memoryImg,
  about:'lindo portfolio explicando la cualidades de que e aprendido',
  code:['HTML','CSS','JavaScript'],
  repoLink:'https://github.com/54albert54/memoryQuiz',
  pageLink:`https://memoryquiz.onrender.com`
})

allRepo.push({
  title:'Rock Legends',
  img:rocklegend,
  about:'lindo portfolio explicando la cualidades de que e aprendido',
  code:['JavaScript','HTML'],
  repoLink:'https://github.com/54albert54/RockLegends2in1',
  pageLink:'https://54albert54.github.io/RockLegends2in1/'
})

export {allRepo}
  
  
