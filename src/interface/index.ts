import { ReactNode } from 'react';

export interface ISocial_Icons {
  id: number,
  title: string,
  link: string
}[];

export interface ISidebar_Items {
  id: number,
  text: string,
  route: string,
}[];

export interface IHome_Card_Data {
  id: number,
  text: string
}[];

export interface IForm {
  name: string;
  email: string;
  messege: string
}

export interface IAuth {
  email: string;
  password: string;
}

export interface IQuations {
  id: number;
  quation: string;
  answer: string;
}[];

export interface ICourses {
  id: number,
  image_link: string;
  slug: string;
  title: string;
  price: number;
  newPrice: string;
  stack: string;
  description: string;
  courses_info: {
    key: string;
    value: string;
  }[];
  level: number;
  students: number;
  update_date: string;
  lesson_ID: string;
}