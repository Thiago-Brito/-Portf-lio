import { Route, Routes } from 'react-router-dom'

import { Home } from './pages/Home'
import { Hobby } from './pages/Hobby'
import { Linguagens } from './pages/Linguagens'
import { Contato } from './pages/Contato'


import { DefaultLayout } from './layouts/DefaultLayout'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/hobby" element={<Hobby />} />
        <Route path="/linguagens" element={<Linguagens />} />
        <Route path="/contato" element={<Contato />} />


      </Route>
    </Routes>
  )
}
