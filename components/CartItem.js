import styled from '@emotion/styled';
import Image from 'next/image';
import { decreaseAmount, deleteItem, increaseAmount } from '../util/cookies';
import { AmountSelector } from './AmountSelector';
import { Button } from './Button';

const CartItemCard = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 36px;
  margin: 36px;
  background-color: whitesmoke;
  border-radius: 8px;
  box-shadow: 2px 2px 11px 4px rgba(125, 125, 125, 0.1);
`;

const GameName = styled.span``;

export default function CartItem(props) {
  function onClickMinus() {
    props.setCart(decreaseAmount(props.cart, props.product.id));
  }

  function onClickPlus() {
    props.setCart(increaseAmount(props.cart, props.product.id));
  }

  console.log(props.product);

  return (
    <li key={props.product.id}>
      <CartItemCard>
        <Image
          src={`/${props.product.image}.webp`}
          alt={`${props.product.image} game box front`}
          width={64}
          height={64}
        />
        <GameName>{props.product.name} </GameName>
        <AmountSelector
          onClickMinus={onClickMinus}
          amount={props.product.amount}
          onClickPlus={onClickPlus}
        />
        <Button
          onClick={() =>
            props.setCart(deleteItem(props.cart, props.product.id))
          }
        >
          Delete
        </Button>
      </CartItemCard>
    </li>
  );
}
