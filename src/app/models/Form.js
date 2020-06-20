import Sequelize, { Model } from 'sequelize';

class Form extends Model {
  static init(sequelize) {
    super.init(
      {
        modelo: Sequelize.STRING,
        form_url: Sequelize.STRING,
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.City, { foreignKey: 'city_id', as: 'city' });
    this.belongsTo(models.Type, { foreignKey: 'type_id', as: 'type' });
  }
}

export default Form;
