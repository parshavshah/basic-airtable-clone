const { sequelize, Sequelize } = require("../models/index");
const DataTypes = Sequelize.DataTypes;

const getTableList = async (req, res) => {
  try {
    const tableList = await sequelize
      .getQueryInterface()
      .showAllSchemas()
      .then((tableObj) => {
        console.log(tableObj);
        return tableObj;
      })
      .catch((err) => {
        console.log("showAllSchemas ERROR", err);
      });

    res.status(201).send(tableList);
  } catch (error) {
    throw error;
  }
};

const createTable = async (req, res) => {
  try {
    const body = req.body;

    const tableName = body.tableName;
    const fields = {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
    };

    body.fields.forEach((field) => {
      if (field.type === "string") {
        fields[field.name] = DataTypes.STRING;
      }
    });

    const result = await await sequelize.queryInterface.createTable(
      "ut_" + tableName,
      fields
    );

    res.status(201).send(result);
  } catch (error) {
    throw error;
  }
};

const showTableInfo = async (req, res) => {
  try {
    const tableName = req.params.table;

    const result = await await sequelize.queryInterface.describeTable(
      "ut_" + tableName
    );

    res.status(200).send(result);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = {
  getTableList,
  createTable,
  showTableInfo,
};
