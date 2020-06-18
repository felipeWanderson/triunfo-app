module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'types',
      [
        {
          name: 'Captação',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Vendedor',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Comprador',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Visita',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('types', null, {});
  },
};
