const publishers = [
  { id: 1, name: 'Z-Man Games', website: 'https://www.zmangames.com' },
  { id: 2, name: 'Stonemaier Games', website: 'https://stonemaiergames.com' },
  { id: 3, name: 'Next Move Games', website: 'https://www.nextmovegames.com' },
  { id: 4, name: 'Kosmos', website: 'https://www.kosmos.de' },
  {
    id: 5,
    name: 'Renegade Game Studios',
    website: 'https://renegadegamestudios.com',
  },
  { id: 6, name: 'Portal Games', website: 'https://portalgames.pl/pl' },
  { id: 7, name: 'Space Cowboys', website: 'https://www.spacecowboys.fr' },
  { id: 8, name: 'Red Raven Games', website: 'https://www.redravengames.com' },
];

exports.up = async function (sql) {
  console.log("Inserting into table 'publisher'...");
  for (const publisher of publishers) {
    await sql`
      INSERT INTO publisher
        (id, name, website)
      VALUES
        (${publisher.id}, ${publisher.name}, ${publisher.website});
		`;
  }
};

exports.down = async function (sql) {
  console.log("Deleting from table 'publisher'...");
  for (const publisher of publishers) {
    await sql`
			DELETE FROM
				publisher
			WHERE
				id = ${publisher.id} AND name = ${publisher.name} AND website = ${publisher.website};
		`;
  }
};
