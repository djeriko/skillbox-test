import "./BreedsPage.scss"
import { useBreeds } from "hooks/useBreeds"

const BreedsPage = () => {
  const { status, breeds } = useBreeds()

  if (status === "loading") return <div>Loading...</div>
  if (status === "failure") return <div>Something goes wrong</div>

  return (
    <div className="breeds-page">
      {breeds.map((i, index) => {
        return (
          <div key={"breed-" + index} className="breeds-page__cat">
            <div>{i.breed}</div>
            <div className="breeds-page__cat__country">{i.country}</div>
          </div>
        )
      })}
    </div>
  )
}

export default BreedsPage
