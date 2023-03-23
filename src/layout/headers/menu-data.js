const menu_data = [
  {
    title: "Ana Səhifə",
    link: "/",
    mega_menu: false,
    submenus: [],
  },
  {
    title: "Səhifələr",
    link: "/",
    mega_menu: true,
    submenus: [
      {
        mega_submenu: [
          { title: "Haqqımızda", link: "/about-2" },
          { title: "Müəllimlər", link: "/team-2" },
          { title: "Tədbirlər", link: "/event-list" },
          { title: "Ən çox verilən suallar", link: "/faq" },
        ],
      },
    ],
    mobile_pages_menu: [
      { title: "Haqqımızda", link: "/about-2" },
      { title: "Müəllimlər", link: "/team-2" },
      { title: "Ən çox verilən suallar", link: "/faq" },
      { title: "Tədbirlər", link: "/event-list" },
    ],
  },
  {
    title: "Kurslar",
    link: "/course-style-1",
    mega_menu: false,
    submenus: [
      { title: "Course Details 3", link: "/course-details-3" },
    ],
  },
  {
    title: "Əlaqə",
    link: "/contact-us",
    mega_menu: false,
    submenus: [],
  },
];

export default menu_data;