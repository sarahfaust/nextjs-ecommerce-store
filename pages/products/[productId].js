import Layout from '../../components/Layout';

export default function Product(props) {
  return (
    <Layout>
      <p>{props.currentGame.name}</p>
      <p>{props.currentGame.price}</p>
      <p>{props.currentGame.desc}</p>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  const { games } = await import('../../util/database');

  const gameId = Number(context.query.productId);

  const currentGame = games.find((game) => game.id === gameId);

  return {
    props: {
      currentGame,
    },
  };
}
