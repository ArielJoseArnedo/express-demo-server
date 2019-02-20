require('dotenv').config()
module.exports = {
    development: {
        host: process.env.DB_HOSTNAME,
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        port: process.env.BD_PORT,
        dialect: "postgres",
        schema: "public",
        logging: process.env.DB_LOGGING
    },
    heroku: {
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
}