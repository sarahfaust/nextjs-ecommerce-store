const publishers = [
  { name: 'Z-Man Games', website: 'https://www.zmangames.com' },
  { name: 'Stonemaier Games', website: 'https://www.zmangames.com' },
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
