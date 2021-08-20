var faker = require("faker");

function generateCasesStudies() {
  const cases = [];
  for (let i = 0; i <= 20; i++) {
    var id = faker.datatype.uuid();
    var title = faker.lorem.words();
    var location = faker.address.city();
    var picture = `${faker.image.nature()}?random=${Math.round(
      Math.random() * 1000
    )}`;
    var description = "";

    Array(10)
      .fill(null)
      .forEach((i) => {
        description = description.concat(" ", faker.lorem.paragraphs());
      });

    cases.push({
      id,
      title,
      location,
      picture,
      description,
    });
  }
  return cases;
}

function generatePosts() {
  var posts = [];
  for (let i = 0; i <= 20; i++) {
    var random = Math.round(Math.random() * 1000);
    var id = faker.datatype.uuid();
    var title = faker.lorem.words();
    var author = faker.fake("{{name.lastName}}, {{name.firstName}}");
    var location = faker.address.city();
    var date = faker.date.recent();
    var thumb = `${faker.image.city(25, 25)}?random=${random}}`;
    var picture = `${faker.image.city()}?random=${random}}`;
    var description = "";

    Array(10)
      .fill(null)
      .forEach((i) => {
        description = description.concat(" ", faker.lorem.paragraphs());
      });

    posts.push({
      id,
      title,
      author,
      date,
      location,
      picture,
      thumb,
      description,
    });
  }
  return posts;
}

function generateAPI() {
  const caseStudies = generateCasesStudies();
  const posts = generatePosts();
  return { "case-studies": caseStudies, posts };
}

module.exports = generateAPI;
