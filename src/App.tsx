import { FamilyTree } from './components/FamilyTree'
import { familyRoot } from './data/family'

export default function App() {
  return (
    <div className="page">
      <h1 className="page__title">Jokadera Family Tree</h1>
      <FamilyTree root={familyRoot} />
    </div>
  )
}
