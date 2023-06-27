const mysql = require("mysql2/promise");

const client = mysql.createPool(process.env.CONNECTION_STRING)

async function selectCustomers() {
    const results = await client.query("SELECT * FROM  user");
    return results[0]
}
async function insertCustomers(username, email, password) {
    const results = await client.query("INSERT INTO user(username,email,password) VALUES(?,?,?)", [username, email, password]);
    return results[0]
}
async function updateCustomers(id, username, email, password) {
    const results = await client.query("UPDATE user SET username=?, email=?,password=? WHERE id=?", [username, email, password, id]);
    return results[0]
}
async function deleteCustomers(id) {
    const results = await client.query("DELETE FROM user WHERE id=?", [id]);
    return results[0]
}
async function findOneCustomers(id) {
    const results = await client.query("SELECT * FROM user WHERE id=?", [id]);
    return results[0]
}

module.exports = { selectCustomers, insertCustomers, updateCustomers, deleteCustomers, findOneCustomers }