import { css } from '@emotion/react';
import styled from '@emotion/styled';
import Image from 'next/image';
import Link from 'next/link';

const Card = styled.div`
  display: flex;
  flex-direction: column;
  padding: 48px;
  margin: 36px;
  background-color: whitesmoke;
  border-radius: 8px;
  box-shadow: 2px 2px 11px 4px rgba(125, 125, 125, 0.1);
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
  return (
    <Card>
      <Link href={`/products/${props.game.id}`}>
        <a css={linkStyles}>
          <Content>
            <Image
              src={`/${props.game.image}.webp`}
              alt={`${props.game.image} game box front`}
              width={200}
              height={200}
            />
            <ProductInfo>
              <ProductName>{props.game.name}</ProductName>
              <Price>{props.game.price} €</Price>
            </ProductInfo>
          </Content>
        </a>
      </Link>
    </Card>
  );
}
