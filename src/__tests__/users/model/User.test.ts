import { validate } from "uuid";

import { User } from "../../../models/User";

describe("User model", () => {
  it("should be able to create an user with all props", () => {
    const user = new User();

    Object.assign(user, {
      name: "Felipe",
      email: "felipe@mail.com",
      created_at: new Date(),
      updated_at: new Date(),
    });

    expect(user).toMatchObject({
      name: "Felipe",
      email: "felipe@mail.com",
      admin: false,
    });
    expect(user.created_at).toBeInstanceOf(Date);
    expect(user.updated_at).toBeInstanceOf(Date);
    expect(validate(user.id)).toBe(true);
  });
});
