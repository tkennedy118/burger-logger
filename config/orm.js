const connection = require('./connection');
const util = require('util');

connection.query = util.promisify(connection.query).bind(connection);

const orm = {

    selectAll: function() {
        const query = `SELECT * FROM burgers`;
        const result = connection.query(query);

        if (!result) throw new Error("Could not retrieve burger information");
        return result;
    },

    insertOne: function(burger) {
        const query = `INSERT INTO burgers (burger_name) VALUES ('${burger}')`;
        const result = connection.query(query);

        if (!result) throw new Error("Could not add burger to table");
        console.log(`Added ${result.affectedRows} row`);
        return result;
    },

    updateOne: function(burger, id) {
        const query = `UPDATE burgers SET burger_name = '${burger} WHERE id = ${id}`;
        const result = connection.query(query);

        if (!result) throw new Error("Could not update burger");
        console.log(`Updated ${result.changedRows} row`);
        return result;
    }
}

module.exports = orm;