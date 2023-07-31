import "./Content.scss"
import { Routes, Route } from "react-router-dom"
import BreedsPage from "features/breeds/BreedsPage"

const Content = () => (
  <main className="content">
    <Routes>
      <Route path="/" element={<div>Home</div>} />
      <Route path="/breeds" element={<BreedsPage />} />
      <Route path="/facts" element={<div>Facts</div>} />
    </Routes>
  </main>
)

export default Content
