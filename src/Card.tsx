type Props = {
    pic:string,
    name:string,
    info:string
}

const Card = ({pic, name, info}:Props)=>{
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

    return (
        <div style={cardStyles}>
            <img style={imgStyles} src={pic} alt="profile picture"/>
            <div style={textDivStyles}>
                <h2>{name}</h2>
                <p>{info}</p>
            </div>
        </div>
    )
}

export default Card;