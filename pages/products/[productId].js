import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { AmountSelector } from '../../components/AmountSelector';
import { Button } from '../../components/Button';
import { Container, h2Style, RowCard, TextStyle } from '../../styles';
import { addItem } from '../../util/cookies';

const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 24px;
`;

const Interact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const InteractRow = styled.div`
  display: flex;
  align-items: center;
  padding: 12px 0;
`;

export default function Product(props) {
  const [amount, setAmount] = useState(0);

  return (
    <Container>
      <RowCard>
        <Image
          src={`/${props.game.image}.webp`}
          alt={`${props.game.image} game box front`}
          width={200}
          height={200}
        />
        <ProductInfo>
          <h2 css={h2Style}>{props.game.name}</h2>
          <TextStyle>{props.game.price} €</TextStyle>
          <TextStyle>
            {props.game.description} {props.game.playersMin} to{' '}
            {props.game.playersMax} people can play this game. An average round
            takes{' '}
            {props.game.timeMin === props.game.timeMax
              ? `around ${props.game.timeMin}`
              : `from ${props.game.timeMin} to ${props.game.timeMax}`}{' '}
            minutes.
          </TextStyle>
          <Interact>
            <InteractRow>
              <AmountSelector
                onClickMinus={() => {
                  if (amount > 0) {
                    setAmount((prev) => prev - 1);
                  }
                }}
                amount={amount}
                onClickPlus={() => setAmount((prev) => prev + 1)}
                dataCy={`product-amount-${props.game.id}`}
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
                margin="0 12px 0 0"
                dataCy={`product-add-button-${props.game.id}`}
              >
                Add to cart
              </Button>
            </InteractRow>
            <Link href="/checkout">
              <a data-cy="product-checkout-link">Go to checkout</a>
            </Link>
          </Interact>
        </ProductInfo>
      </RowCard>
    </Container>
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
