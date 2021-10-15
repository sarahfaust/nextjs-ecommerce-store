exports.up = async function (sql) {
  console.log("Creating table 'game_mechanism'...");
  await sql`
	CREATE TABLE game_mechanism (
		game_id INT NOT NULL,
		mechanism_id INT NOT NULL,
		PRIMARY KEY (game_id, mechanism_id)
	);`;
};

exports.down = async function (sql) {
  console.log("Deleting table 'game_mechanism'...");
  await sql`
		DROP TABLE game_mechanism;
	`;
};
