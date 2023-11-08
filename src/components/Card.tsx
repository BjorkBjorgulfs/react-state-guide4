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
    const handleFavoriteClick = () => {
        if (isFavorite) {
            removeFavorite(item);
        } else {
            addFavorite(item);
        }
    }
    
    const cardStyles = {
        borderRadius: "10px",
        border: "2px solid",
        borderColor: "#C49D9D",
        height: "160px",
        width: "336px",
        display: "flex",
        padding: "20px",
        background: "#f5f5f5",
        alignItems: "center"
    }

    const imgStyles = {
        width: "120px",
        height: "120px",
        borderRadius: "80px",
    }

    const textDivStyles = {
        paddingLeft: "20px"
    }

    const favoriteButtonStyle: CSSProperties = {
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

    const heartStyle = isFavorite ? {fill: 'red'} : { fill: 'none'};

    return (
        <div style={cardStyles}>
            <img style={imgStyles} src={pic} alt="profile picture"/>
            <div style={textDivStyles}>
                <h2>{name}</h2>
                <p>{info}</p>
            </div>
            <button style={favoriteButtonStyle} onClick={handleFavoriteClick}>
                <HeartIcon style={heartStyle}/>
            </button>
        </div>
    )
}

export default Card;