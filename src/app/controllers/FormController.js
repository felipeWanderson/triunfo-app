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
          as: 'type',
          attributes: ['name'],
        },
        {
          model: City,
          as: 'city',
          attributes: ['name'],
        },
      ],
    });
    return response.json(form);
  }

  async show(request, response) {
    const { city, type } = request.query;

    const form = await Form.findAll({
      where: { city_id: city, type_id: type },
      attributes: ['id', 'modelo', 'form_url'],
    });

    return response.json(form);
  }

  async store(request, response) {
    const { modelo, form_url, type, city } = request.body;

    const checkCityExists = await City.findByPk(city);

    if (!checkCityExists) {
      return response.status(400).json({ message: 'this city not exists.' });
    }

    const checkTypeExists = await Type.findByPk(type);

    if (!checkTypeExists) {
      return response.status(400).json({ message: 'this type not exists.' });
    }

    const form = await Form.create({
      modelo,
      form_url,
      type_id: type,
      city_id: city,
    });

    return response.json(form);
  }

  async update(request, response) {
    const { id } = request.params;

    const form = await Form.findByPk(id);

    if (!form) {
      return response.status(400).json({ message: 'this form not exists.' });
    }

    const { modelo, form_url } = request.body;

    if (form_url && form_url !== form.form_url) {
      const formExist = await Form.findOne({ where: { form_url } });

      if (formExist) {
        return response.status(400).json({ error: 'this form already exist' });
      }
    }

    await form.update(request.body);

    return response.json({
      id,
      modelo,
      form_url,
    });
  }

  async delete(request, response) {
    const { id } = request.params;

    const form = await Form.findByPk(id);

    if (!form) {
      return response.status(400).json({ message: 'form not exists.' });
    }

    await form.destroy({
      where: { id },
    });

    return response.status(204).send();
  }
}

export default new FormController();
