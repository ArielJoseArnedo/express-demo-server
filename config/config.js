'use-strict'
module.exports = {
    development: {
        host: "localhost",
        username: "postgres",
        password: "bdatos",
        database: "ph_man_database",
        port: "5432",
        dialect: "postgres",
        schema: "public"

    },
    //Cuando se despliege en Heroku u otro servidor de base de datos postgres
    heroku:{
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'postgres',
        url: process.env.DB_URL
    },
    test: {
        dialect: "postgres",
    },
    production: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOSTNAME,
        dialect: 'postgres',
        use_env_variable: 'DATABASE_URL'
    }
};