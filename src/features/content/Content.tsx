import { StatusUnion } from 'types/status'
import './Content.scss'
import { IBreed } from 'types/breeds'
import { Routes, Route } from 'react-router-dom'
import BreedsPage from 'features/breeds/BreedsPage'

interface IProps {
  status: StatusUnion
  breed: IBreed
}

const Content = () => (
  <main className='content'>
    <Routes>
      <Route path='/' element={<div>Home</div>}/>
      <Route path='/breeds' element={<BreedsPage />}/>
      <Route path='/facts' element={<div>Facts</div>}/>
    </Routes>
  </main>
)

export default Content 