const designers = [
  { firstName: 'Ryan', lastName: 'Laukat' },
  { firstName: 'Elizabeth', lastName: 'Hargrave' },
  { firstName: 'Matt', lastName: 'Leacock' },
  { firstName: 'Michael', lastName: 'Menzel' },
  { firstName: 'Thomas', lastName: 'Sing' },
  { firstName: 'Przemysław', lastName: 'Rymer' },
  { firstName: 'Ignacy', lastName: 'Trzewiczek' },
  { firstName: 'Jakub', lastName: 'Łapot' },
  { firstName: 'Joanna', lastName: 'Kijanka' },
  { firstName: 'Peggy', lastName: 'Chassenet' },
  { firstName: 'Manuel', lastName: 'Rozoy' },
  { firstName: 'Paul', lastName: 'Dennen' },
  { firstName: 'Michael', lastName: 'Kiesling' },
];

exports.up = async function (sql) {
  console.log("Inserting into table 'designer'...");
  for (const designer of designers) {
    await sql`
      INSERT INTO designer
        (first_name, last_name)
      VALUES
        (${designer.firstName}, ${designer.lastName});
		`;
  }
};

exports.down = async function (sql) {
  console.log("Deleting from table 'designer'...");
  for (const designer of designers) {
    await sql`
			DELETE FROM
				designer
			WHERE
				first_name = ${designer.firstName} AND last_name = ${designer.lastName};
		`;
  }
};
