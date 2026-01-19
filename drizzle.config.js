import 'dotenv/config';

export default {


  schema: './src/models/*.js',
  out: './drizzle',
  tables: ['users'],
  enums: ['user_role'],
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL,
  }
};