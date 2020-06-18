module.exports = {
  up: (queryInterface) => {
    return queryInterface.bulkInsert(
      'cities',
      [
        {
          name: 'São Luís',
          icon_url: 'https://images2.imgbox.com/e0/f3/XAYk5Lek_o.png',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Forteleza',
          icon_url: 'https://images2.imgbox.com/95/2d/YQY7HiTU_o.png',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Teresina',
          icon_url: 'https://images2.imgbox.com/58/75/vL2Xsk2I_o.png',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface) => {
    return queryInterface.bulkDelete('cities', null, {});
  },
};
