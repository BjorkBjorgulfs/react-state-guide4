import './button.css';

type Props = {
    color?:string,
    title:string
}
const Button = ({color, title}:Props)=> {
    const buttonStyles = {
        backgroundColor : color || "#C49D9D",
        borderRadius: "60px",
        height: "40px",
        minWidth: "120px",
        color: "#F5F5F5",
        border: "2px solid #C49D9D",
        paddingLeft: "10px",
        paddingRight: "10px",
        marginRight: "20px"
    }
    //then I made a hover effect using CSS
    
    return (
        <>
            <button className="button" style = {buttonStyles}>{title}</button>
        </>
    )

}

export default Button;