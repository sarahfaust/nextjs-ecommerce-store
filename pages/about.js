import { Container, h1Style } from '../styles';

export default function About() {
  return (
    <Container>
      <h1 css={h1Style} data-cy="page-about-header">
        ABOUT
      </h1>
    </Container>
  );
}
