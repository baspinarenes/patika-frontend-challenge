import React from 'react';
import './App.css';
import Card from './components/Card/Card';
import RecipeImg from './assets/iskender-kebap.jpg';

let recipes = [
  {
    author: 'Enes Başpınar',
    title: 'İskender Kebap',
    date: '30 Nisan 2021, Cuma',
    img: RecipeImg,
    desc:
      "Bursa'nın medarı iftiharı ve dünyanın en güzel lezzeti. Altında kıtır pidesi, muhteşem eti ve yoğurduyla birlikte adeta bir ahenk sunar. Üzerine dökülen kızgın yağ ile birlikte son kıvamını alır.",
    likeCount: '2.995.000',
    isLiked: false,
  },
];

function App() {
  return (
    <div className="App">
      <div className="cards">
        {recipes.map((recipe) => (
          <Card
            author={recipe.author}
            title={recipe.title}
            date={recipe.date}
            img={recipe.img}
            desc={recipe.desc}
            likeCount={recipe.likeCount}
            isLiked={recipe.isLiked}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
