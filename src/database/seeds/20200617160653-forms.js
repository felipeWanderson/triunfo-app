module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'forms',
      [
        {
          form_url: 'https://www.123formbuilder.com/form-5438943/',
          type_id: 1,
          city_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          modelo: 'DC Reis',
          form_url: 'https://www.123formbuilder.com/form-5441723/',
          type_id: 2,
          city_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          modelo: 'Francistelmo',
          form_url: 'http://www.123formbuilder.com/form-5450909/form',
          type_id: 2,
          city_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          modelo: 'Raunin',
          form_url: 'http://www.123formbuilder.com/form-5451223/form',
          type_id: 2,
          city_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          modelo: 'DC Reis',
          form_url: 'https://www.123formbuilder.com/form-5441982/',
          type_id: 3,
          city_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          modelo: 'Francistelmo',
          form_url: 'http://www.123formbuilder.com/form-5451209/form',
          type_id: 3,
          city_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          modelo: 'Raunin',
          form_url: 'http://www.123formbuilder.com/form-5451223/form',
          type_id: 3,
          city_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          form_url: 'http://www.123formbuilder.com/form-5455684/form',
          type_id: 4,
          city_id: 1,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          form_url: 'https://www.123formbuilder.com/form-5439061/',
          type_id: 1,
          city_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          form_url: 'https://www.123formbuilder.com/form-5441912/',
          type_id: 2,
          city_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          form_url: 'https://www.123formbuilder.com/form-5439061/',
          type_id: 3,
          city_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          form_url: 'http://www.123formbuilder.com/form-5455846/form',
          type_id: 4,
          city_id: 2,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          form_url: 'https://www.123formbuilder.com/form-5441907/',
          type_id: 1,
          city_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          form_url:
            'http://www.123formbuilder.com/form-5441953/ficha-de-proposta-comprador-fortaleza',
          type_id: 2,
          city_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          form_url:
            'http://www.123formbuilder.com/form-5441953/ficha-de-proposta-comprador-fortaleza',
          type_id: 3,
          city_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          form_url: 'http://www.123formbuilder.com/form-5455845/form',
          type_id: 4,
          city_id: 3,
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('forms', null, {});
  },
};
