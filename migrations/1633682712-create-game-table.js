exports.up = async function (sql) {
  console.log("Creating table 'game'...");
  await sql`
	CREATE TABLE game (
		id integer PRIMARY KEY,
		publisher_id INT NOT NULL,
		name VARCHAR(20) NOT NULL,
		subtitle VARCHAR(40),
		description VARCHAR(200) NOT NULL,
		image VARCHAR(15) NOT NULL,
		price INT NOT NULL,
		players_max INT,
		players_min INT,
		time_min INT,
		time_max INT,
		age_min INT,
		age_max INT,
		points_luck INT,
		points_strategy INT,
		points_fun INT,
		points_difficulty INT,
		points_communication INT);
	`;
};

exports.down = async function (sql) {
  console.log("Deleting table 'game'...");
  await sql`
		DROP TABLE game;
	`;
};
