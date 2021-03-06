const connection = require('./connection');
const util = require('util');

connection.query = util.promisify(connection.query).bind(connection);

const orm = {

    selectAll: async function(table) {
        const query = `SELECT * FROM ${table}`;
        const result = await connection.query(query);

        if (!result) throw new Error("Could not retrieve burger information");
        return result;
    },

    insertOne: async function(table, col, val) {
        const query = `INSERT INTO ${table} (${col}) VALUES ('${val}')`;
        const result = await connection.query(query);

        if (!result) throw new Error("Could not add burger to table");
        console.log(`Added ${result.affectedRows} row`);
        return result;
    },

    updateOne: async function(table, col, val, cond) {

        const query = `UPDATE ${table} SET ${col} = ${val} WHERE ${cond}`;
        const result = await connection.query(query);

        if (!result) throw new Error("Could not update burger");
        console.log(`Updated ${result.changedRows} row`);
        return result;
    }
}

module.exports = orm;