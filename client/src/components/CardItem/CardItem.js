import { Card } from "antd";
import React from "react";
import './CardItem.css'


const CardItem = ({ title = "Empty", image, text }) => {
    return (
        <Card
            hoverable
            style={{ width: 420, borderRadius: "20px" }}
            cover={
                <img className="card-img" alt="card" src={image} />
            }
        >
            <div className="card__info">
                <h2 className="card__title">{title}</h2>
                <div className="card__text">{text}</div>
            </div>
        </Card>
    );
};


export default CardItem;