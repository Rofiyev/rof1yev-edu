import { IHome_Card_Data, ISidebar_Items, ISocial_Icons } from "@/interface";

export const socialsIcons: ISocial_Icons[] = [
  {
    id: 1,
    title: 'Telegram',
    link: '',
  },
  {
    id: 2,
    title: 'Instagram',
    link: '',
  },
  {
    id: 3,
    title: 'LinkedIn',
    link: '',
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
]