import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

// Modelo de la tabla Fan_favorites_project
const Fan_favorites_project = connection.define("fan_favorites_project", {
    fan_id: {
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

export default Fan_favorites_project;