import axios from "axios"
import { IBreed } from "types/breeds"

export const catsApi = {
  async getBreeds(): Promise<IBreed[]> {
    const options = {
      method: "GET",
      url: "https://catfact.ninja/breeds?limit",
      params: {
        limit: 10,
      },
    }

    const response = await axios.request(options)
    return response.data.data
  },
}
