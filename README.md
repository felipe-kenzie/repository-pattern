
Dependencias: express uuid bcrypt @prisma/client

Dependencias de desenvolvimento: typescript ts-node-dev ts-jest supertest jest @types/uuid @types/jest @types/express @types/bcrypt prisma 


Configurações do projeto

configurações ts.config.json

"lib": ["esnext"],
"sourceMap": true,
"outDir": "dist",
"rootDir": "./", 
"baseUrl": "./src",
"skipDefaultLibCheck": true,
// "strict": true,


configurações jest.config.ts


preset: "ts-jest",
setupFilesAfterEnv: ["<rootDir>/setupTest.ts"],
testEnvironment: "node",
testMatch: ["<rootDir>/src/__tests__/**/*.test.ts"],
verbose: true,