import { ColCard, Container, h2Style } from '../styles';

export default function Thanks() {
  return (
    <Container>
      <ColCard>
        <h2 css={h2Style} data-cy="page-thanks-heading">
          Thank you!
        </h2>
        <div>
          Thank you for your purchase. We will ship it within the next two
          business days. Check your email or account get updates on your order.
          Reach out with any questions to sarah@boardgameshop.at.
        </div>
      </ColCard>
    </Container>
  );
}
