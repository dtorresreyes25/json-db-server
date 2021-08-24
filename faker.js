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

function generatePodcastEpisodes() {
  const mockupTracks = [
    {
      title: "Brahms: St Anthony Chorale - Theme, Two Pianos Op.56b",
      picture:
        "https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/36/8f/43/368f43a6-c97d-f69e-dcae-6c9a3f08b196/mza_3740946593757410045.png/100x100bb.jpg",
      time: 2200,
      date: new Date("8/30/2015"),
      url:
        "https://www.mfiles.co.uk/mp3-downloads/brahms-st-anthony-chorale-theme-two-pianos.mp3",
      description:
        "This week on Game Set Matchup, we had the pleasure of chatting to Super Connector, Nathan Kelleher, Co-founder and Director of leading investment firm True Altitude. Tune in to hear more about how Nathan went from working in logistics at the Olympics to co-founding True Altitude, the advice he would give to his younger self, and what it takes to create successful business partnerships",
    },
    {
      title: "Franz Schubert's Ständchen - Voice (Clarinet) & Piano",
      picture:
        "https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/36/8f/43/368f43a6-c97d-f69e-dcae-6c9a3f08b196/mza_3740946593757410045.png/100x100bb.jpg",
      time: 3000,
      date: new Date("7/9/2014"),
      url:
        "https://www.mfiles.co.uk/mp3-downloads/franz-schubert-standchen-serenade.mp3",
      description:
        "This week on Game Set Matchup, we had the pleasure of chatting to Super Connector, Nathan Kelleher, Co-founder and Director of leading investment firm True Altitude. Tune in to hear more about how Nathan went from working in logistics at the Olympics to co-founding True Altitude, the advice he would give to his younger self, and what it takes to create successful business partnerships",
    },
  ];
  const tracks = Array(50)
    .fill(null)
    .map((_, index) => {
      let oddOrEven = index % 2 === 0;
      return {
        ...mockupTracks[oddOrEven ? 0 : 1],
        id: index,
        episode: index,
      };
    });
  return tracks;
}

function generatePodcastSerie() {
  return {
    picture:
      "https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/36/8f/43/368f43a6-c97d-f69e-dcae-6c9a3f08b196/mza_3740946593757410045.png/100x100bb.jpg",
    title: "Game Set Matchup!",
    description:
      "This week on Game Set Matchup, we had the pleasure of chatting to Super Connector, Nathan Kelleher, Co-founder and Director of leading investment firm True Altitude. Tune in to hear more about how Nathan went from working in logistics at the Olympics to co-founding True Altitude, the advice he would give to his younger self, and what it takes to create successful business partnerships",
    episodes: generatePodcastEpisodes().length,
    date: new Date("8/30/2015"),
    time: 8460,
    social: {
      spotify: "http://www.spotify.com/brahms/",
      apple: "http://www.apple.com/brahms/",
      google: "http://www.google.com/brahms/",
    },
  };
}

function generateAPI() {
  const caseStudies = generateCasesStudies();
  const posts = generatePosts();
  const serie = generatePodcastSerie();
  const episodes = generatePodcastEpisodes();
  return {
    "case-studies": caseStudies,
    posts,
    serie,
    episodes,
  };
}

module.exports = generateAPI;
