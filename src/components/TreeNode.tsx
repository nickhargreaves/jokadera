import { useState } from 'react'
import type { FamilyMember } from '../data/family'

interface TreeNodeProps {
  member: FamilyMember
}

export function TreeNode({ member }: TreeNodeProps) {
  const hasChildren = !!member.children?.length
  const [expanded, setExpanded] = useState(!member.collapsed)

  return (
    <li>
      <div className="tree-node">
        <button
          type="button"
          className={`tree-card${hasChildren ? ' tree-card--toggle' : ''}`}
          onClick={hasChildren ? () => setExpanded((e) => !e) : undefined}
          aria-expanded={hasChildren ? expanded : undefined}
          disabled={!hasChildren}
        >
          <img
            className="tree-card__photo"
            src={`${import.meta.env.BASE_URL}${member.image}`}
            alt=""
          />
          <span className="tree-card__name">{member.name || ' '}</span>
          {member.title && <span className="tree-card__title">{member.title}</span>}
          {hasChildren && (
            <span className="tree-card__caret" aria-hidden="true">
              {expanded ? '−' : '+'}
            </span>
          )}
        </button>
      </div>
      {hasChildren && expanded && (
        <ul>
          {member.children!.map((child, i) => (
            <TreeNode key={`${child.name}-${i}`} member={child} />
          ))}
        </ul>
      )}
    </li>
  )
}
