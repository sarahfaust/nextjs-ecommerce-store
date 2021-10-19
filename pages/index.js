import { Container, h1Style } from '../styles';

export default function Home() {
  return (
    <Container>
      <h1 css={h1Style} data-cy="page-home-heading">
        BOARD GAME STORE
      </h1>
    </Container>
  );
}
