import CartItem from "../CartItem/CartItem";
//Styles
import { Wrapper } from "./Cart.styles";
//Types
import { CartItemType, CartProps } from "../../type";

const Cart: React.FC<CartProps> = ({
    cartItems,
    addToCart,
    removeFromCart
}) => {
    const totalCalculate = (items: CartItemType[]) => items.reduce((ack: number, item) => ack + item.amount * item.price, 0);
    return (
        <Wrapper>
            <h2>Your shopping cart</h2>
            {cartItems.length === 0 ? <p>No items in the cart</p> : null}
            {cartItems.map(item => (
                <CartItem 
                    key={item.id}
                    item={item}
                    addToCart={addToCart}
                    removeFromCart={removeFromCart}
                />
            ))}
            <h2>Total: $ {totalCalculate(cartItems).toFixed(2)}</h2>
        </Wrapper>
    )
}

export default Cart