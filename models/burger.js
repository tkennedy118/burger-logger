const orm = require('../config/orm');

const table = "burgers";
const burger = {
    all: function() {
        return orm.selectAll(table);
    },

    insertOne: function(col, val) {
        return orm.insertOne(table, col, val);
    },

    updateOne: function(col, val, cond) {
        return orm.updateOne(table, col, val, cond);
    }
}

module.exports = burger;