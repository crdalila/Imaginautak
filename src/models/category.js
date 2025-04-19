import { DataTypes } from "sequelize";
import connection from "../config/sequelize.js";

// Modelo de la tabla Category
const Category = connection.define("category", {
    category_id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        primaryKey: true,
        unique: true,
        autoIncrement: true,
    },
    category_name: {
        type: DataTypes.STRING(80),
        allowNull: false,
    },
})

export default Category;