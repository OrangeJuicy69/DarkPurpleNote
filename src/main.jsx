import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Node } from './node.jsx'
import { NewNode } from './newnode.jsx'
import { Sidepanel } from './sidepanel.jsx'
import nodes from './data.json'
import { Connections } from './connections.jsx'

const App = () => {
  const [nodeList, setNodeList] = useState(nodes)
  const [selectedId, setSelectedId] = useState(null)

  const selectedNode = nodeList.find((n) => n.id === selectedId) || null

  const handleMove = (id, position) => {
    setNodeList((prev) =>
      prev.map((n) => (n.id === id ? { ...n, position } : n))
    )
  }

  
  const handleSelect = (id) => {
    setSelectedId((prev) => (prev === id ? null : id))
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Connections nodes={nodeList} />
      {nodeList.map((node) => (
        <Node
          key={node.id}
          data={node}
          isSelected={node.id === selectedId}
          onMove={handleMove}
          onSelect={handleSelect}
        />
      ))}
      <NewNode />
      <Sidepanel node={selectedNode} onClose={() => setSelectedId(null)} />
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)