import './button.css';

type Props = {
    color?:string,
    title:string
}

const Button = ({color, title}:Props)=> {
    
    //styling the button
    const buttonStyles = {
        backgroundColor : color || "#C49D9D", //if the color of the button is not specified elsewhere, then it is "#C49D9d"
        borderRadius: "60px",
        height: "40px",
        minWidth: "120px",
        color: "#F5F5F5",
        border: "2px solid #C49D9D",
        paddingLeft: "10px",
        paddingRight: "10px",
    }
    //then I made a hover effect using CSS in button.css
    
    return (
        <>
            <button className="button" style = {buttonStyles}>{title}</button>
        </>
    )

}

export default Button;