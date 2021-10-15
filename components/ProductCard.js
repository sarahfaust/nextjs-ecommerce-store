import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { addItem } from '../util/cookies';
import { Button } from './Button';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 36px;
  margin: 24px;
  background-color: whitesmoke;
  box-shadow: 2px 2px 12px 4px rgba(125, 125, 125, 0.05);
`;

const Content = styled.div``;

const ProductInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-top: 24px;
`;

const ProductName = styled.h3``;

const Price = styled.label`
  display: flex;
  justify-content: center;
  margin-top: 8px;
  font-size: smaller;
`;

const linkStyles = css`
  display: flex;
  justify-content: center;
`;

export function ProductCard(props) {
  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    setIsInCart(props.cart.some((product) => product.id === props.game.id));
  }, [props.cart, props.game.id]);

  return (
    <Card>
      <Link href={`/products/${props.game.id}`}>
        <a css={linkStyles}>
          <Content>
            <Image
              src={`/${props.game.image}.webp`}
              alt={`${props.game.image} game box front`}
              width={160}
              height={160}
            />
            <ProductInfo>
              <ProductName>{props.game.name}</ProductName>
              <Price>{props.game.price} €</Price>
            </ProductInfo>
          </Content>
        </a>
      </Link>
      <Button
        onClick={() => props.setCart(addItem(props.cart, props.game.id, 1))}
        margin="12px 0 0"
        color="red"
        disabled={isInCart ? 'disabled' : ''}
      >
        {isInCart ? 'Already added' : 'Add to cart'}
      </Button>
    </Card>
  );
}
