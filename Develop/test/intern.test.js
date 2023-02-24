const Intern = require("../lib/intern.js");

describe("Intern", () => {
  const mockIntern = {
    name: "Sam",
    id: 160,
    email: "sam@codeworks.com",
    school: "University of Kansas",
  };
  describe("constructor tests", () => {
    test("should construct a new instance of an intern class", () => {
      const intern = new Intern(mockIntern);
      expect(intern).toBeInstanceOf(Intern);
    });
    test("should construct a new instance of an intern class with name, id, email, and school", () => {
      const intern = new Intern(mockIntern);
      expect(intern).toEqual({
        name: "Sam",
        id: 160,
        email: "sam@codeworks.com",
        school: "University of Kansas",
        role: "Intern",
      });
    });
  });

  describe("method tests", () => {
    test("should return id when the getId method is called", () => {
      const intern = new Intern(mockIntern);
      expect(intern.getId()).toEqual(160);
    });

    test("should return name when the getName method is called", () => {
      const intern = new Intern(mockIntern);
      expect(intern.getName()).toEqual("Sam");
    });

    test("should return email when the getEmail method is called", () => {
      const intern = new Intern(mockIntern);
      expect(intern.getEmail()).toEqual("sam@codeworks.com");
    });

    test("should return school when the getSchool method is called", () => {
      const intern = new Intern(mockIntern);
      expect(intern.getSchool()).toEqual("University of Kansas");
    });

    test("should return intern role when the getRole method is called", () => {
      const intern = new Intern(mockIntern);
      expect(intern.getRole()).toEqual("Intern");
    });
  });
});
