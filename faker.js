var faker = require("faker");

function generateCasesStudies(){
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

function generatePosts(){
	var posts = [];
	 for (let i = 0; i <= 20; i++) {
    var id = faker.datatype.uuid();
    var title = faker.lorem.words();
    var location = faker.address.city();
    var picture = `${faker.image.city()}?random=${Math.round(
      Math.random() * 1000
    )}`;
    var description = "";

    Array(10)
      .fill(null)
      .forEach((i) => {
        description = description.concat(" ", faker.lorem.paragraphs());
      });

    posts.push({
      id,
      title,
      location,
      picture,
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
