import request from "supertest";

import { app } from "../app";
import { UsersRepository } from "../repositories/implementations/UsersRepository";

describe("[POST] /users", () => {
  test("should be able to create new users", async () => {
    const response = await request(app)
      .post("/users")
      .send({
        name: "John Doe",
        email: "john.doe@example.com",
      })
      .expect(201);

    expect(response.body).toMatchObject({
      name: "John Doe",
      email: "john.doe@example.com",
      admin: false,
    });
  });

  test("should not be able to create new users when email is already taken", async () => {
    const response = await request(app)
      .post("/users")
      .send({
        name: "John Doe",
        email: "john.doe@example.com",
      })
      .expect(400);

    expect(response.body.error).toBeTruthy();
  });
});

describe("[GET] /users", () => {
  it("should be able to list all users", async () => {
    const usersRepository = UsersRepository.getInstance();

    const user1 = await usersRepository.create({
      name: String(Math.random()),
      email: String(Math.random()),
    });

    const user2 = await usersRepository.create({
      name: String(Math.random()),
      email: String(Math.random()),
    });

    const user3 = await usersRepository.create({
      name: String(Math.random()),
      email: String(Math.random()),
    });

    const response = await request(app).get("/users");

    expect(
      response.body
        .filter(
          (res) =>
            res.id === user1.id || res.id === user2.id || res.id === user3.id
        )
        .map((res) => ({
          ...res,
          created_at: new Date(res.created_at),
          updated_at: new Date(res.updated_at),
        }))
    ).toEqual([{ ...user1, admin: false }, user2, user3]);
  });
});
