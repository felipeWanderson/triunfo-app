module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'users', // tabela q a coluna vai ser adicionada
      'realtor', // campo adicionado
      {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
        allowNull: false,
      }
    );
  },

  down: (queryInterface) => {
    return queryInterface.removeColumn('users', 'realtor');
  },
};
