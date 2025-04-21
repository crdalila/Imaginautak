import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

// Modelo de la tabla FAN_FOLLOWS_ARTIST
const Fan_follows_artist = connection.define("fan_follows_artists", {
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