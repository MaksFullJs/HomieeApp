import { useSelector } from "react-redux"
import ShoppingItem from "../../components/ShoppingItem/ShoppingItem";
import './Cart.css';
import { useNavigate } from "react-router-dom";


const Cart = () => {
    const items = useSelector((state) => state.cart.cartItems);
    const totalExpense = useSelector((state) => state.cart.cartTotalExpense)
    const navigate = useNavigate();

    return (
        <main className="cart">
            <div className="cart__container">
                <div className="cart__block">
                    <h1 className="cart__title">Shopping Cart</h1>
                    <div className="cart-item__block">
                        {items.map(({ item, count }) => (
                            <ShoppingItem
                                id={item.id}
                                name={item.name}
                                image={item.image}
                                dailyExpense={item.dailyExpense}
                                key={item.id}
                            />
                        ))}
                    </div>
                    {totalExpense > 0 &&
                        <h3 className="cart__expense">Total expense: ${totalExpense}</h3>
                    }
                </div>
                <div className="cart__btn-block">
                    <button className="first-btn" onClick={() => navigate('/catalog')}>Back to Catalog</button>
                    {totalExpense > 0 &&
                        <button className="button">Continue</button>
                    }
                </div>
            </div>
        </main>
    )
}

export default Cart;