import Builder from '../models/Builder';
import City from '../models/City';

class BuilderController {
  async index(request, response) {
    const builder = await Builder.findAll({
      attributes: ['id', 'name'],
      include: [
        {
          model: City,
          as: 'builderCity',
          attributes: ['id', 'name'],
        },
      ],
    });
    return response.json(builder);
  }

  async show(request, response) {
    const { city } = request.query;

    const builder = await Builder.findAll({
      where: { city_id: city },
      attributes: ['id', 'name'],
      include: [
        {
          model: City,
          as: 'builderCity',
          attributes: ['id', 'name'],
        },
      ],
    });

    return response.json(builder);
  }

  async store(request, response) {
    const { name, builderCity } = request.body;

    const builder = await Builder.create({
      name,
      city_id: builderCity,
    });

    return response.json(builder);
  }

  async update(request, response) {
    const { id } = request.params;

    const builder = await Builder.findByPk(id);

    if (!builder) {
      return response
        .status(400)
        .json({ message: 'Constructor company not exists.' });
    }

    const { name } = request.body;

    if (name !== builder.name) {
      const builderExists = await Builder.findOne({ where: { name } });

      if (builderExists) {
        return response
          .status(400)
          .json({ error: 'this constructor company already exist' });
      }
    }

    await builder.update(request.body);

    return response.json({
      id,
      name,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    await Builder.destroy({
      where: { id },
    });

    return response.status(204).send();
  }
}

export default new BuilderController();
