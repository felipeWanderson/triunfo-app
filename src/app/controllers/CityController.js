import City from '../models/City';

class CityController {
  async index(request, response) {
    const city = await City.findAll({
      attributes: ['id', 'name', 'icon_url'],
    });
    return response.json(city);
  }

  async store(request, response) {
    const { name, icon_url } = request.body;

    const city = await City.create({
      name,
      icon_url,
    });

    return response.json(city);
  }

  async update(request, response) {
    const { id } = request.params;

    const city = await City.findByPk(id);

    if (!city) {
      return response.status(400).json({ message: 'city not exists.' });
    }

    const { name } = request.body;

    if (name !== city.name) {
      const cityExists = await City.findOne({ where: { name } });

      if (cityExists) {
        return response.status(400).json({ error: 'City already Exist' });
      }
    }

    const { icon_url } = await city.update(request.body);

    return response.json({
      id,
      name,
      icon_url,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    const city = await City.findByPk(id);

    if (!city) {
      return response.status(400).json({ message: 'city not exists.' });
    }

    await City.destroy({
      where: { id },
    });

    return response.status(204).send();
  }
}

export default new CityController();
