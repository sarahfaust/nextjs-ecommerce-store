import Link from 'next/link';
import Layout from '../../components/Layout';

export default function Products(props) {
  return (
    <Layout>
      <div>Products</div>
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

export async function getServerSideProps(context) {
  const { games } = await import('../../util/database');

  return {
    props: {
      games: games,
    },
  };
}
