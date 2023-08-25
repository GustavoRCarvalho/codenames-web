import axios from "axios"

export const BaseURL = "https://codenames.biancabeppler.com.br/"

export const axiosKit = axios.create({
  baseURL: BaseURL,
  timeout: 10000,
})
