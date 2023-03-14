import { Sequelize } from "sequelize";
import { sequelize } from "../db/index.js";

export const Weather = sequelize.define(
  //
  "weather",
  {
    // SETTING UP COLUMNS
    // - PRIMARY KEY
    // - COLUMN TYPES
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    temp: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    conditions: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  // RENAMING THE AUTO GENERATED COLUMNS
  {
    updatedAt: "updated_at",
    createdAt: "created_at",
  }
);
