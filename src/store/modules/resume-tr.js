export default {
  namespaced: true,
  state: {
    profile: {
      image: "https://avatars.githubusercontent.com/u/23117378?v=4",
      name: "Bilal Demir",
      title: "Full Stack Developer",
      bio: "<b>1999</b> yılında <b>İstanbul</b>’da doğdu ve İstanbul’da yaşamaya devam ediyor. Liseye kadar <b>maketlere</b>, <b>origamilere</b> ve <b>elektronik aletlere</b> ilgi duydu ve bunlarla ilgili kendi çapında projeler geliştirdi. Lisede <b>Web Programcılığı Bölümü</b>nü okudu. Lise son sınıftaki zorunlu staj eğitimini gördüğü yerde başlangıçta <b>Q/A</b> ekibinde çalıştı. Liseden mezun olduktan sonra yazılım ekibine geçiş yaptı. Yazılım ekibine geçiş yaptığı dönemde <b>back-end geliştirici</b> olarak çalıştı. Lisedeki <b>okul birinciliği</b> sayesinde <b>Bilgisayar Programcılığı Bölümü</b>nü kazandı ve aynı zamanda çalışmaya devam etti. Üniversiteden tanıştığı arkadaşının girişiminde <b>full stack geliştirici</b> olarak görev aldı. Ön lisans eğitimini tamamladıktan sonra bir sene <b>DGS</b>’ye hazırlandı ve <b>Yönetim Bilişim Sistemleri Bölümü</b>nü kazandı. Lisans eğitimini tamamlerken aynı anda yazılım ekibinde çalışmaya devam etti. Lisans eğitimini <b>fakülte birinciliği</b> ile bitirdi ve mezuniyet sonrası yazılım ekibinde çalışmaya devam etti.<br /> <u>Hala aktif olarak çalışmaya ve projeler geliştirmeye devam etmekte</u>.",
      socialMedias: [
        {
          name: "GitHub",
          link: "https://github.com/enteresanlikk",
        },
        {
          name: "LinkedIn",
          link: "https://www.linkedin.com/in/bilaldmr/",
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
        position: "Back-End Geliştirici",
        startDate: "2017/06",
        endDate: null,
        summary:
          ".NET MVC ile projeler geliştirdi. Projelere API bağlantıları ve veri tabanı bağlantıları yaparak dinamik hale getirdi.",
      },
      {
        company: {
          name: "Genjitsu",
          logo: new URL(
            "@/assets/img/experiences/genjitsu.jpg",
            import.meta.url
          ).href,
        },
        position: "Full Stack Geliştirici",
        startDate: "2019/11",
        endDate: "2020/08",
        summary:
          "Bir girişim olan Genjitsu için web projelerinde full stack geliştirici olarak görev aldı.",
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
        summary: "Son kullanıcı testlerini ve veri girişlerini yaptı.",
      },
    ],
    educations: [
      {
        school: {
          name: "Altınbaş Üniversitesi",
          logo: new URL(
            "@/assets/img/educations/altinbas-university.jpg",
            import.meta.url
          ).href,
        },
        area: "Yönetim Bilişim Sistemleri",
        studyType: "Lisans",
        startYear: "2020",
        endYear: "2022",
        gpa: "3.59/4.00",
        note: "Fakülte birinciliği ile mezun oldu",
      },
      {
        school: {
          name: "İstanbul Üniversitesi",
          logo: new URL(
            "@/assets/img/educations/istanbul-university.jpg",
            import.meta.url
          ).href,
        },
        area: "Bilgisayar Programcılığı",
        studyType: "Ön Lisans",
        startYear: "2017",
        endYear: "2019",
        gpa: "3.63/4.00",
        note: null,
      },
      {
        school: {
          name: "Bahçelievler Şehit Osman Yıldız Mesleki ve Teknik Anadolu Lisesi",
          logo: new URL("@/assets/img/educations/meb.jpg", import.meta.url)
            .href,
        },
        area: "Web Programcılığı",
        studyType: "Lise",
        startYear: "2013",
        endYear: "2017",
        gpa: "89/100",
        note: "Okul birinciliği ile mezun oldu",
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
            name: "CQRS",
            level: 2,
          },
          {
            name: "MediatR",
            level: 2,
          },
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
            level: 2,
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
            level: 3,
          },
          {
            name: "TypeScript",
            level: 4,
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
