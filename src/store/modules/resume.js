export default {
  namespaced: true,
  state: {
    profile: {
      image: "https://avatars.githubusercontent.com/u/23117378?v=4",
      name: "Bilal Demir",
      title: "Web Geliştirici",
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
        company: "W3 Digital",
        position: "Back-End Geliştirici",
        startDate: "2017/06",
        endDate: null,
        summary:
          ".NET MVC ile projeler geliştirdi. Projelere API bağlantıları ve veri tabanı bağlantıları yaparak dinamik hale getirdi.",
      },
      {
        company: "Genjitsu",
        position: "Full Stack Geliştirici",
        startDate: "2019/11",
        endDate: "2020/08",
        summary:
          "Bir girişim olan Genjitsu için web projelerinde full stack geliştirici olarak görev aldı.",
      },
      {
        company: "W3 Digital",
        position: "Q/A Tester",
        startDate: "2016/08",
        endDate: "2017/06",
        summary: "Son kullanıcı testlerini ve veri girişlerini yaptı.",
      },
    ],
    educations: [
      {
        school: "Altınbaş Üniversitesi",
        area: "Yönetim Bilişim Sistemleri",
        studyType: "Lisans",
        startYear: "2020",
        endYear: "2022",
        gpa: "3.59/4.00",
        note: "Fakülte birinciliği ile mezun oldu",
      },
      {
        school: "İstanbul Üniversitesi",
        area: "Bilgisayar Programcılığı",
        studyType: "Ön Lisans",
        startYear: "2017",
        endYear: "2019",
        gpa: "3.63/4.00",
        note: null,
      },
      {
        school:
          "Bahçelievler Şehit Osman Yıldız Mesleki ve Teknik Anadolu Lisesi",
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
        level: 8,
      },
      {
        name: "CSS",
        children: [
          {
            name: "CSS3",
            level: 7,
          },
          {
            name: "SCSS",
            level: 5,
          },
          {
            name: "Bootstrap",
            level: 5,
          },
        ],
      },
      {
        name: "JavaScript",
        children: [
          {
            name: "Pure JavaScript",
            level: 8,
          },
          {
            name: "jQuery",
            level: 5,
          },
          {
            name: "Node.js",
            level: 7,
          },
          {
            name: "Vue.js",
            level: 6,
          },
        ],
      },
      {
        name: "C#",
        level: 7,
        children: [
          {
            name: ".NET MVC",
            level: 8,
          },
          {
            name: ".NET Core",
            level: 6,
          },
        ],
      },
      {
        name: "PHP",
        level: 6,
      },
      {
        name: "Database",
        children: [
          {
            name: "MSSQL",
            level: 5,
          },
          {
            name: "MySQL",
            level: 5,
          },
          {
            name: "MongoDB",
            level: 3,
          },
        ],
      },
      {
        name: "View Engine",
        children: [
          {
            name: "Handlebars",
            level: 4,
          },
          {
            name: "Pug",
            level: 5,
          },
          {
            name: "Jade",
            level: 5,
          },
          {
            name: "Twig",
            level: 4,
          },
        ],
      },
      {
        name: "CMS",
        children: [
          {
            name: "WordPress",
            level: 4,
          },
          {
            name: "Sitecore",
            level: 2,
          },
        ],
      },
      {
        name: "Version Control",
        children: [
          {
            name: "GitHub",
            level: 6,
          },
          {
            name: "TFS",
            level: 6,
          },
          {
            name: "Bitbucket",
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
          }
        ]
      },
      {
        name: "English - Elementary",
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
          }
        ]
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
