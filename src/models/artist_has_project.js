import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

// Modelo de la tabla ARTIST_HAS_PROJECT
const Artist_has_project = connection.define("artist_has_project", {
    artist_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    project_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
})

export default Artist_has_project;