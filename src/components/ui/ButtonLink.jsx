


const ButtonLink =({text ,path ,icon ,second})=>{

  return(
    <button className={` ${second?'border-dark bg-light text-dark border-2 ':'border-lights bg-dark text-light border-2 border-dark'}    px-4 py-2 rounded-3xl active:transform hover:bg-blue-400 transition-all duration-150 ease-in  `} >
      <a target="_blank" 
      
      href={path}> 
      <p className="font-semibold flex  justify-center items-center gap-1">{text} {icon && icon} </p>
      </a>
    </button>
    )
};

export default ButtonLink; 