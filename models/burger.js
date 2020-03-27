const orm = require('../config/orm');

const burger = {
    table: "burgers",

    all: function() {
        return orm.all(table);
    },

    insertOne: function(col, val) {
        return orm.insertOne(table, col, val);
    },

    updateOne: function(col, val, cond) {
        return orm.updateOne(table, col, val, cond);
    }
}

module.exports = burger;