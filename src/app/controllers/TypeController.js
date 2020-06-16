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
}

export default new TypeController();
