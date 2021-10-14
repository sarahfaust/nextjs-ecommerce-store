exports.up = async function (sql) {
  console.log("Creating table 'publisher'...");
  await sql`
	CREATE TABLE publisher (
		id integer PRIMARY KEY,
		name VARCHAR(40) NOT NULL,
		website VARCHAR(40) NOT NULL
	);`;
};

exports.down = async function (sql) {
  console.log("Deleting table 'publisher'...");
  await sql`
		DROP TABLE publisher;
	`;
};
