import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import { addItem } from '../../util/cookies';

const Button = styled.button`
  background-color: white;
  border: none;
  padding: 12px;
  border-radius: 4px;
  min-width: 40px;
  min-height: 40px;
  font-weight: bold;
  font-family: inherit;
  &:hover {
    background-color: darkturquoise;
  }
`;

const CounterWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 160px;
  border: solid 2px darkgrey;
  border-radius: 4px;
  background-color: white;
`;

const AmountWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
  background-color: white;
`;

export default function Product(props) {
  const [amount, setAmount] = useState(0);

  return (
    <>
      <Image
        src={`/${props.game.image}.webp`}
        alt={`${props.game.image} game box front`}
        width={200}
        height={200}
      />
      <h3>{props.game.name}</h3>
      <p>{props.game.price} €</p>
      <p>{props.game.description}</p>
      <div>
        <CounterWrapper>
          <Button onClick={() => setAmount((prev) => prev - 1)}>-</Button>
          <AmountWrapper>
            <label>{amount}</label>
          </AmountWrapper>
          <Button onClick={() => setAmount((prev) => prev + 1)}>+</Button>
        </CounterWrapper>
      </div>
      <div>
        <Button
          onClick={() => {
            if (amount === 0) {
              alert('Please tell us how many games you would like.');
            } else {
              props.setCart(addItem(props.cart, props.game.id, amount));
              setAmount(0);
            }
          }}
        >
          Add to cart
        </Button>
      </div>
      <div>
        <Button>Go to checkout</Button>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const { getGame } = await import('../../util/database');
  const game = await getGame(context.query.productId);

  return {
    props: {
      game: game,
    },
  };
}
