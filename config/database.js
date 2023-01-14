module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-ceviouh4reb4eatuhi3g-a.oregon-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_udyu'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'PUt2z6z74sCsYZuENWuj9nC2jVaesO2u'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
