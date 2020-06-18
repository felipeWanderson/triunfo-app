import Sequelize, { Model } from 'sequelize';

class Form extends Model {
  static init(sequelize) {
    super.init(
      {
        modelo: Sequelize.STRING,
        month: Sequelize.STRING,
        table_name: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Builder, { foreignKey: 'builder_id', as: 'builder' });
    this.belongsTo(models.File, { foreignKey: 'File_id', as: 'file' });
  }
}

export default Form;
