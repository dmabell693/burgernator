// dependency
const orm = require("../config/orm");

// insert default values into orm methods
const burger = {
    selectAll: function(callback) {
        orm.selectAll("burgers", function(res) {
            callback(res);
        });
    },

    insertOne: function(cols, vals, callback) {
        orm.insertOne("burgers", cols, vals, function(res) {
            callback(res);
        });
    },

    updateOne: function(objColVals, condition, callback) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            callback(res);
        });
    }
};

module.exports = burger;