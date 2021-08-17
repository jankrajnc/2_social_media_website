const dbConnection = require("./db-connection");

// Get all users, sort by ascending IDs.
async function getUsers() {
    const dbResult = await dbConnection.query('SELECT * FROM "user" ORDER BY id ASC;', null);
    return dbResult;
}

// Get a user based on the provided ID.
async function getUser(id) {
    const dbResult = await dbConnection.query('SELECT * FROM "user" WHERE id=$1;', [id]);
    return dbResult;
}

// Create a new user.
async function createUser(userData) {
    ({ username, password } = userData);
    const dbResult = await dbConnection.query('INSERT INTO "user" (username, password) VALUES ($1, $2) RETURNING id;', [username, password]);
    console.log(JSON.stringify(dbResult));
    return dbResult;
}

// Delete a car based on the provided ID.
async function deleteUser(id) {
    const dbResult = await dbConnection.query('DELETE FROM "user" WHERE id=$1;', [id]);
    return dbResult;
}

module.exports = {
    getUsers,
    getUser,
    createUser,
    deleteUser
};
