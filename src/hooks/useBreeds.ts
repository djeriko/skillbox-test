import { useEffect, useState } from "react"
import { catsApi } from "api/cats.api"
import { StatusUnion } from "types/status"
import { IBreed } from "types/breeds"

export const useBreeds = () => {
  const [status, setStatus] = useState<StatusUnion>("idle")
  const [breeds, setBreeds] = useState<IBreed[]>([])

  const fetchData = async () => {
    setStatus("loading")

    try {
      const res = await catsApi.getBreeds()
      setBreeds(res)
      setStatus("success")
    } catch (e) {
      setStatus("failure")
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { status, breeds }
}
