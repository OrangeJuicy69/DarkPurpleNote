import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Node } from './node.jsx'
import { NewNode } from './newnode.jsx'
import { Sidepanel } from './sidepanel.jsx'
import { Connections } from './connections.jsx'
import nodes from './data.json'

const App = () => {
  const [nodeList, setNodeList] = useState(nodes)
  const [selectedId, setSelectedId] = useState(null)
  const [sizes, setSizes] = useState({})

  const selectedNode = nodeList.find((n) => n.id === selectedId) || null

  const handleMove = (id, position) => {
    setNodeList((prev) =>
      prev.map((n) => (n.id === id ? { ...n, position } : n))
    )
  }

  const handleResize = (id, size) => {
    setSizes((prev) => ({ ...prev, [id]: size }))
  }

  
  const handleSelect = (id) => {
    setSelectedId((prev) => (prev === id ? null : id))
  }

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Connections nodes={nodeList} sizes={sizes} />
      {nodeList.map((node) => (
        <Node
          key={node.id}
          data={node}
          isSelected={node.id === selectedId}
          onMove={handleMove}
          onSelect={handleSelect}
          onResize={handleResize}
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