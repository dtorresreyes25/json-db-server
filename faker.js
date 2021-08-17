var faker = require("faker");

function generateCaseStudies() {
  var cases = [];
  for (let i = 0; i <= 20; i++) {
    var title = faker.lorem.words();
    var location = faker.address.city();
    var picture = faker.image.city();
    var description = "";

    Array(10)
      .fill(null)
      .forEach((i) => {
        description = description.concat(" ", faker.lorem.paragraphs());
      });

    cases.push({
      title,
      location,
      picture,
      description,
    });
  }
  return { "case-studies": cases };
}

module.exports = generateCaseStudies;
