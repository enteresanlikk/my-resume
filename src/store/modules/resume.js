export default {
  namespaced: true,
  state: {
    profile: {
      image: "https://avatars.githubusercontent.com/u/23117378?v=4",
      name: "Bilal Demir",
      title: "Web Developer",
      bio: "He was born in <b>Istanbul</b> in <b>1999</b> and continues to live in Istanbul. He was interested in <b>models</b>, <b>origami</b> and <b>electronic devices</b> until high school and developed projects of his own. He studied <b>Web Programming</b> in high school. He initially worked in the <b>Q/A</b> team where he completed his compulsory internship training in the last year of high school. After graduating from high school, he moved to the software team. During his transition to the software team, he worked as a <b>back-end developer</b>. He won the <b>Computer Programming Department</b> thanks to his high school ranking and continued to work at the same time. He took part as a <b>full stack developer</b> in the initiative of his friend whom he met from university. After completing his associate degree education, he prepared for <b>VPE(DGS)</b> for one year and won the <b>Management Information Systems Department</b>. While completing his undergraduate education, he continued to work in the software team at the same time. He finished his undergraduate education with the <b>first place in the faculty</b> and continued to work in the software team after graduation.<br><u>He still continues to work actively and develop projects.</u>",
      socialMedias: [
        {
          name: "GitHub",
          link: "https://github.com/enteresanlikk",
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/bilaldmr/",
        },
        {
          name: "HackerRank",
          link: "https://www.hackerrank.com/blldemir",
        },
        {
          name: "Codewars",
          link: "https://www.codewars.com/users/enteresanlikk",
        },
      ],
    },
    experiences: [
      {
        company: {
          name: "W3 Digital",
          logo: new URL(
            "@/assets/img/experiences/w3-digital.jpg",
            import.meta.url
          ).href,
        },
        position: "Back-End Developer",
        startDate: "2017/06",
        endDate: null,
        summary:
          "He developed projects with .NET MVC. It made it dynamic by making API connections and database connections to the projects.",
      },
      {
        company: {
          name: "Genjitsu",
          logo: new URL(
            "@/assets/img/experiences/genjitsu.jpg",
            import.meta.url
          ).href,
        },
        position: "Full Stack Developer",
        startDate: "2019/11",
        endDate: "2020/08",
        summary:
          "He worked as a full stack developer in web projects for Genjitsu, a startup.",
      },
      {
        company: {
          name: "W3 Digital",
          logo: new URL(
            "@/assets/img/experiences/w3-digital.jpg",
            import.meta.url
          ).href,
        },
        position: "Q/A Tester",
        startDate: "2016/08",
        endDate: "2017/06",
        summary: "He did the end-user tests and data entry.",
      },
    ],
    educations: [
      {
        school: {
          name: "Altinbas University",
          logo: new URL(
            "@/assets/img/educations/altinbas-university.jpg",
            import.meta.url
          ).href,
        },
        area: "Management Information Systems",
        studyType: "Bachelor's Degree",
        startYear: "2020",
        endYear: "2022",
        gpa: "3.59/4.00",
        note: "He graduated with the first place in the faculty.",
      },
      {
        school: {
          name: "Istanbul University",
          logo: new URL(
            "@/assets/img/educations/istanbul-university.jpg",
            import.meta.url
          ).href,
        },
        area: "Computer Programming",
        studyType: "Associate Degree",
        startYear: "2017",
        endYear: "2019",
        gpa: "3.63/4.00",
        note: null,
      },
      {
        school: {
          name: "Bahcelievler Martyr Osman Yildiz Vocational and Technical Anatolian High School",
          logo: new URL("@/assets/img/educations/meb.jpg", import.meta.url)
            .href,
        },
        area: "Web Programming",
        studyType: "High School",
        startYear: "2013",
        endYear: "2017",
        gpa: "89/100",
        note: "He graduated with first place in the school.",
      },
    ],
    skills: [
      {
        name: "HTML",
        icon: new URL("@/assets/img/skills/html.jpg", import.meta.url).href,
        level: 8,
      },
      {
        name: "CSS",
        children: [
          {
            name: "CSS3",
            icon: new URL("@/assets/img/skills/css3.png", import.meta.url).href,
            level: 7,
          },
          {
            name: "SCSS",
            icon: new URL("@/assets/img/skills/sass.png", import.meta.url).href,
            level: 5,
          },
          {
            name: "Bootstrap",
            icon: new URL("@/assets/img/skills/bootstrap.png", import.meta.url)
              .href,
            level: 5,
          },
        ],
      },
      {
        name: "JavaScript",
        children: [
          {
            name: "Pure JavaScript",
            icon: new URL("@/assets/img/skills/javascript.png", import.meta.url)
              .href,
            level: 8,
          },
          {
            name: "jQuery",
            icon: new URL("@/assets/img/skills/jquery.png", import.meta.url)
              .href,
            level: 5,
          },
          {
            name: "Node.js",
            icon: new URL("@/assets/img/skills/nodejs.png", import.meta.url)
              .href,
            level: 7,
          },
          {
            name: "Vue.js",
            icon: new URL("@/assets/img/skills/vuejs.png", import.meta.url)
              .href,
            level: 6,
          },
        ],
      },
      {
        name: "C#",
        children: [
          {
            name: ".NET MVC",
            icon: new URL("@/assets/img/skills/dotnet-mvc.png", import.meta.url)
              .href,
            level: 8,
          },
          {
            name: ".NET Core",
            icon: new URL(
              "@/assets/img/skills/dotnet-core.png",
              import.meta.url
            ).href,
            level: 6,
          },
        ],
      },
      {
        name: "PHP",
        icon: new URL("@/assets/img/skills/php.png", import.meta.url).href,
        level: 6,
      },
      {
        name: "Database",
        children: [
          {
            name: "MSSQL",
            icon: new URL("@/assets/img/skills/mssql.png", import.meta.url)
              .href,
            level: 5,
          },
          {
            name: "MySQL",
            icon: new URL("@/assets/img/skills/mysql.png", import.meta.url)
              .href,
            level: 5,
          },
          {
            name: "MongoDB",
            icon: new URL("@/assets/img/skills/mongodb.png", import.meta.url)
              .href,
            level: 3,
          },
        ],
      },
      {
        name: "View Engine",
        children: [
          {
            name: "Handlebars",
            icon: new URL("@/assets/img/skills/handlebars.png", import.meta.url)
              .href,
            level: 4,
          },
          {
            name: "Pug",
            icon: new URL("@/assets/img/skills/pug.png", import.meta.url).href,
            level: 5,
          },
          {
            name: "Twig",
            icon: new URL("@/assets/img/skills/twig.png", import.meta.url).href,
            level: 4,
          },
        ],
      },
      {
        name: "CMS",
        children: [
          {
            name: "WordPress",
            icon: new URL("@/assets/img/skills/wordpress.png", import.meta.url)
              .href,
            level: 4,
          },
          {
            name: "Sitecore",
            icon: new URL("@/assets/img/skills/sitecore.png", import.meta.url)
              .href,
            level: 2,
          },
        ],
      },
      {
        name: "Version Control",
        children: [
          {
            name: "GitHub",
            icon: new URL("@/assets/img/skills/github.png", import.meta.url)
              .href,
            level: 6,
          },
          {
            name: "TFS",
            icon: new URL(
              "@/assets/img/skills/azure-devops.png",
              import.meta.url
            ).href,
            level: 6,
          },
          {
            name: "Bitbucket",
            icon: new URL("@/assets/img/skills/bitbucket.png", import.meta.url)
              .href,
            level: 4,
          },
        ],
      },
      {
        name: "Other",
        children: [
          {
            name: "Docker",
            level: 1,
          },
          {
            name: "Dapper",
            level: 1,
          },
          {
            name: "Firebase",
            level: 1,
          },
          {
            name: "Arduino",
            level: 2,
          },
          {
            name: "GraphQL",
            level: 1,
          },
          {
            name: "Nuxt.js",
            level: 1,
          },
          {
            name: "Java",
            level: 2,
          },
          {
            name: "Python",
            level: 2,
          },
          {
            name: "TypeScript",
            level: 3,
          },
          {
            name: "Data Science",
            level: 1,
          },
          {
            name: "Android App Development",
            level: 2,
          },
        ],
      },
    ],
    languages: [
      {
        name: "Turkish - Main",
        flag: new URL("@/assets/img/languages/tr.svg", import.meta.url).href,
        levels: [
          {
            name: "Reading",
            level: 9,
          },
          {
            name: "Writing",
            level: 8,
          },
          {
            name: "Speaking",
            level: 8,
          },
        ],
      },
      {
        name: "English - Elementary",
        flag: new URL("@/assets/img/languages/en.svg", import.meta.url).href,
        levels: [
          {
            name: "Reading",
            level: 5,
          },
          {
            name: "Writing",
            level: 4,
          },
          {
            name: "Speaking",
            level: 4,
          },
        ],
      },
    ],
  },
  getters: {
    getProfile: (state) => state.profile,
    getExperiences: (state) => state.experiences,
    getEducations: (state) => state.educations,
    getSkills: (state) => state.skills,
    getLanguages: (state) => state.languages,
  },
};
