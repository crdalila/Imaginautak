import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

// Modelo de la tabla Project
const Project = connection.define("project", {
    project_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        Unique: true,
        autoIncrement: true,
    },
    title: {
        type: DataTypes.STRING(45),
        allowNull: false,
    },
    description: {
        type: DataTypes.STRING(500),
        allowNull: false,
    },
    trigger_warnings:{
        type: DataTypes.ENUM("violencia", "abuso", "drogas", "muerte", "salud mental", "enfermedad", "discriminación"),
    },
    project_url:{
        type: DataTypes.STRING(145),
        allowNull: false,
    },
    project_imgs:{
        type: DataTypes.STRING(255),
        allowNull: false,
        defaultValue: "images/placehold_project.png",
    },
    project_video: {
        type: DataTypes.STRING(255),
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: false,
    }
})

export default Project;