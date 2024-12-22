import { DataTypes } from "sequelize";
import db from "../database/db.js";

const ImageHome = db.define('db_always', {
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
    tableName: 'fotosmediohome',
    timestamps: false
});

export default ImageHome;