"use strict";

const Permission = require("../models/Permission").Permission;

function getAllPermissions (context) {
    return function* () {
        let allPermissions = new Map();

        let pers = yield Permission.findAll();
        pers.forEach(value => allPermissions.set(value.name, value.id));

        this.allPermissions = allPermissions;
    }.bind(context)();
}

module.exports = getAllPermissions;
