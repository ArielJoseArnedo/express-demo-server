'use-strict'
module.exports = {
    development: {
        host: "pellefant.db.elephantsql.com",
        username: "ynqxytyr",
        password: "UG_JD1Uc3evaMF0GIJTOuMct5-ciqgwx",
        database: "ynqxytyr",
        port: "5432",
        dialect: "postgres",
        schema: "public"

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
};