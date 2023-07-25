import {useBreeds} from 'hooks/useBreeds'

const BreedsPage = () => {
  const { status, breeds } = useBreeds()

  if (status === 'loading') return <p>Loading...</p>
  if (status === 'failure') return <p>Something goes wrong</p>
  
  return (
    <div>
      {breeds.map((i, index) => {
        return <div key={'breed-'+index}>{i.breed}</div>
      })}
    </div>
  )
}

export default BreedsPage