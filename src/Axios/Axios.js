import axios from "axios"

export const BaseURL = "http://54.232.211.253:3000/"

export const axiosKit = axios.create({
  baseURL: BaseURL,
  timeout: 10000,
})
