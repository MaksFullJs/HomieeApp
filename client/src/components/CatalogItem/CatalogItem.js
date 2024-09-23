import { Card } from "antd";
import React from "react";
import { NavLink } from "react-router-dom";
import './CatalogItem.css'



const CatalogItem = ({ id, name, text, image, dailyExpense, animType }) => {
    
    return (
        <Card
            hoverable
            style={{ width: 320, borderRadius: "20px", height: 'fit-content' }}
            cover={
                <img className="item__img" alt="example" src={image} />
            }
        >
            <div className="item__info">
                <h2 className="item__name">{name}</h2>
                <div className="item__description">{text}</div>
                <p className="item__price"> <strong>Daily expense:</strong> ${dailyExpense}</p>
                <p className="item__type"> <strong>Animal type:</strong> {animType}</p>
                <NavLink to={`/catalog/${id}`}>
                    <button className="item__button">
                        Show More
                    </button>
                </NavLink>
            </div>
        </Card>
    );
}

export default CatalogItem;