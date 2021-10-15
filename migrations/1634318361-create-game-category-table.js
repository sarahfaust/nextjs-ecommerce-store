exports.up = async function (sql) {
  console.log("Creating table 'game_category'...");
  await sql`
	CREATE TABLE game_category (
		game_id INT NOT NULL,
		category_id INT NOT NULL,
		PRIMARY KEY (game_id, category_id)
	);`;
};

exports.down = async function (sql) {
  console.log("Deleting table 'game_category'...");
  await sql`
		DROP TABLE game_category;
	`;
};
