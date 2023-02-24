const Intern = require("../lib/engineer.js");

describe("Intern", () => {
  const mockIntern = {
    name: "Ella",
    id: 150,
    email: "ella@codeworks.com",
    github: "www.github.com/ella_codes",
  };
  describe("constructor tests", () => {
    test("should construct a new instance of an Intern class", () => {
      const Intern = new Intern(mockIntern);
      expect(Intern).toBeInstanceOf(Intern);
    });
    test("should construct a new instance of an Intern class with name, id, email, and github profile", () => {
      const Intern = new Intern(mockIntern);
      expect(Intern).toEqual({
        name: "Ella",
        id: 150,
        email: "ella@codeworks.com",
        github: "www.github.com/ella_codes",
        role: "Intern",
      });
    });
  });
  describe("method tests", () => {
    test("should return id when the getId method is called", () => {
      const Intern = new Intern(mockIntern);
      expect(Intern.getId()).toEqual(150);
    });

    test("should return name when the getName method is called", () => {
      const Intern = new Intern(mockIntern);
      expect(Intern.getName()).toEqual("Ella");
    });

    test("should return email when the getEmail method is called", () => {
      const Intern = new Intern(mockIntern);
      expect(Intern.getEmail()).toEqual("ella@codeworks.com");
    });

    test("should return github profile url when the getGithub method is called", () => {
      const Intern = new Intern(mockIntern);
      expect(Intern.getEmail()).toEqual("www.github.com/ella_codes");
    });

    test("should return Intern role when the getRole method is called", () => {
      const Intern = new Intern(mockIntern);
      expect(Intern.getEmail()).toEqual("Intern");
    });
  });
});
