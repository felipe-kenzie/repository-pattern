# Repository pattern


## Dependências 

`express uuid bcrypt @prisma/client`

## Dependências de desenvolvimento 

`typescript ts-node-dev ts-jest supertest jest @types/uuid @types/jest @types/express @types/bcrypt prisma` 


## Configurações do projeto


### Configurações adicionais ts.config.json
```
"lib": ["esnext"],
"sourceMap": true,
"outDir": "dist",
"rootDir": "./", 
"baseUrl": "./src",
"skipDefaultLibCheck": true,
comentar "strict": true,
```

### Configurações adicionais jest.config.ts

```
preset: "ts-jest",
setupFilesAfterEnv: ["<rootDir>/setupTest.ts"],
testEnvironment: "node",
testMatch: ["<rootDir>/src/__tests__/**/*.test.ts"],
verbose: true,
```

## Objetivos

 * [] Implementar o usersRepository com um vetor
 * [] Refatorar services
 * [] Refatorar controllers
 * [] Passar em todos os testes com um vetor
 * [] Implementar um banco de dados
 * [] Passar en todos os testes com um banco de dados


### Aplicação dos conceitos

 * [] Repository pattern
 * [] Single-responsibility Principle 
 * [] Liskov Substitution Principle 
 * [] Dependency Inversion Principle


## Prisma

#### Inicar um projeto

`yarn prisma init`

#### Realizar uma migration e subir para o banco

`yarn prisma migrate dev`

#### Abrir o prisma studio

`yarn prisma studio`