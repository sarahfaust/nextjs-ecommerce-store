import styled from '@emotion/styled';
import { useEffect, useState } from 'react';
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
  const [id, setId] = useState(0);
  const [currentGame, setCurrentGame] = useState({});
  const [isEdit, setIsEdit] = useState(false);

  useEffect(() => {
    const selectedGame = props.games.find((game) => {
      console.log(game.id, id);
      return game.id === id;
    });
    console.log(selectedGame);
    setCurrentGame(selectedGame);
  }, [id, props.games]);

  return (
    <Container>
      <ColCard>
        <h2 css={h2Style}>Add/edit product</h2>
        <Form>
          <Button
            onClick={(event) => {
              event.preventDefault();
              setIsEdit((prev) => !prev);
            }}
            margin="24px 0"
          >
            {isEdit ? 'Add game' : 'Edit game'}
          </Button>
          <Label htmlFor="title">Title</Label>
          {isEdit ? (
            <Select
              id="games"
              name="games"
              onChange={(event) => {
                setId(event.currentTarget.value);
              }}
            >
              {props.games.map((game) => (
                <option key={game.id} value={game.id}>
                  {game.name}
                </option>
              ))}
            </Select>
          ) : (
            <Input id="title" name="title" />
          )}
          <Label htmlFor="subtitle">Subtitle</Label>
          <Input id="subtitle" name="subtitle" />
          <Label htmlFor="price">Price</Label>
          <Input id="price" name="price" />
          <Label htmlFor="publisher">Publisher</Label>
          <Select id="publishers" name="publishers">
            {props.publishers.map((publisher) => (
              <option key={publisher.id}>{publisher.name}</option>
            ))}
          </Select>
          <Label htmlFor="designers">Designers</Label>
          <Select id="designers" name="designers">
            {props.designers.map((designer) => (
              <option key={designer.id}>
                {designer.firstName} {designer.lastName}
              </option>
            ))}
          </Select>
          <Label htmlFor="categories">Categories</Label>
          <Select id="categories" name="categories">
            {props.categories.map((category) => (
              <option key={category.id} value={category.kind}>
                {category.kind}
              </option>
            ))}
          </Select>
          <Label htmlFor="mechanisms">Mechanisms</Label>
          <Select id="mechanisms" name="mechanisms">
            {props.mechanisms.map((mechanism) => (
              <option key={mechanism.id}>{mechanism.kind}</option>
            ))}
          </Select>
          <Button>Submit</Button>
        </Form>
      </ColCard>
    </Container>
  );
}

export async function getServerSideProps() {
  const {
    getGames,
    getPublishers,
    getDesigners,
    getCategories,
    getMechanisms,
  } = await import('../util/database');
  const games = await getGames();
  const publishers = await getPublishers();
  const designers = await getDesigners();
  const categories = await getCategories();
  const mechanisms = await getMechanisms();

  return {
    props: {
      games: games,
      publishers: publishers,
      designers: designers,
      categories: categories,
      mechanisms: mechanisms,
    },
  };
}
