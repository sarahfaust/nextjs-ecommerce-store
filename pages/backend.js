import styled from '@emotion/styled';
import { useState } from 'react';
import { Button } from '../components/Button';
import { ColCard, Container, h2Style } from '../styles';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 640px;
`;

const Label = styled.label`
  margin-bottom: 6px;
  font-family: inherit;
  font-weight: 400;
`;

const Input = styled.input`
  margin-bottom: 24px;
  height: 36px;
  min-width: 240px;
  font-family: inherit;
`;

const Select = styled.select`
  margin-bottom: 24px;
  height: 36px;
  min-width: 240px;
  font-family: inherit;
`;

export default function Checkout(props) {
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [price, setPrice] = useState('');
  const [publisher, setPublisher] = useState('');
  const [designers, setDesigners] = useState('');

  return (
    <Container>
      <ColCard>
        <h2 css={h2Style}>Add/edit product</h2>
        <Form>
          <Label htmlFor="title">Title</Label>
          <Input id="title" name="title" />
          <Label htmlFor="subtitle">Subtitle</Label>
          <Input id="subtitle" name="subtitle" />
          <Label htmlFor="price">Price</Label>
          <Input id="price" name="price" />
          <Label htmlFor="publisher">Publisher</Label>
          <Select id="publisher" name="publisher" />
          <Label htmlFor="designers">Designers</Label>
          <Select id="designers" name="designers" />
          <Label htmlFor="categories">Categories</Label>
          <Select id="categories" name="categories" />
          <Label htmlFor="mechanisms">Mechanisms</Label>
          <Select id="mechanisms" name="mechanisms" />
          <Button>Submit</Button>
        </Form>
      </ColCard>
    </Container>
  );
}

export async function getServerSideProps() {
  const { getGames } = await import('../util/database');
  const games = await getGames();
  console.log(games);

  return {
    props: {
      games: games,
    },
  };
}
