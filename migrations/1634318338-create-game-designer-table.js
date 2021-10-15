exports.up = async function (sql) {
  console.log("Creating table 'game_designer'...");
  await sql`
	CREATE TABLE game_designer (
		game_id INT NOT NULL,
		designer_id INT NOT NULL,
		PRIMARY KEY (game_id, designer_id)
	);`;
};

exports.down = async function (sql) {
  console.log("Deleting table 'game_designer'...");
  await sql`
		DROP TABLE game_designer;
	`;
};
