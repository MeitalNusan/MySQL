import { DataTypes } from "sequelize";
import db from "../database/db.js";

const Fila = db.define('db_always', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    data: {
        type: DataTypes.BLOB('long'),
        allowNull: false
    }
}, {
    tableName: 'fila',
    timestamps: false
});

export default Fila;
