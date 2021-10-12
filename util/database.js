import camelcaseKeys from 'camelcase-keys';
import dotenvSafe from 'dotenv-safe';
import postgres from 'postgres';

// dotenv-safe is a library that can read environment variables
// in the .env file making it possible to connect to PostgreSQL
dotenvSafe.config();

// This piece of code ensures that I connect to the database only once
// by setting the global this to our postgres connection (?)
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    // Heroku needs SSL connections but has an "unauthorized" certificate
    // https://devcenter.heroku.com/changelog-items/852
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    // When we're in development, make sure that we connect only
    // once to the database
    if (!globalThis.__postgresSqlClient) {
      globalThis.__postgresSqlClient = postgres();
    }
    sql = globalThis.__postgresSqlClient;
  }

  return sql;
}

// This connects me to PostgreSQL by invoking the function defined above
const sql = connectOneTimeToDatabase();

export async function getGames() {
  const games = await sql`
    SELECT * FROM game;
  `;
  return games.map((game) => {
    return camelcaseKeys(game);
  });
}

export async function getGame(id) {
  const games = await sql`
    SELECT
      *
    FROM
      game
    WHERE
      id = ${id};
  `;
  return camelcaseKeys(games[0]);
}

// First check to see if database is conndected and works. It works! :)
// sql`SELECT * FROM game;`.then((results) => console.log('results', results));

const mechanisms = {
  deckbuild: 'Deckbuilding',
  coop: 'Cooperative',
  worker: 'Worker Placement',
  area: 'Area Movement',
  engine: 'Engine Building',
  dice: 'Dice Rolling',
  setColl: 'Set Collection',
  trick: 'Trick Winning',
  tile: 'Tile Placement',
  story: 'Storytelling',
  varPower: 'Variable Player Powers',
  action: 'Action Points',
};

const categories = {
  adv: 'Adventure',
  abstract: 'Abstract',
  campaign: 'Campaign',
  dungeon: 'Dungeon Crawler',
  deduction: 'Deduction',
  mystery: 'Mystery/Murder',
  card: 'Card Game',
  scifi: 'Sceince Fiction',
  time: 'Time Travel',
  strategy: 'Strategy',
  fantasy: 'Fantasy',
  explore: 'Exploration',
};

export const games = [
  {
    id: 1,
    name: 'Wingspan',
    category: [categories.strategy],
    mechanism: [
      mechanisms.setColl,
      mechanisms.engine,
      mechanisms.dice,
      mechanisms.action,
    ],
    price: 50,
    description:
      'Attract a beautiful and diverse collection of birds to your wildlife reserve.',
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
  {
    id: 2,
    name: 'Pandemic',
    category: [categories.strategy],
    mechanism: [
      mechanisms.coop,
      mechanisms.varPower,
      mechanisms.setColl,
      mechanisms.action,
    ],
    price: 50,
    description:
      'Your team of experts must prevent the world from succumbing to a viral pandemic.',
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
  {
    id: 3,
    name: 'Legends of Andor',
    category: [categories.adv, categories.campaign],
    mechanism: [mechanisms.coop, mechanisms.area, mechanisms.action],
    price: 50,
    description:
      'A group of heroes carefully executes the defense of a besieged kingdom.',
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
  {
    id: 4,
    name: 'Azul',
    category: [categories.strategy, categories.abstract],
    mechanism: [mechanisms.setColl, mechanisms.tile],
    price: 50,
    description:
      'Artfully embellish the walls of your palace by drafting the most beautiful tiles.',
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
  {
    id: 5,
    name: 'Clank!: A Deck-Building Adventure',
    category: [categories.adv, categories.fantasy],
    mechanism: [mechanisms.coop, mechanisms.deckbuild],
    price: 50,
    description:
      "Claim your treasures but don't attract the dragon in this deck-building dungeon race.",
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
  {
    id: 6,
    name: 'The Crew: The Quest for Planet Nine',
    category: [categories.adv, categories.scifi],
    mechanism: [mechanisms.coop, mechanisms.trick],
    price: 50,
    description:
      'Go on a planet-discovering space mission in this cooperative trick-taking game.',
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
  {
    id: 7,
    name: 'Robinson Crusoe: Adventures on the Cursed Island',
    category: [categories.adv, categories.explore],
    mechanism: [mechanisms.coop, mechanisms.dice, mechanisms.tile],
    price: 50,
    description:
      'Work together — with friends or with Friday — to survive on a deserted island.',
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
  {
    id: 8,
    name: 'T.I.M.E. Stories',
    category: [categories.adv, categories.time, categories.scifi],
    mechanism: [mechanisms.coop, mechanisms.story, mechanisms.dice],
    price: 50,
    description:
      'Protect the world from paradoxes with your team of time-traveling agents.',
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
  {
    id: 9,
    name: 'Detective: A Modern Crime Board Game',
    category: [categories.mystery],
    mechanism: [mechanisms.coop, mechanisms.story],
    price: 50,
    description:
      'Use modern tools and become Antares Detectives solving the most difficult cases.',
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
  {
    id: 10,
    name: 'Above and Below',
    category: [categories.adv, categories.fantasy, categories.explore],
    mechanism: [
      mechanisms.worker,
      mechanisms.dice,
      mechanisms.setColl,
      mechanisms.story,
    ],
    price: 50,
    description:
      'Build your newly founded village above while exploring the caves and stories below.',
    playersMin: 2,
    playersMax: 4,
    timeMin: 60,
    timeMax: 120,
  },
];
