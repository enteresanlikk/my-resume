export default {
  namespaced: true,
  state: {
    profile: {
      image: "https://avatars.githubusercontent.com/u/23117378?v=4",
      name: "Bilal Demir",
      title: "Web Developer",
      bio: "He was born in Istanbul in 1999 and continues to live in Istanbul. He graduated from high school Web Programming, Istanbul University Computer Programming and Altinbas University Management Information Systems. Developed web applications using C#, PHP and JavaScript. He continues to develop professionally with .NET MVC. He is also working on Node.js and Vue.js. He developed projects on payment systems. As a hobby, he likes to test himself by solving questions on HackerRank and Codewars.",
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
        startDate: "06-2017",
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
        startDate: "11-2019",
        endDate: "08-2020",
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
        startDate: "08-2016",
        endDate: "06-2017",
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
            level: 4,
          },
          {
            name: "Microservices",
            level: 3,
          },
          {
            name: "Azure Service Bus",
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
    certificates: [
      {
        company: {
          name: "Udemy",
          logo: new URL(
            "@/assets/img/certificates/udemy.jpg",
            import.meta.url
          ).href,
        },
        name: ".NET Core Microservices - The Complete Guide (.NET 6 MVC)",
        date: "01-2022",
        link: "https://www.udemy.com/certificate/UC-d6cbe7f5-1abf-40f1-8270-043a17cdb402/",
        uniqueId: "UC-d6cbe7f5-1abf-40f1-8270-043a17cdb402",
      },
      {
        company: {
          name: "Udemy",
          logo: new URL(
            "@/assets/img/certificates/udemy.jpg",
            import.meta.url
          ).href,
        },
        name: "A'dan Z'ye Docker",
        date: "12-2022",
        link: "https://www.udemy.com/certificate/UC-523b496c-2bbf-4b0e-abb4-7b5b0aa0568a/",
        uniqueId: "UC-523b496c-2bbf-4b0e-abb4-7b5b0aa0568a",
      },
      {
        company: {
          name: "Udemy",
          logo: new URL(
            "@/assets/img/certificates/udemy.jpg",
            import.meta.url
          ).href,
        },
        name: "Secure .Net Microservices with IdentityServer4 OAuth2,OpenID",
        date: "12-2022",
        link: "https://www.udemy.com/certificate/UC-9c110899-f022-4524-a0f3-8b75b8b00b5d/",
        uniqueId: "UC-9c110899-f022-4524-a0f3-8b75b8b00b5d",
      },
      {
        company: {
          name: "Altinbas University",
          logo: new URL(
            "@/assets/img/certificates/altinbas-university.jpg",
            import.meta.url
          ).href,
        },
        name: "Bilişim Sektöründe Sistem Mühendisliği",
        date: "05-2022",
        link: "",
        uniqueId: "UN_041095516000013333",
      },
      {
        company: {
          name: "Udemy",
          logo: new URL(
            "@/assets/img/certificates/udemy.jpg",
            import.meta.url
          ).href,
        },
        name: "Kurumsal Mimariler İçin Sql Server Veri Tabanı Tasarımı",
        date: "10-2019",
        link: "https://www.udemy.com/certificate/UC-M6691FD9/",
        uniqueId: "UC-M6691FD9",
      },
      {
        company: {
          name: "Udemy",
          logo: new URL(
            "@/assets/img/certificates/udemy.jpg",
            import.meta.url
          ).href,
        },
        name: "Corso MongoDB: basi del database no-sql più usato al mondo",
        date: "05-2018",
        link: "https://www.udemy.com/certificate/UC-ZYR3Q2P2/",
        uniqueId: "UC-ZYR3Q2P2",
      },
      {
        company: {
          name: "Udemy",
          logo: new URL(
            "@/assets/img/certificates/udemy.jpg",
            import.meta.url
          ).href,
        },
        name: "JavaScript Essentials 2020 Mini Course",
        date: "04-2018",
        link: "https://www.udemy.com/certificate/UC-CAI1TOJH/",
        uniqueId: "UC-CAI1TOJH",
      },
      {
        company: {
          name: "Udemy",
          logo: new URL(
            "@/assets/img/certificates/udemy.jpg",
            import.meta.url
          ).href,
        },
        name: "Sıfırdan Her Yönüyle JavaScript & Node.JS",
        date: "02-2018",
        link: "https://www.udemy.com/certificate/UC-3Z0MKK9I/",
        uniqueId: "UC-3Z0MKK9I",
      },
      {
        company: {
          name: "Bilgeİş",
          logo: new URL(
            "@/assets/img/certificates/bilgeis.jpg",
            import.meta.url
          ).href,
        },
        name: "Web Tasarımının Temelleri HTML ve CSS",
        date: "09-2017",
        link: "",
        uniqueId: "f6c8b5e0-96f0-11e7-baa3-2940c4eefe90",
      },
      {
        company: {
          name: "HackerRank",
          logo: new URL(
            "@/assets/img/certificates/hackerrank.jpg",
            import.meta.url
          ).href,
        },
        name: "All Certificates",
        date: "",
        link: "https://www.hackerrank.com/certificates/4eb7e7787172",
      }
    ],
  },
  getters: {
    getProfile: (state) => state.profile,
    getExperiences: (state) => state.experiences,
    getEducations: (state) => state.educations,
    getSkills: (state) => state.skills,
    getLanguages: (state) => state.languages,
    getCertificates: (state) => state.certificates,
  },
};
