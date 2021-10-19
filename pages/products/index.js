import styled from '@emotion/styled';
import { ProductCard } from '../../components/ProductCard';
import { Container, h1Style } from '../../styles';

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function Products(props) {
  return (
    <Container>
      <h1 css={h1Style} data-cy="page-products-heading">
        Products
      </h1>
      <ProductsContainer>
        {props.games.map((game) => {
          return (
            <li key={game.id}>
              <ProductCard
                game={game}
                cart={props.cart}
                setCart={props.setCart}
              />
            </li>
          );
        })}
      </ProductsContainer>
    </Container>
  );
}

export async function getServerSideProps() {
  const { getGames } = await import('../../util/database');
  const games = await getGames();

  return {
    props: {
      games: games,
    },
  };
}
