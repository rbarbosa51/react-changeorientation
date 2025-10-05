import { HashRouter, Routes, Route } from "react-router-dom";
import {HomePage,R3FPage} from '@/pages'

export default function App(){
  return (
    <HashRouter>
      <Routes>
        <Route path="/" exact index element={<HomePage />} />
        <Route path="/r3f" exact element={<R3FPage />} />
      </Routes>
    </HashRouter>
  )
}