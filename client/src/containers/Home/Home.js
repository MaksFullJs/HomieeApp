import React from 'react';
import Homie from '../../assets//images/homie.jpg';
import './Home.css'
import Model1 from '../../assets/images/cats.jpg';
import Model2 from '../../assets/images/dogs.jpg';
import Model3 from '../../assets//images/fishes.jpg';
import Model4 from '../../assets//images/pigs.jpg';
import Model5 from '../../assets//images/parrots.jpg';
import Model6 from '../../assets//images/turtles.jpg';
import Model7 from '../../assets//images/chameleons.jpg';
import CardItem from '../../components/CardItem/CardItem';
import { useState } from 'react';

const data = [
    {
        title: "Cats",
        image: Model1,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
            + "eaque qui soluta officia eius illum molestiae fugit."
            + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
    },
    {
        title: "Dogs",
        image: Model2,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
            + "eaque qui soluta officia eius illum molestiae fugit."
            + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
    },
    {
        title: "Fishes",
        image: Model3,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
            + "eaque qui soluta officia eius illum molestiae fugit."
            + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
    },
    {
        title: "Guinea pigs",
        image: Model4,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
            + "eaque qui soluta officia eius illum molestiae fugit."
            + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
    },
    {
        title: "Parrots",
        image: Model5,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
            + "eaque qui soluta officia eius illum molestiae fugit."
            + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
    },
    {
        title: "Turtles",
        image: Model6,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
            + "eaque qui soluta officia eius illum molestiae fugit."
            + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
    },
    {
        title: "Chameleons",
        image: Model7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque maiores minus placeat itaque, iusto,"
            + "eaque qui soluta officia eius illum molestiae fugit."
            + "Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.",
    },
];


function Home() {
    const [numberItems, setNumberItems] = useState(3);
    const currentData = data.slice(0, numberItems);
    const [dataLength] = useState(data.length);
    const [visible, setVisible] = useState(true);
    const block = document.querySelector('.home-block-with-card');

    const removeElement = () => {
        setVisible((prev) => !prev);
        block.style.paddingBottom = '120px';
    };

    const showMoreItems = () => {
        if (numberItems + 3 >= dataLength) {
            removeElement();
        }
        setNumberItems(numberItems + 3);
    }
    return (
        <main className="home">
            <div className="home__container">
                <div className='home-block-with-img'>
                    <img src={Homie} alt="heading" className="home__img" />
                    <div className="home__info">
                        <h1 className="home__title">FindHomiie is the best place to find new animal friends!</h1>
                        <div className="home__text">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                            Cumque maiores minus placeat itaque, iusto, eaque qui soluta officia eius illum molestiae fugit.
                            Labore deleniti nihil delectus dolore molestias! Veniam, deserunt.</div>
                    </div>
                </div>
                <div className='home-block-with-card'>
                    {currentData.map(({ title, image, text }, idx) => (
                        <CardItem
                            title={title}
                            image={image}
                            text={text}
                            key={idx}
                        />
                    ))}
                </div>
                {visible && (
                    <div className='home-block-with-button'>
                        <button onClick={showMoreItems} className='home__button'>View more</button>
                    </div>
                )}
            </div>
        </main>
    )
};

export default Home;