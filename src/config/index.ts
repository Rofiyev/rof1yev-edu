import { IHome_Card_Data, IQuations, ISidebar_Items, ISocial_Icons } from "@/interface";

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

