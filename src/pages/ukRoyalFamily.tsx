import Card from "../components/Card";
import React, {CSSProperties, useState} from "react";
import NavigationBar from "../components/navigation";

const UkRoyalFamily: React.FC = () => {

    const [favorites, setFavorites] = useState<string[]>([]);

    const addFavorite = (item: string) => {
        setFavorites((prevFavorites) => [...prevFavorites, item]);
    };

    const removeFavorite = (item: string) => {
        setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite !== item));
    };

    //here are the different contents that go into the cards using props
    const profiles = [
        {
            id: 1,
            item: 'item 1',
            pictureURL:"https://th.bing.com/th/id/OIP.0bJlSBwgMIj9_sWXanRgaAHaGj?pid=ImgDet&rs=1",
            name: "King Charles",
            info: "King Charles is the head of the family after his mother, Queen Elizabeth, died in 2023"
          },
          {
            id: 2,
            item: 'item 2',
            pictureURL: "https://www.thefamouspeople.com/profiles/images/prince-william-4.jpg",
            name: "Prince William",
            info: "Prince William is the oldest son of King Charles, he is the next heir of the crown"
          },
          {
            id: 3,
            item: 'item 3',
            pictureURL: "https://th.bing.com/th/id/OIP.xiCHWq3XZ2UvgKlSQwDxLgHaFj?pid=ImgDet&rs=1",
            name: "Princess Anne",
            info: "Princess Anne is the younger sister of King Charles, she's a badass"
          }
    ]

    //styling the body
    const bodyContainerStyles: CSSProperties = {
        height: "800px",
        paddingTop: "40px",
        backgroundColor: "lightGrey",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    }

    const cardContainerStyles: CSSProperties = {
        display: "flex",
        paddingTop: "40px",
        gap: "40px",
    }

    return (
        <div>
            <div>
                {/*the navBar where the "favoriteCount" is coming 
                from a prop in "navigation.tsx". 
                Lenght counts how many items are put in the favorites array */}
                <NavigationBar favoriteCount={favorites.length} />
            </div>
            <div style={bodyContainerStyles}>
                <div>
                    <h2>Choose your favorite Royals</h2>
                </div>
                <div style={cardContainerStyles}>
                    {profiles.map ((profile) =>{
                        return <Card /*returning the card with all of the props */
                            pic={profile.pictureURL} 
                            name={profile.name} 
                            info={profile.info}
                            key={profile.id}
                            item={profile.item}
                            addFavorite={() => addFavorite(profile.item)}
                            removeFavorite={() => removeFavorite(profile.item)}
                            isFavorite={favorites.includes(profile.item)} 
                        />
                    })}    
                </div>
            </div>
        </div>
    )
}

export default UkRoyalFamily