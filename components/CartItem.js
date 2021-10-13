import styled from '@emotion/styled';
import { decreaseAmount, deleteItem, increaseAmount } from '../util/cookies';

const CartItemCard = styled.div`
  padding: 24px;
  border: solid 2px darkgray;
  border-radius: 2px;
  margin-bottom: 12px;
`;

const GameName = styled.span``;

export default function CartItem(props) {
  return (
    <li key={props.product.id}>
      <CartItemCard>
        <GameName>{props.product.name} </GameName>
        <button
          onClick={() => {
            props.setCart(decreaseAmount(props.cart, props.product.id));
          }}
        >
          -
        </button>
        <label>{props.product.amount}</label>
        <button
          onClick={() =>
            props.setCart(increaseAmount(props.cart, props.product.id))
          }
        >
          +
        </button>
        <button
          onClick={() =>
            props.setCart(deleteItem(props.cart, props.product.id))
          }
        >
          Delete
        </button>
      </CartItemCard>
    </li>
  );
}
