import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

// Modelo de la tabla PROJECT_HAS_CATEGORY
const Project_has_category = connection.define("project_has_category", {
    project_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
    category_id: { 
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        unique: true,
    },
})

export default Project_has_category;