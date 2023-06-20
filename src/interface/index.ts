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
}[]