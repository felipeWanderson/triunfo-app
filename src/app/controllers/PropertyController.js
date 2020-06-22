import fs from 'fs';
import * as Yup from 'yup';

import Property from '../models/Property';
import Builder from '../models/Builder';
import File from '../models/File';
import City from '../models/City';

import { tmpFolder } from '../../config/multer';

class PropertyController {
  async index(request, response) {
    const property = await Property.findAll({
      attributes: ['id', 'name', 'month', 'table_name'],
      include: [
        {
          model: File,
          as: 'file',
          attributes: ['id', 'path', 'url'],
        },
        {
          model: Builder,
          as: 'builder',
          attributes: ['id', 'name'],
          include: [
            {
              model: City,
              as: 'builderCity',
              attributes: ['id', 'name'],
            },
          ],
        },
      ],
    });

    return response.json(property);
  }

  async store(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      month: Yup.string().required(),
      table_name: Yup.string().required(),
      builder: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation is fails' });
    }
    const { name, month, table_name, builder } = request.body;
    const { originalname, filename: path } = request.file;

    const checkBuilderExist = await Builder.findByPk(builder);

    if (!checkBuilderExist) {
      return response
        .status(400)
        .json({ message: 'Contructor Company not exist.' });
    }
    try {
      const file = await File.create({
        name: originalname,
        path,
      });

      const property = await Property.create({
        name,
        month,
        table_name,
        file_id: file.id,
        builder_id: builder,
      });

      return response.json(property);
    } catch (error) {
      return response.json(error);
    }
  }

  async update(request, response) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      month: Yup.string().required(),
      table_name: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body))) {
      return response.status(400).json({ error: 'Validation is fails' });
    }

    const { id } = request.params;

    const property = await Property.findByPk(id, {
      include: [
        {
          model: File,
          as: 'file',
          attributes: ['id', 'path'],
        },
      ],
    });

    if (!property) {
      return response.status(400).json({ message: 'this property not exist.' });
    }

    const { name, month, table_name } = request.body;
    const { originalname, filename: path } = request.file;

    if (name && name !== property.name) {
      const propertyExists = await Property.findOne({
        where: { name },
      });

      if (propertyExists) {
        return response.status(400).json({ error: 'property already Exist' });
      }
    }

    if (month && month !== property.month) {
      const propertyExists = await Property.findOne({ where: { month } });

      if (propertyExists) {
        return response.status(400).json({
          error: 'you cannot register two tables from the same month.',
        });
      }
    }

    const file = await File.create({
      name: originalname,
      path,
    });
    const filePath = `${tmpFolder}\\${property.file.path}`;

    await File.destroy({
      where: { id: property.file.id },
    });

    await fs.promises.unlink(filePath);

    const { file_id, builder_id } = await property.update({
      ...request.body,
      file_id: file.id,
    });

    return response.json({
      name,
      month,
      table_name,
      file_id,
      builder_id,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    const property = await Property.findByPk(id, {
      include: [
        {
          model: File,
          as: 'file',
          attributes: ['id', 'path'],
        },
      ],
    });

    if (!property) {
      return response.status(400).json({ message: 'Property not exits' });
    }

    const filePath = `${tmpFolder}\\${property.file.path}`;

    await Property.destroy({
      where: { id: property.id },
    });

    await File.destroy({
      where: { id: property.file.id },
    });

    await fs.promises.unlink(filePath);

    return response.send();
  }
}

export default new PropertyController();
