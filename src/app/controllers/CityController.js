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
}

export default new CityController();
