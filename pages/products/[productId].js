import styled from '@emotion/styled';
import Image from 'next/image';
import { useState } from 'react';
import { AmountSelector } from '../../components/AmountSelector';
import { Button } from '../../components/Button';
import { addItem } from '../../util/cookies';

const ProductContainer = styled.section`
  display: flex;
  flex-direction: row;
  align-items: stretch;
  padding: 36px;
  margin: 36px;
  background-color: whitesmoke;
  border-radius: 8px;
  box-shadow: 2px 2px 11px 4px rgba(125, 125, 125, 0.1);
`;

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 24px;
`;

const InteractRow = styled.div`
  display: flex;
  align-items: center;
`;

export default function Product(props) {
  const [amount, setAmount] = useState(0);

  return (
    <ProductContainer>
      <Image
        src={`/${props.game.image}.webp`}
        alt={`${props.game.image} game box front`}
        width={200}
        height={200}
      />
      <ProductInfo>
        <h3>{props.game.name}</h3>
        <p>{props.game.price} €</p>
        <p>{props.game.description}</p>
        <InteractRow>
          <AmountSelector
            onClickMinus={() => {
              if (amount > 0) {
                setAmount((prev) => prev - 1);
              }
            }}
            amount={amount}
            onClickPlus={() => setAmount((prev) => prev + 1)}
          />
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
          <Button>Go to checkout</Button>
        </InteractRow>
      </ProductInfo>
    </ProductContainer>
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
