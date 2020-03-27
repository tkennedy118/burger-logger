const orm = require('../config/orm');

const burger = {
    table: "burgers",

    all: function() {
        return orm.all(table);
    },

    insertOne: function(col) {
        return orm.insertOne(table, col);
    },

    updateOne: function(col, cond) {
        return orm.updateOne(table, col, cond);
    }
}

module.exports = burger;