import { profile } from "console";
import Card from "./components/Card";
import React, {useState} from "react";
import NavigationBar from "./components/navigation";

const Home: React.FC = () => {

    const [favorites, setFavorites] = useState<string[]>([]);

    const addFavorite = (item: string) => {
        setFavorites((prevFavorites) => [...prevFavorites, item]);
    };

    const removeFavorite = (item: string) => {
        setFavorites((prevFavorites) => prevFavorites.filter((favorite) => favorite !== item));
    };

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

    const cardContainerStyles = {
        height: "600px",
        backgroundColor: "grey",
        display: "flex",
        justifyContent: "spaceBetween",

    }

    return (
        <div>
            <div>
                <NavigationBar favoriteCount={favorites.length} />
            </div>
            <div style={cardContainerStyles}>
                <div>
                    <h3>Choose your favorite Royals</h3>
                </div>
                <div>
                    {profiles.map ((profile) =>{
                        return <Card 
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

export default Home