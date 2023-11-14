import axios from "axios"

const baseURL = 'https://beta.shopot.ai'

const instance = axios.create({
  baseURL: baseURL,
})

export const httpClient = instance;
