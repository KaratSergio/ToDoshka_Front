import axios, { AxiosResponse } from 'axios';
// import {  } from './types';

const BASE_URL = import.meta.env.VITE_URL_RENDER;

const $instance = axios.create({ baseURL: BASE_URL });

// =======================TASKS-API-SERVICE=========================
