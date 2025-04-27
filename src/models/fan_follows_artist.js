import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

// Modelo de la tabla Fan_follows_artist
const Fan_follows_artist = connection.define("fan_follows_artist", {
    fan_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    artist_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
})

export default Fan_follows_artist;