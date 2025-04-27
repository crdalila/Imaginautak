import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

// Modelo de la tabla Artist
const Artist = connection.define("artist", {
    artist_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
    },
    artistic_name: {
        type: DataTypes.STRING(45),
        allowNull: false,
        unique: true,
    },
    bio: {
        type: DataTypes.STRING(300),
        allowNull: false,
    },
    website:{
        type: DataTypes.STRING(45),
    },
    social_media_01:{
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    social_media_02:{
        type: DataTypes.STRING(45),
    },
    img: {
        type: DataTypes.STRING(250),
        allowNull: false,
    },
})

export default Artist;