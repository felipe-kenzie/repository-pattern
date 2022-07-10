import request from "supertest";

import { app } from "../app";
import { createUserService } from "../services";

describe("[POST] /users", () => {
  it("should be able to create new users", async () => {
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

  it("should not be able to create new users when email is already taken", async () => {
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
    const user1 = createUserService.execute({
      name: String(Math.random()),
      email: String(Math.random()),
    });

    const user2 = createUserService.execute({
      name: String(Math.random()),
      email: String(Math.random()),
    });

    const user3 = createUserService.execute({
      name: String(Math.random()),
      email: String(Math.random()),
    });

    const response = await request(app).get("/users").set("user_id", user1.id);

    expect(
      response.body.map((res) => ({
        ...res,
        created_at: new Date(res.created_at),
        updated_at: new Date(res.updated_at),
      }))
    ).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ ...user1, admin: false }),
        user2,
        user3,
      ])
    );
  });
});
