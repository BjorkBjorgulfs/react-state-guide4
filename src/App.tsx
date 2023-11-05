import Card from './Card';
import Button from './Button';

function App() {
  const buttons = [
    {title: "UK Royal family"},
    {title: "DK Royal family"},
    {title: "Hollywood Royal family"}
  ]
  const profiles = [
    {
      pictureURL:"https://th.bing.com/th/id/OIP.0bJlSBwgMIj9_sWXanRgaAHaGj?pid=ImgDet&rs=1",
      name: "King Charles",
      info: "King Charles is the head of the family after his mother, Queen Elizabeth, died in 2023"
    },
    {
      pictureURL: "https://www.thefamouspeople.com/profiles/images/prince-william-4.jpg",
      name: "Prince William",
      info: "Prince William is the oldest son of King Charles, he is the next heir of the crown"
    },
    {
      pictureURL: "https://th.bing.com/th/id/OIP.xiCHWq3XZ2UvgKlSQwDxLgHaFj?pid=ImgDet&rs=1",
      name: "Princess Anne",
      info: "Princess Anne is the younger sister of King Charles, she's a badass"
    }
  ]
  return (
    <div>
      <nav>
        {buttons.map((button)=>{
          return <Button title={button.title}></Button>
        })}
      </nav>
      <div>
        <h1>Here is a card and button I made using react-props</h1>
      </div>
      <div>
        {profiles.map((profile)=>{
            return <Card pic={profile.pictureURL} name={profile.name} info={profile.info}></Card>
        })}
      </div>
      
    </div>
  );
}

export default App;
