import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Products(props) {
  return (
    <Layout>
      <div>
        {props.games.map((game) => {
          return (
            <li key={game.id}>
              <Link href={`/products/${game.id}`}>
                <a>{game.name}</a>
              </Link>
            </li>
          );
        })}
      </div>
    </Layout>
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
