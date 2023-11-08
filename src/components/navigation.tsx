import { CSSProperties } from "react";
import Button from "./Button";
import {ReactComponent as HeartIcon} from "../images/icon-heart.svg";

type Props = {
    favoriteCount: number;
}

const NavigationBar: React.FC<Props> = ({favoriteCount}) => {
    
    //here are different titles that show on the buttons in navbar
    const buttons = [
        {title: "UK Royal family"},
        {title: "DK Royal family"},
        {title: "Hollywood Royal family"}
    ]

    //styling the navbar
    const navStyles: CSSProperties = {
        position: "sticky",
        height: "120px",
        background: "#F5F5F5",
        display: "flex",
        justifyContent: "space-between",
        paddingLeft: "20px",
        paddingRight: "20px",
        alignItems: "center",
        boxShadow: "0 4px 4px rgba(0, 0, 0, 0.3)"
    }

    const buttonsStyle: CSSProperties = {
        display: "flex",
        gap: "20px"
    }

    //styling the heart icon on the right side
    const heartIconStyle: CSSProperties = {
        height: "50px",
        width: "50px",
        display: "flex",
        border: "1px solid",
        borderRadius: "50px",
        borderColor: "lightGrey",
        alignItems: "center",
        justifyContent: "center",
        position: "relative" 
    }

    //styling the red circle with the number of favorites
    const counterNumber: CSSProperties = {
        height: "25px",
        width: "25px",
        borderRadius: "50px",
        backgroundColor: "red",
        position: "absolute",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        bottom: "0",
        right: "0",
        transform: "translate(25%, 25%)"
    }
    
    return (
        <div style={navStyles}>
            <div style={buttonsStyle}>
                {/*here I use .map to show different titles for the buttons */}
                {buttons.map((button)=>{
                    return <Button title={button.title}></Button>
                })}
            </div>
            <button style={heartIconStyle}>
                <HeartIcon/>
                <div style={counterNumber}>{favoriteCount}</div> {/*the number is imported from home.tsx */}
            </button>
        </div>
    )
}

export default NavigationBar