const games = [
  {
    name: 'Wingspan',
    price: 50,
    description:
      'Attract a beautiful and diverse collection of birds to your wildlife reserve.',
    image: 'wingspan',
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
  {
    name: 'Pandemic',
    price: 50,
    description:
      'Your team of experts must prevent the world from succumbing to a viral pandemic.',
    image: 'pandemic',
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
  {
    name: 'Legends of Andor',
    price: 50,
    description:
      'A group of heroes carefully executes the defense of a besieged kingdom.',
    image: 'andor',
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
  {
    name: 'Azul',
    price: 50,
    description:
      'Artfully embellish the walls of your palace by drafting the most beautiful tiles.',
    image: 'azul',
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
  {
    name: 'Clank!: A Deck-Building Adventure',
    price: 50,
    description:
      "Claim your treasures but don't attract the dragon in this deck-building dungeon race.",
    image: 'clank',
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
  {
    name: 'The Crew: The Quest for Planet Nine',
    price: 50,
    description:
      'Go on a planet-discovering space mission in this cooperative trick-taking game.',
    image: 'crew',
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
  {
    name: 'Robinson Crusoe: Adventures on the Cursed Island',
    price: 50,
    description:
      'Work together — with friends or with Friday — to survive on a deserted island.',
    image: 'robinson',
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
  {
    name: 'T.I.M.E. Stories',
    price: 50,
    description:
      'Protect the world from paradoxes with your team of time-traveling agents.',
    image: 'timestories',
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
  {
    name: 'Detective: A Modern Crime Board Game',
    price: 50,
    description:
      'Use modern tools and become Antares Detectives solving the most difficult cases.',
    image: 'detective',
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
  {
    name: 'Above and Below',
    price: 50,
    description:
      'Build your newly founded village above while exploring the caves and stories below.',
    image: 'above',
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
];

exports.up = async function (sql) {
  console.log("Inserting into table 'game'...");
  for (const game of games) {
    await sql`
      INSERT INTO game
        (name, price, description, image)
      VALUES
        (${game.name}, ${game.price}, ${game.description}, ${game.image});
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
				name = ${game.name} AND price = ${game.price} AND description = ${game.description} AND image = ${game.image};
		`;
  }
};
