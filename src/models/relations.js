import User from "./user.js";
import Fan from "./fan.js";
import Artist from "./artist.js";
import Project from "./project.js";
import Category from "./category.js";

// CONFIGURAR LAS RELACIONES DE LOS MODELOS:

// User - Artist (1:1)
User.hasOne(Artist, { foreignKey: "artist_id" });
Artist.belongsTo(User, { foreignKey: "artist_id" });

// User - Fan (1:1)
User.hasOne(Fan, { foreignKey: "fan_id" });
Fan.belongsTo(User, { foreignKey: "fan_id" });

// Artist - Project (N:M) → artist_has_project
Artist.belongsToMany(Project, { through: "artist_has_project", foreignKey: "artist_id" });
Project.belongsToMany(Artist, { through: "artist_has_project", foreignKey: "project_id" });

// Fan - Project (N:M) → fan_favorites_project
Fan.belongsToMany(Project, { through: "fan_favorites_project", foreignKey: "fan_id" });
Project.belongsToMany(Fan, { through: "fan_favorites_project", foreignKey: "project_id" });

// Fan - Artist (N:M) → fan_follows_artist
Fan.belongsToMany(Artist, { through: "fan_follows_artist", foreignKey: "fan_id" });
Artist.belongsToMany(Fan, { through: "fan_follows_artist", foreignKey: "artist_id" });

// Project - Category (N:M) → project_has_category
Project.belongsToMany(Category, { through: "project_has_category", foreignKey: "project_id" });
Category.belongsToMany(Project, { through: "project_has_category", foreignKey: "category_id" });
