const mechanisms = [
  { kind: 'Deckbuilding' },
  { kind: 'Cooperative' },
  { kind: 'Worker Placement' },
  { kind: 'Area Movement' },
  { kind: 'Engine Building' },
  { kind: 'Dice Rolling' },
  { kind: 'Set Collection' },
  { kind: 'Trick Winning' },
  { kind: 'Tile Placement' },
  { kind: 'Storytelling' },
  { kind: 'Variable Player Powers' },
  { kind: 'Action Points' },
];

exports.up = async function (sql) {
  console.log("Inserting into table 'mechanism'...");
  for (const mechanism of mechanisms) {
    await sql`
      INSERT INTO mechanism
        (kind)
      VALUES
        (${mechanism.kind});
		`;
  }
};

exports.down = async function (sql) {
  console.log("Deleting from table 'mechanism'...");
  for (const mechanism of mechanisms) {
    await sql`
			DELETE FROM
				mechanism
			WHERE
				kind = ${mechanism.kind};
		`;
  }
};
