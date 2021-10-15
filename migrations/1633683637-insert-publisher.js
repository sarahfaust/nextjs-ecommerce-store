const publishers = [
  { name: 'Z-Man Games', website: 'https://www.zmangames.com' },
  { name: 'Stonemaier Games', website: 'https://stonemaiergames.com' },
  { name: 'Next Move Games', website: 'https://www.nextmovegames.com' },
  { name: 'Kosmos', website: 'https://www.kosmos.de' },
  {
    name: 'Renegade Game Studios',
    website: 'https://renegadegamestudios.com',
  },
  { name: 'Portal Games', website: 'https://portalgames.pl/pl' },
  { name: 'Space Cowboys', website: 'https://www.spacecowboys.fr' },
  { name: 'Red Raven Games', website: 'https://www.redravengames.com' },
];

exports.up = async function (sql) {
  console.log("Inserting into table 'publisher'...");
  for (const publisher of publishers) {
    await sql`
      INSERT INTO publisher
        (name, website)
      VALUES
        (${publisher.name}, ${publisher.website});
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
				name = ${publisher.name} AND website = ${publisher.website};
		`;
  }
};
