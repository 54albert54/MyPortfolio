const SectionWrapper = ({ children, ...props }) => (
    <section {...props} className={`py-16 px-8  ${props.className || ""}`}>
        {children}
    </section>
)

export default SectionWrapper