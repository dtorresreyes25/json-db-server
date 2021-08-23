var faker = require("faker");

function generateCasesStudies() {
  const cases = [];
  for (let i = 0; i <= 100; i++) {
    var random = Math.round(Math.random() * 1000);
    var id = faker.datatype.uuid();
    var title = faker.lorem.words();
    var location = faker.address.city();
    var thumb = `${faker.image.nature(6, 6)}?random=${random}}`;
    var picture = `${faker.image.nature()}?random=${random}}`;
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
      thumb,
      description,
    });
  }
  return cases;
}

function generatePosts() {
  var posts = [];
  for (let i = 0; i <= 100; i++) {
    var random = Math.round(Math.random() * 1000);
    var id = faker.datatype.uuid();
    var title = faker.lorem.words();
    var author = faker.fake("{{name.lastName}}, {{name.firstName}}");
    var location = faker.address.city();
    var date = faker.date.recent();
    var thumb = `${faker.image.city(6, 6)}?random=${random}}`;
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

function generatePodcast() {
  return {
    picture: podcastPicture,
    title: "Game Set Matchup!",
    description:
      "This week on Game Set Matchup, we had the pleasure of chatting to Super Connector, Nathan Kelleher, Co-founder and Director of leading investment firm True Altitude. Tune in to hear more about how Nathan went from working in logistics at the Olympics to co-founding True Altitude, the advice he would give to his younger self, and what it takes to create successful business partnerships",
    episodes: 2,
    date: new Date("8/30/2015"),
    time: 8460,
    social: {
      spotify: "http://www.spotify.com/brahms/",
      apple: "http://www.apple.com/brahms/",
      google: "http://www.google.com/brahms/",
    },
    tracks: [
      {
        id: 1,
        episode: 1,
        title: "Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b",
        picture: podcastPicture,
        time: 2200,
        date: new Date("8/30/2015"),
        url:
          "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3",
        description:
          "This week on Game Set Matchup, we had the pleasure of chatting to Super Connector, Nathan Kelleher, Co-founder and Director of leading investment firm True Altitude. Tune in to hear more about how Nathan went from working in logistics at the Olympics to co-founding True Altitude, the advice he would give to his younger self, and what it takes to create successful business partnerships",
      },
      {
        id: 2,
        episode: 2,
        title: "Franz Schubert's Ständchen - Voice (Clarinet) & Piano",
        picture: podcastPicture,
        time: 3000,
        date: new Date("7/9/2014"),
        url:
          "https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3",
        description:
          "This week on Game Set Matchup, we had the pleasure of chatting to Super Connector, Nathan Kelleher, Co-founder and Director of leading investment firm True Altitude. Tune in to hear more about how Nathan went from working in logistics at the Olympics to co-founding True Altitude, the advice he would give to his younger self, and what it takes to create successful business partnerships",
      },
      {
        id: 3,
        episode: 1,
        title: "Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b",
        picture: podcastPicture,
        time: 2200,
        date: new Date("8/30/2015"),
        url:
          "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3",
        description:
          "This week on Game Set Matchup, we had the pleasure of chatting to Super Connector, Nathan Kelleher, Co-founder and Director of leading investment firm True Altitude. Tune in to hear more about how Nathan went from working in logistics at the Olympics to co-founding True Altitude, the advice he would give to his younger self, and what it takes to create successful business partnerships",
      },
      {
        id: 4,
        episode: 2,
        title: "Franz Schubert's Ständchen - Voice (Clarinet) & Piano",
        picture: "",
        time: 3000,
        date: new Date("7/9/2014"),
        url:
          "https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3",
        description:
          "This week on Game Set Matchup, we had the pleasure of chatting to Super Connector, Nathan Kelleher, Co-founder and Director of leading investment firm True Altitude. Tune in to hear more about how Nathan went from working in logistics at the Olympics to co-founding True Altitude, the advice he would give to his younger self, and what it takes to create successful business partnerships",
      },
      {
        id: 5,
        episode: 1,
        title: "Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b",
        picture: podcastPicture,
        time: 2200,
        date: new Date("8/30/2015"),
        url:
          "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3",
        description:
          "This week on Game Set Matchup, we had the pleasure of chatting to Super Connector, Nathan Kelleher, Co-founder and Director of leading investment firm True Altitude. Tune in to hear more about how Nathan went from working in logistics at the Olympics to co-founding True Altitude, the advice he would give to his younger self, and what it takes to create successful business partnerships",
      },
    ],
  };
}

function generateAPI() {
  const caseStudies = generateCasesStudies();
  const posts = generatePosts();
  const podcast = generatePodcast();
  return { "case-studies": caseStudies, posts, podcast };
}

module.exports = generateAPI;
