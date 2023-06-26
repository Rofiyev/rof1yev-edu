import { ICourses, IHome_Card_Data, IQuations, ISidebar_Items, ISocial_Icons } from "@/interface";

export const socialsIcons: ISocial_Icons[] = [
  {
    id: 1,
    title: 'Telegram',
    link: 'https://t.me/Rof1yev',
  },
  {
    id: 2,
    title: 'Instagram',
    link: 'https://www.instagram.com/rof1yev',
  },
  {
    id: 3,
    title: 'LinkedIn',
    link: 'https://www.linkedin.com/in/rofiyev-dilshod-25635a270',
  },
];

export const sidebarItem: ISidebar_Items[] = [
  {
    id: 1,
    text: 'Bosh Sahifa',
    route: '/',
  },
  {
    id: 2,
    text: 'Kurslar',
    route: '/courses',
  },
  {
    id: 3,
    text: 'Kod Manbalar',
    route: '/resources',
  },
  {
    id: 4,
    text: 'Kontakt',
    route: '/contact',
  },
  {
    id: 5,
    text: 'FAQ',
    route: '/faq',
  },
];

export const homeCardData: IHome_Card_Data[] = [
  {
    id: 1,
    text: 'Umrbod Dostup',
  },
  {
    id: 2,
    text: '',
  },
  {
    id: 3,
    text: 'Siz xohlagan joyda',
  },
  {
    id: 4,
    text: '',
  },
  {
    id: 5,
    text: 'Mukammal darslar',
  },
];

export const quationsData: IQuations[] = [
  {
    id: 1,
    quation: 'Kursni qanday boshlash mumkin?',
    answer: "Ro'yxatdan o'tish kerak. Keyin xohlagan kursga kirish imkoniyati mavjud bo'ladi."
  },
  {
    id: 2,
    quation: 'Kursni qaysi vaqtda boshlanadi?',
    answer: "Hech qanday vaqt belgilanmagan. Xohlagan vaqt boshlash mumkin bo'ladi."
  },
  {
    id: 3,
    quation: 'Kursga kirish uchun qancha vaqt ajratilgan?',
    answer: "Hech qanday vaqt cheklovi mavjud emas! Sizga kursga foydalanish huquqini bir umrga beramiz."
  },
  {
    id: 4,
    quation: "Kursni bitirib nimalarga ega bo'laman?",
    answer: "Sizga kursni tugatib sertifikat yoki shunga o'xshash tasdiqlovchi nimadur berolmaymiz. Sizga bilim va portfolion uchun amaliy loyihalar taqdim etamiz holos!"
  },
  {
    id: 5,
    quation: "Platformadagi yangiliklarni qanday xabardor bo'lishim mumkin?",
    answer: "Bizning telegram kanalimizga obuna bo'lsangiz kifoya, t.me/rofiyevdilshod"
  },
  {
    id: 6,
    quation: "Hamkorlik qilishimiz mumkinmi?",
    answer: "Xa siz o'zingiz xohlagan miqdorda homiylik qilishingiz mumkin, platformaning rivoji uchun, agarda pullik darsliklar chiqsa sharoit yo'q studentlarga homiylik qilishingiz mumkin bo'ladi. Va yana server, ma'lumotlar bazasi, montaj, dastur ta'minotlar uchun ham o'z hissangizni qo'shishingiz mumkin."
  },
  {
    id: 7,
    quation: "Video darsliklarni yuklab olish mumkinmi?",
    answer: "Yo'q videodarsliklarni yuklab ololmaysiz faqat platformani o'zida ko'rishingiz mumkin."
  },
  {
    id: 8,
    quation: "Qanday qilib muallif bilan bog'lansam bo'ladi?",
    answer: "Kantakt bo'limiga o'tib xabar yozib qoldirsangiz bo'ladi."
  },
];

