import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import catalogItems from "../../resourses/data";
import { Tag } from 'antd';
import './ItemPage.css';
import Button from "../../components/Button/Button";
import {addToCart} from '../redux/cartSlice';
import { useDispatch } from "react-redux";


function ItemPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [allItems, setIteams] = useState(catalogItems);
    const item = allItems.find((item) => item.id === +id);
    const [count, setCount] = useState(1);
    const dispatch = useDispatch();

    const handleAdd = ({item, count}) => {
        dispatch(addToCart({item, count}));
        console.log('aaa')
    }

    const navigation = () => {
        navigate(`/cart`)
    }
    

    return (
        <main className="item-page">
            <div className="item-page__container">
                <div className="item-page-block">
                    <img alt="animal" className="item-page__img" src={item.image} />
                    <div className="right">
                        <div className="tags">
                            <Tag color="purple">{item.firstCharacteristic}</Tag>
                            <Tag color="geekblue">{item.secondCharacteristic}</Tag>
                        </div>
                        <h2 className="item-page__title">{item.name}</h2>
                        <div className="item-page__desc">{item.description}</div>
                        <div>
                            <span className="question">Countable field:</span>
                            <input onChange={(e) => setCount(+e.target.value)}
                             defaultValue={1} className="input-number" type='number'></input>
                        </div>
                    </div>
                </div>
                <div className="under-block">
                    <div className="price-block">Daily expense: ${item.dailyExpense}</div>
                    <div className="buttons-block">
                        <button className="first-btn" onClick={() => navigate(-1)}>Go back</button>
                        <button className="button" onClick={() => { handleAdd({item, count}); navigation();}}>Add to cart</button>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </main>
    )
}


export default ItemPage;