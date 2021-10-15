const categories = [
  { kind: 'Adventure' },
  { kind: 'Abstract' },
  { kind: 'Campaign' },
  { kind: 'Dungeon Crawler' },
  { kind: 'Deduction' },
  { kind: 'Mystery/Murder' },
  { kind: 'Card Game' },
  { kind: 'Sceince Fiction' },
  { kind: 'Time Travel' },
  { kind: 'Strategy' },
  { kind: 'Fantasy' },
  { kind: 'Exploration' },
];

exports.up = async function (sql) {
  console.log("Inserting into table 'designer'...");
  for (const category of categories) {
    await sql`
      INSERT INTO category
        (kind)
      VALUES
        (${category.kind});
		`;
  }
};

exports.down = async function (sql) {
  console.log("Deleting from table 'category'...");
  for (const category of categories) {
    await sql`
			DELETE FROM
				category
			WHERE
				kind = ${category.kind};
		`;
  }
};
