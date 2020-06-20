import Type from '../models/Types';

class TypeController {
  async index(request, response) {
    const type = await Type.findAll({
      attributes: ['id', 'name'],
    });
    return response.json(type);
  }

  async store(request, response) {
    const { name } = request.body;

    const checkIfExists = await Type.findOne({
      where: { name },
    });

    if (checkIfExists) {
      return response.status(400).json({ error: 'this type already exists.' });
    }

    const type = await Type.create({
      name,
    });

    return response.json(type);
  }

  async update(request, response) {
    const { id } = request.params;

    const type = await Type.findByPk(id);

    if (!type) {
      return response.status(400).json({ message: 'this type not exists.' });
    }

    const { name } = request.body;

    if (name !== type.name) {
      const typeExist = await Type.findOne({ where: { name } });

      if (typeExist) {
        return response.status(400).json({ error: 'this type already exist' });
      }
    }

    await type.update(request.body);

    return response.json({
      id,
      name,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    const type = await Type.findByPk(id);

    if (!type) {
      return response.status(400).json({ message: 'type not exists.' });
    }

    await type.destroy({
      where: { id },
    });

    return response.status(204).send();
  }
}

export default new TypeController();
