import styled from '@emotion/styled';
import { ProductCard } from '../../components/ProductCard';

const ProductsSection = styled.section`
  display: flex;
  justify-content: center;
`;

const ProductsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default function Products(props) {
  return (
    <ProductsSection>
      <ProductsContainer>
        {props.games.map((game) => {
          return (
            <li key={game.id}>
              <ProductCard game={game} />
            </li>
          );
        })}
      </ProductsContainer>
    </ProductsSection>
  );
}

export async function getServerSideProps() {
  const { getGames } = await import('../../util/database');
  const games = await getGames();
  console.log(games);

  return {
    props: {
      games: games,
    },
  };
}
