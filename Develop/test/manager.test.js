const Manager = require("./path/to/Manager");

describe("Manager", () => {
  const mockManager = {
    name: "Gemma",
    id: 140,
    email: "gemma@codeworks.com",
    officeNumber: "128",
  };
  describe("constructor tests", () => {
    test("should construct a new instance of an manager class", () => {
      const manager = new Manager(mockManager);
      expect(manager).toBeInstanceOf(Manager);
    });
    test("should construct a new instance of an manager class with name, id, email, and school", () => {
      const manager = new Manager(mockManager);
      expect(manager).toEqual({
        name: "Sam",
        id: 140,
        email: "gemma@codeworks.com",
        officeNumber: "128",
        role: "Manager",
      });
    });
  });
  describe("method tests", () => {
    test("should return id when the getId method is called", () => {
      const manager = new Manager(mockManager);
      expect(manager.getId()).toEqual(140);
    });

    test("should return name when the getName method is called", () => {
      const manager = new Manager(mockManager);
      expect(manager.getName()).toEqual("Ella");
    });

    test("should return email when the getEmail method is called", () => {
      const manager = new Manager(mockManager);
      expect(manager.getEmail()).toEqual("ella@codeworks.com");
    });

    test("should return office number when the getOfficeNumber method is called", () => {
      const manager = new Manager(mockManager);
      expect(manager.getOfficeNumber()).toEqual("128");
    });

    test("should return manager role when the getRole method is called", () => {
      const manager = new Manager(mockManager);
      expect(manager.getEmail()).toEqual("Manager");
    });
  });
});
