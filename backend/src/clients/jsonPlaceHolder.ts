import axios, { AxiosResponse } from 'axios';
import config, { IConfig } from 'config';

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: { lat: string; lng: string };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  address: Address;
  phone: string;
  website: string;
  company: Company;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const jsonPlaceHolderConfig: IConfig = config.get(
  'App.resources.JsonPlaceHolder'
);

export const getUsers = (): Promise<AxiosResponse<User[]>> =>
  axios.get(`${jsonPlaceHolderConfig.get('apiUrl')}/users`);

export const getPosts = (): Promise<AxiosResponse<Post[]>> =>
  axios.get(`${jsonPlaceHolderConfig.get('apiUrl')}/posts`);
