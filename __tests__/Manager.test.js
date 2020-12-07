const Manager = require("../lib/Manager");

describe("Manager", () => {
  it("should be a Manager class", () => {
    const manager = new Manager();
    expect(manager).toBeInstanceOf(Manager);
  });
});
