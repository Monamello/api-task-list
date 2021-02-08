module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'taskadmin',
  password: 'taskadmin',
  database: 'tasklist',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
