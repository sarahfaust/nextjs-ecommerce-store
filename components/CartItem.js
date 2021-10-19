import styled from '@emotion/styled';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { decreaseAmount, deleteItem, increaseAmount } from '../util/cookies';
import { AmountSelector } from './AmountSelector';
import { Button } from './Button';

const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
  border-bottom: solid black 1px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const PriceDetails = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProductText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 24px;
`;

const Name = styled.p`
  font-weight: 500;
`;

const Price = styled.p`
  font-weight: 500;
  padding: 0 24px;
`;

export default function CartItem(props) {
  const [itemTotal, setItemTotal] = useState(0);

  useEffect(() => {
    setItemTotal(props.product.amount * props.product.price);
  }, [props.cart, props.product]);

  function onClickMinus() {
    props.setCart(decreaseAmount(props.cart, props.product.id));
  }

  function onClickPlus() {
    props.setCart(increaseAmount(props.cart, props.product.id));
  }

  return (
    <li key={props.product.id} data-cy="cart-item">
      <Item>
        <ProductDetails>
          <Image
            src={`/${props.product.image}.webp`}
            alt={`${props.product.image} game box front`}
            width={64}
            height={64}
          />
          <ProductText>
            <Name>{props.product.name}</Name>
            <p>{props.product.subtitle}</p>
          </ProductText>
        </ProductDetails>
        <PriceDetails>
          <Price>{itemTotal} €</Price>
          <AmountSelector
            onClickMinus={onClickMinus}
            amount={props.product.amount}
            onClickPlus={onClickPlus}
          />
          <Button
            onClick={() =>
              props.setCart(deleteItem(props.cart, props.product.id))
            }
            dataCy={`cart-delete-button-${props.product.id}`}
          >
            Delete
          </Button>
        </PriceDetails>
      </Item>
    </li>
  );
}
