import type { FamilyMember } from '../data/family'
import { TreeNode } from './TreeNode'

interface FamilyTreeProps {
  root: FamilyMember
}

export function FamilyTree({ root }: FamilyTreeProps) {
  return (
    <div className="tree">
      <ul>
        <TreeNode member={root} />
      </ul>
    </div>
  )
}
