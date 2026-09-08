import 'dotenv/config';
import { definePrismaConfig } from '@prisma/cli-engine';
import { defineConfig as ormConfig } from '@prisma/orm-postgres/config';

type ConfigType = ReturnType<typeof definePrismaConfig>;

const config: ConfigType = definePrismaConfig({
  orm: ormConfig({
    contract: './src/prisma/schema.prisma',
    db: {
      connection: process.env['POSTGRES_URI']!,
    },
  }),
});

export default config;
