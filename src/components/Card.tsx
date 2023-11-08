import { CSSProperties } from "react";
import {ReactComponent as HeartIcon} from "../images/icon-heart.svg";

type Props = {
    pic:string;
    name:string;
    info:string;
    item: string;
    addFavorite: (item: string) => void;
    removeFavorite: (item: string) => void;
    isFavorite: boolean;
}

const Card: React.FC<Props> = ({pic, name, info, item, addFavorite, removeFavorite, isFavorite }) => {
    //the favorite function for the favorite button
    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFavorite(item);
        } else {
            addFavorite(item);
        }
    }
    
    //styling the card
    const cardStyles: CSSProperties = {
        borderRadius: "10px",
        border: "2px solid",
        borderColor: "#C49D9D",
        height: "160px",
        width: "336px",
        display: "flex",
        padding: "20px",
        background: "#f5f5f5",
        alignItems: "center",
        position: "relative"
    }

    const imgStyles: CSSProperties = {
        width: "120px",
        height: "120px",
        borderRadius: "80px",
        objectFit: "cover"
    }

    const textDivStyles = {
        paddingLeft: "20px"
    }

    const favoriteButtonStyle: CSSProperties = {
        height: "50px",
        width: "50px",
        display: "flex",
        border: "none",
        backgroundColor: "inherit",
        alignItems: "center",
        justifyContent: "center",
        position: "absolute", 
        top: "8px",
        right: "8px"
    }

    //Making changes to the color of the heart if it is favorite or not
    const heartStyle = {
        ...isFavorite ? {fill: 'red'} : { fill: 'black'}, 
    };

    return (
        <div style={cardStyles}>
            {/*I use props to gather the contents in the cards, see "home.tsx"*/}
            <img style={imgStyles} src={pic} alt="profile picture"/>
            <div style={textDivStyles}>
                <h2>{name}</h2>
                <p>{info}</p>
            </div>
            {/*here is the button that triggers the favorite function,
            it's linked to "home.tsx" where the favoriteCount is triggered
            and goes from home.tsx to the navigation.tsx */}
            <button style={favoriteButtonStyle} onClick={handleFavoriteClick}>
                <HeartIcon style={heartStyle}/>
            </button>
        </div>
    )
}

export default Card;