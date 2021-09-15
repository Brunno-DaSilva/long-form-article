const NAV_DATA = [
  {
    id: 1,
    title: "NEWS",
    selected: false,
    items: [
      {
        name: "District News",
        url: "https://www.friscoisd.org/news?n=news",
      },
      {
        name: "Inside Frisco ISD",
        url: "https://www.friscoisd.org/news?n=inside",
      },
      {
        name: "Connect With Frisco ISD",
        url: "https://www.friscoisd.org/departments/communications/connect-with-us",
      },
      {
        name: "Frisco ISD Athletics News",
        url: "https://www.friscoisdsports.com/news",
      },
    ],
    mainURL: "",
  },
  {
    id: 2,
    title: "ABOUT",
    selected: false,
    items: [
      {
        name: "Board of Trustees",
        url: "https://www.friscoisd.org/about/board-of-trustees/",
      },
      {
        name: "Bond Programs",
        url: "https://www.friscoisd.org/about/bond-programs",
      },
      {
        name: "Calendars",
        url: "https://www.friscoisd.org/about/resources-and-information/school-calendars",
      },
      {
        name: "Community Folder",
        url: "https://www.friscoisd.org/departments/communications/community-folder/elementary-community-folder",
      },
      {
        name: "District Leadership",
        url: "https://www.friscoisd.org/about/district-leadership/leaders",
      },
      {
        name: "District of Innovation",
        url: "https://www.friscoisd.org/departments/district-of-innovation/home",
      },
      {
        name: "District Overview",
        url: "https://www.friscoisd.org/about/district-overview/home",
      },
      {
        name: "Mission, Vision & Beliefs",
        url: "https://www.friscoisd.org/about/district-overview/mission-vision-beliefs",
      },
      {
        name: "Early History",
        url: "https://www.friscoisd.org/about/early-history/early-history",
      },
      {
        name: "Enrollment",
        url: "https://www.friscoisd.org/about/enrollment",
      },
      {
        name: "Facility Map",
        url: "https://www.friscoisd.org/about/district-facility-map",
      },
      {
        name: "Financial Transparency",
        url: "https://www.friscoisd.org/departments/finance/financial-transparency",
      },
      {
        name: "Government Affairs",
        url: "https://www.friscoisd.org/about/government-affairs",
      },
      {
        name: "New to Frisco ISD",
        url: "https://www.friscoisd.org/about/new-to-frisco-isd",
      },
      {
        name: "Public Information",
        url: "https://www.friscoisd.org/about/resources-and-information/open-records-requests",
      },
      {
        name: "Staff Email Search",
        url: "https://www.friscoisd.org/about/resources-and-information/staff-email-search",
      },
      {
        name: "Strategic Planning",
        url: "https://www.friscoisd.org/about/strategic-planning/home",
      },
      {
        name: "Staff",
        url: "https://portal.friscoisd.org/LoginPolicy.jsp",
        CSS_class: "staff",
      },

      {
        name: "Students",
        url: "https://www.friscoisd.org/students",
        CSS_class: "btn__about",
      },
      {
        name: "Community",
        url: "https://www.friscoisd.org/community/community",
        CSS_class: "btn__about",
      },
      {
        name: "Parents",
        url: "https://www.friscoisd.org/parents",
        CSS_class: "btn__about",
      },
    ],
    mainURL: "",
  },
  {
    id: 3,
    title: "DEPARTMENTS",
    selected: false,
    items: [
      {
        name: "Departments & Services",
        url: "https://www.friscoisd.org/departments",
      },
    ],
    mainURL: "https://www.friscoisd.org/departments",
  },
  {
    id: 4,
    title: "SCHOOLS",
    selected: false,
    items: [
      {
        name: "Elementary",
        subItems: [
          {
            name: "Allen Elementary",
            url: "http://schools.friscoisd.org/allen",
          },
          {
            name: "Anderson Elementary",
            url: "http://schools.friscoisd.org/anderson",
          },
          {
            name: "Ashley Elementary",
            url: "http://schools.friscoisd.org/ashley",
          },
          {
            name: "Bledsoe Elementary",
            url: "http://schools.friscoisd.org/bledsoe",
          },
          {
            name: "Boals Elementary",
            url: "http://schools.friscoisd.org/boals",
          },
          {
            name: "Borchardt Elementary",
            url: "http://schools.friscoisd.org/borchardt",
          },
          {
            name: "Bright Academy",
            url: "http://schools.friscoisd.org/bright",
          },
          {
            name: "Carroll Elementary",
            url: "http://schools.friscoisd.org/carroll",
          },
          {
            name: "Christie Elementary",
            url: "http://schools.friscoisd.org/christie",
          },
          {
            name: "Comstock Elementary",
            url: "http://schools.friscoisd.org/comstock",
          },
          {
            name: "Corbell Elementary",
            url: "http://schools.friscoisd.org/corbell",
          },
          {
            name: "Elliott Elementary",
            url: "http://schools.friscoisd.org/elliott",
          },
          {
            name: "Fisher Elementary",
            url: "http://schools.friscoisd.org/fisher",
          },
          {
            name: "Gunstream Elementary",
            url: "http://schools.friscoisd.org/gunstream",
          },
          {
            name: "Hosp Elementary",
            url: "http://schools.friscoisd.org/hosp",
          },
          {
            name: "Isbell Elementary",
            url: "http://schools.friscoisd.org/isbell",
          },
          {
            name: "Liscano Elementary",
            url: "http://schools.friscoisd.org/liscano",
          },
          {
            name: "McSpedden Elementary",
            url: "http://schools.friscoisd.org/mcspedden",
          },
          {
            name: "Miller Elementary",
            url: "http://schools.friscoisd.org/miller",
          },
          {
            name: "Mooneyham Elementary",
            url: "http://schools.friscoisd.org/mooneyham",
          },
          {
            name: "Newman Elementary",
            url: "http://schools.friscoisd.org/newman",
          },
          {
            name: "Nichols Elementary",
            url: "http://schools.friscoisd.org/nichols",
          },
          {
            name: "Norris Elementary",
            url: "http://schools.friscoisd.org/norris",
          },
          {
            name: "Ogle Elementary",
            url: "http://schools.friscoisd.org/ogle",
          },
          {
            name: "Phillips Elementary",
            url: "http://schools.friscoisd.org/phillips",
          },
          {
            name: "Pink Elementary",
            url: "http://schools.friscoisd.org/pink",
          },
          {
            name: "Purefoy Elementary",
            url: "http://schools.friscoisd.org/purefoy",
          },
          {
            name: "Riddle Elementary",
            url: "http://schools.friscoisd.org/riddle",
          },
          {
            name: "Robertson Elementary",
            url: "http://schools.friscoisd.org/robertson",
          },
          {
            name: "Rogers Elementary",
            url: "http://schools.friscoisd.org/rogers",
          },
          {
            name: "Sem Elementary",
            url: "http://schools.friscoisd.org/sem",
          },
          {
            name: "Scott Elementary",
            url: "http://schools.friscoisd.org/scott",
          },
          {
            name: "Shawnee Trail Elementary",
            url: "http://schools.friscoisd.org/shawneetrail",
          },
          {
            name: "Smith Elementary",
            url: "http://schools.friscoisd.org/smith",
          },
          {
            name: "Sonntag Elementary",
            url: "http://schools.friscoisd.org/sonntag",
          },
          {
            name: "Sparks Elementary",
            url: "http://schools.friscoisd.org/sparks",
          },
          {
            name: "Spears Elementary",
            url: "http://schools.friscoisd.org/spears",
          },
          {
            name: "Tadlock Elementary",
            url: "http://schools.friscoisd.org/tadlock",
          },
          {
            name: "Talley Elementary",
            url: "http://schools.friscoisd.org/talley",
          },
          {
            name: "Taylor Elementary",
            url: "http://schools.friscoisd.org/taylor",
          },
          {
            name: "Vaughn Elementary",
            url: "http://schools.friscoisd.org/vaughn",
          },
        ],
      },
      {
        name: "Middle",
        subItems: [
          {
            name: "Clark Middle School",
            url: "http://schools.friscoisd.org/clark",
          },
          {
            name: "Cobb Middle School",
            url: "http://schools.friscoisd.org/cobb",
          },
          {
            name: "Ashley",
            url: "hbaba",
          },
          {
            name: "Ashley",
            url: "hbaba",
          },
          {
            name: "Ashley",
            url: "hbaba",
          },
          {
            name: "Ashley",
            url: "hbaba",
          },
          {
            name: "Ashley",
            url: "hbaba",
          },
          {
            name: "Ashley",
            url: "hbaba",
          },
          {
            name: "Ashley",
            url: "hbaba",
          },
          {
            name: "Ashley",
            url: "hbaba",
          },
          {
            name: "Ashley",
            url: "hbaba",
          },
          {
            name: "Ashley",
            url: "hbaba",
          },
          {
            name: "Ashley",
            url: "hbaba",
          },
          {
            name: "Ashley",
            url: "hbaba",
          },
          {
            name: "Ashley",
            url: "hbaba",
          },
        ],
      },
      {
        name: "High",
        subItems: [
          {
            name: "Allen High",
            url: "http://schools.friscoisd.org/allen",
          },
          {
            name: "Anderson High",
            url: "http://schools.friscoisd.org/anderson",
          },
          {
            name: "Ashley High",
            url: "http://schools.friscoisd.org/ashley",
          },
        ],
      },
    ],
    mainURL: "https://www.friscoisd.org/departments",
  },
  {
    id: 5,
    title: "EMPLOYMENT",
    selected: false,
    items: [
      {
        name: "Employment Home",
        url: "https://www.friscoisd.org/employment",
      },
      {
        name: "Job Openings",
        url: "https://www.friscoisd.org/employment/current-openings",
      },
      {
        name: "New Hires",
        url: "https://www.friscoisd.org/employment/new-hires",
      },
      {
        name: "Teachers & Staff",
        url: "https://www.friscoisd.org/employment/application-for-professional-teachers-and-staff",
      },
      {
        name: "PARA & Auxiliary Employees",
        url: "https://www.friscoisd.org/employment/operations-clerical-and-paraprofessional-positions",
      },
      {
        name: "Substitutes",
        url: "https://www.friscoisd.org/employment/substitutes",
      },
      {
        name: "Student Observers",
        url: "https://www.friscoisd.org/employment/student-observers",
      },
      {
        name: "Student Teachers",
        url: "https://www.friscoisd.org/employment/student-teachers",
      },

      {
        name: "Employee Resources",
        url: "https://www.friscoisd.org/employment/employee-resources",
      },
      {
        name: "Frequently Asked Questions",
        url: "https://www.friscoisd.org/employment/employment-faq",
      },
    ],
    mainURL: "https://www.friscoisd.org/departments",
  },
];

export default NAV_DATA;
