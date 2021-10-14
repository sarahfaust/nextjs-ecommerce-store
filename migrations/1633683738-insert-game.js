const games = [
  {
    id: 1,
    publisherId: 2,
    name: 'Wingspan',
    subtitle: '',
    price: 50,
    description:
      'Attract a beautiful and diverse collection of birds to your wildlife reserve.',
    image: 'wingspan',
    playersMin: 1,
    playersMax: 5,
    timeMin: 40,
    timeMax: 70,
  },
  {
    id: 2,
    publisherId: 1,
    name: 'Pandemic',
    subtitle: '',
    price: 50,
    description:
      'Your team of experts must prevent the world from succumbing to a viral pandemic.',
    image: 'pandemic',
    playersMin: 2,
    playersMax: 4,
    timeMin: 45,
    timeMax: 45,
  },
  {
    id: 3,
    publisherId: 4,
    name: 'Legends of Andor',
    subtitle: '',
    price: 50,
    description:
      'A group of heroes carefully executes the defense of a besieged kingdom.',
    image: 'andor',
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 90,
  },
  {
    id: 4,
    publisherId: 3,
    name: 'Azul',
    subtitle: '',
    price: 50,
    description:
      'Artfully embellish the walls of your palace by drafting the most beautiful tiles.',
    image: 'azul',
    playersMin: 2,
    playersMax: 4,
    timeMin: 30,
    timeMax: 45,
  },
  {
    id: 5,
    publisherId: 5,
    name: 'Clank!',
    subtitle: 'A Deck-Building Adventure',
    price: 50,
    description:
      "Claim your treasures but don't attract the dragon in this deck-building dungeon race.",
    image: 'clank',
    playersMin: 2,
    playersMax: 4,
    timeMin: 30,
    timeMax: 60,
  },
  {
    id: 6,
    publisherId: 4,
    name: 'The Crew',
    subtitle: 'The Quest for Planet Nine',
    price: 50,
    description:
      'Go on a planet-discovering space mission in this cooperative trick-taking game.',
    image: 'crew',
    playersMin: 2,
    playersMax: 5,
    timeMin: 20,
    timeMax: 20,
  },
  {
    id: 7,
    publisherId: 6,
    name: 'Robinson Crusoe',
    subtitle: 'Adventures on the Cursed Island',
    price: 50,
    description:
      'Work together — with friends or with Friday — to survive on a deserted island.',
    image: 'robinson',
    playersMin: 1,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
  {
    id: 8,
    publisherId: 7,
    name: 'T.I.M.E. Stories',
    subtitle: '',
    price: 50,
    description:
      'Protect the world from paradoxes with your team of time-traveling agents.',
    image: 'timestories',
    playersMin: 2,
    playersMax: 4,
    timeMin: 90,
    timeMax: 90,
  },
  {
    id: 9,
    publisherId: 6,
    name: 'Detective',
    subtitle: 'A Modern Crime Board Game',
    price: 50,
    description:
      'Use modern tools and become Antares Detectives solving the most difficult cases.',
    image: 'detective',
    playersMin: 1,
    playersMax: 5,
    timeMin: 120,
    timeMax: 180,
  },
  {
    id: 10,
    publisherId: 8,
    name: 'Above and Below',
    subtitle: '',
    price: 50,
    description:
      'Build your newly founded village above while exploring the caves and stories below.',
    image: 'above',
    playersMin: 2,
    playersMax: 4,
    timeMin: 90,
    timeMax: 90,
  },
];

exports.up = async function (sql) {
  console.log("Inserting into table 'game'...");
  for (const game of games) {
    await sql`
      INSERT INTO game
        (id, publisher_id, name, subtitle, price, description, image, players_min, players_max, time_min, time_max)
      VALUES
        (${game.id}, ${game.publisherId}, ${game.name}, ${game.subtitle}, ${game.price}, ${game.description}, ${game.image}, ${game.playersMin}, ${game.playersMax}, ${game.timeMin}, ${game.timeMax});
		`;
  }
};

exports.down = async function (sql) {
  console.log("Deleting from table 'game'...");
  for (const game of games) {
    await sql`
			DELETE FROM
				game
			WHERE
        id = ${game.id} AND publisher_id = ${game.publisherId} AND name = ${game.name} AND subtitle = ${game.subtitle} AND price = ${game.price} AND description = ${game.description} AND image = ${game.image} AND players_min = ${game.playersMin} AND players_max = ${game.playersMax} AND time_min = ${game.timeMin} AND time_max = ${game.timeMax};
		`;
  }
};
