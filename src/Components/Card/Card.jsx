// eslint-disable-next-line react/prop-types
const Card = ({ children, styleCss }) => {
    return (
        <div className={styleCss}>
            {children}
        </div>
    )
}

export default Card