export const courses_data: ICourses[] = [
  {
    id: 5,
    image_link: 'https://sammi.ac/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F3gf746AKRbWNjB8OCoEB&w=3840&q=75',
    slug: 'javascript',
    title: 'JavaScript darslari to`liq kurs',
    price: 20,
    newPrice: 'Bepul',
    stack: 'Frontend',
    description: `Javascript toʻliq oʻzbek tilida. JavaScript "From 0 To Guru": Eng mashhur dasturlash tilini o'zlashtirib oling va uni amalda qo'llashni o'rganing. Ushbu kurs JavaScript-ni chuqur o'rganishga qaratilgan, ammo asosiy maqsad uni darhol amalda qo'llashdir. Bu shuni anglatadiki, siz ishlash uchun material olasiz va birgalikda biz bosqichma-bosqich haqiqiy loyihalarni yaratamiz.`,
    courses_info: [
      {
        key: 'Darslar soni',
        value: '62',
      },
      {
        key: 'Umumiy soat',
        value: '15 soat',
      },
      {
        key: 'Darajasi',
        value: `O'rta`,
      },
      {
        key: 'Til',
        value: `O'zbek`,
      },
      {
        key: 'Sertifikat',
        value: `Yo'q`,
      },
      {
        key: 'Dostup',
        value: `Umrbod`,
      }
    ],
    level: 5,
    students: 0,
    update_date: '24 Iyun, 2023',
    lesson_ID: 'PL_WK6W0Gn1I7bL0pRUxYSbTj6g8tHU6Yq',
  },
  {
    id: 6,
    image_link: 'https://sammi.ac/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2F65rcPxsLT9ysJDisXF80&w=2048&q=75',
    slug: 'reactjs',
    title: 'ReactJS darslari to`liq kurs',
    price: 20,
    newPrice: 'Bepul',
    stack: 'Frontend',
    description: `ReactJS darslari oʻzbek tilida toʻliq kurs. ReactJS "From 0 To Guru". Eng mashhur JavaScript kutubxonasini o'zlashtirib oling va uni amalda qo'llashni o'rganing! Ushbu kurs ReactJS-ni chuqur o'rganishga qaratilgan, ammo asosiy maqsad uni hayotda qo'llashdir. Bu shuni anglatadiki, siz ishlash uchun material olasiz va birgalikda biz bosqichma-bosqich haqiqiy loyihalarni yaratamiz.`,
    courses_info: [
      {
        key: 'Darslar soni',
        value: '0',
      },
      {
        key: 'Umumiy soat',
        value: '0 soat',
      },
      {
        key: 'Darajasi',
        value: `O'rta`,
      },
      {
        key: 'Til',
        value: `O'zbek`,
      },
      {
        key: 'Sertifikat',
        value: `Yo'q`,
      },
      {
        key: 'Dostup',
        value: `Umrbod`,
      }
    ],
    level: 5,
    students: 0,
    update_date: '24 Iyun, 2023',
    lesson_ID: 'PL_WK6W0Gn1I7bL0pRUxYSbTj6g8tHU6Yq',
  },
  {
    id: 7,
    image_link: 'https://sammi.ac/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FPe94ubZPSCHgXDIPBxTr&w=2048&q=75',
    slug: 'nextjs',
    title: 'NextJS darslari to`liq kurs',
    price: 20,
    newPrice: 'Bepul',
    stack: 'Frontend',
    description: `NextJS darslari to'liq kurs o'zbek tilida. Siz ushbu kursda TypeScript dasturlash tili asosida loyiha yasaysiz. Loyihada NextJS framework yordamida Front-End qismini to'liq ko'tarasiz. CSS uchun MaterialUI kutubxonasida foydalanamiz. Hygraph CMS va GraphQL texnologiyalarni o'zimizning loyihaga integratsiya qilamiz.`,
    courses_info: [
      {
        key: 'Darslar soni',
        value: '0',
      },
      {
        key: 'Umumiy soat',
        value: '0 soat',
      },
      {
        key: 'Darajasi',
        value: `O'rta`,
      },
      {
        key: 'Til',
        value: `O'zbek`,
      },
      {
        key: 'Sertifikat',
        value: `Yo'q`,
      },
      {
        key: 'Dostup',
        value: `Umrbod`,
      }
    ],
    level: 5,
    students: 0,
    update_date: '24 Iyun, 2023',
    lesson_ID: 'PL_WK6W0Gn1I7bL0pRUxYSbTj6g8tHU6Yq',

  },
  {
    id: 8,
    image_link: 'https://sammi.ac/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FmDcwhbguQpyM74jb18M5&w=2048&q=75',
    slug: 'nodejs',
    title: 'NodeJS darslari to`liq kurs',
    price: 20,
    newPrice: 'Bepul',
    stack: 'Backend',
    description: `JavaScript-ni server tomonida ishlab chiqish. Kurs NodeJS-ni o'rnatishdan tortib, tugallangan dasturni joylashtirish va uni serverda joylashtirishgacha bo'lgan asosiy ma'lumotlarni taqdim etadi. Kursning asosiy maqsadi sizga nafaqat nazariy hamda amaliy mashg'ulotlar va loyihalar bilan chuqur o'rgatishdir.`,
    courses_info: [
      {
        key: 'Darslar soni',
        value: '0',
      },
      {
        key: 'Umumiy soat',
        value: '0 soat',
      },
      {
        key: 'Darajasi',
        value: `O'rta`,
      },
      {
        key: 'Til',
        value: `O'zbek`,
      },
      {
        key: 'Sertifikat',
        value: `Yo'q`,
      },
      {
        key: 'Dostup',
        value: `Umrbod`,
      }
    ],
    level: 5,
    students: 0,
    update_date: '24 Iyun, 2023',
    lesson_ID: 'PL_WK6W0Gn1I7bL0pRUxYSbTj6g8tHU6Yq',

  },
  {
    id: 9,
    image_link: 'https://sammi.ac/_next/image?url=https%3A%2F%2Fmedia.graphassets.com%2FVoWU1Ks6RiycwcnZe8LZ&w=2048&q=75',
    slug: 'expressjs',
    title: 'ExpressJS darslari to`liq kurs',
    price: 20,
    newPrice: 'Bepul',
    stack: 'Backend',
    description: `ExpressJS yordamida to'liq funktsiyaga ega full-stack loyiha yaratish, 0dan boshlab murakkab mavzularni o'z ichiga qamrab oladi ushbu kurs. Siz backend yordamida API yozishni, ma'lumotlar bazasi bilan ishlash, ro'yhatdan o'tish, Json Web Tokenlar bilan tanishib olasiz. Ushbu kurs sizga backend olamiga kirib kelishdagi ilk qadamlaringiz bo'ladi. Va albatta platformamizni kuzatishda davom etsangiz, bu bilimlaringiz yanada mustahkam bo'lish mumkin. Chunki bu kurslar faqat boshlanishi xolos.`,
    courses_info: [
      {
        key: 'Darslar soni',
        value: '0',
      },
      {
        key: 'Umumiy soat',
        value: '0 soat',
      },
      {
        key: 'Darajasi',
        value: `O'rta`,
      },
      {
        key: 'Til',
        value: `O'zbek`,
      },
      {
        key: 'Sertifikat',
        value: `Yo'q`,
      },
      {
        key: 'Dostup',
        value: `Umrbod`,
      }
    ],
    level: 5,
    students: 0,
    update_date: '24 Iyun, 2023',
    lesson_ID: 'PL_WK6W0Gn1I7bL0pRUxYSbTj6g8tHU6Yq',
  },
];