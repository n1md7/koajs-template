import {INTEGER, STRING} from "sequelize";
import mysqlSequelize from "../Sequelize";

export default mysqlSequelize.define("users", {
    id: {
        type: INTEGER({decimals: 11}),
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: STRING(32),
        allowNull: false,
        unique: true
    },
    firstName: {
        type: STRING(32),
        allowNull: false
    },
    lastName: {
        type: STRING(32)
    }
}, {
    tableName: 'users',
    timestamps: false
});