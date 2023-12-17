const GradientWrapper = ({ children, ...props }) => (
    
    <div
        
        className={`relative overflow-hidden my-16 border-t sm:my-28 ${props.className || ""}`}>
        <div className="blur-[100px] absolute inset-0 w-full h-full"
            style={{
                background:
                    "linear-gradient(202.72deg, rgba(79, 71, 230, 0.0989) 14.76%, rgba(79, 71, 230, 0.089) 34.37%, rgba(152, 103, 240, .09) 86.62%)",
            }}>

        </div>
        <div className="relative">
            {children}
        </div>
    </div>
)

export default GradientWrapper