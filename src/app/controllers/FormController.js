import Form from '../models/Form';
import Type from '../models/Types';
import City from '../models/City';

class FormController {
  async index(request, response) {
    const form = await Form.findAll({
      attributes: ['id', 'modelo', 'form_url'],
      include: [
        {
          model: Type,
          attributes: ['name'],
        },
        {
          model: City,
          attributes: ['name'],
        },
      ],
    });
    return response.json(form);
  }

  async show(request, response) {
    const { city, type } = request.query;

    const form = await Form.findAll({
      where: { CityId: city, TypeId: type },
      attributes: ['id', 'modelo', 'form_url'],
    });

    return response.json(form);
  }

  async store(request, response) {
    const { modelo, form_url, TypeId, CityId } = request.body;

    const form = await Form.create({
      modelo,
      form_url,
      TypeId,
      CityId,
    });

    return response.json(form);
  }
}

export default new FormController();
