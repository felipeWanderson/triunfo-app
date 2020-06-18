import Sequelize from 'sequelize';

import User from '../app/models/User';
import Form from '../app/models/Form';
import Type from '../app/models/Types';
import City from '../app/models/City';
import File from '../app/models/File';
import Builder from '../app/models/Builder';
import Property from '../app/models/Property';

import databaseConfig from '../config/database';

const models = [User, Form, Type, City, File, Builder, Property];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models)
      );
  }
}

export default new Database();
