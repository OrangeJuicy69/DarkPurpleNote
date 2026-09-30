import './basicnode.css'



const NODE_WIDTH = 140
const NODE_HEIGHT = 70

export const Connections = ({ nodes }) => {
    
    const byId = Object.fromEntries(nodes.map((n) => [n.id, n]))

    const lines = []

    nodes.forEach((node) => {
        node.voraussetzungen.forEach((reqId) => {
            const from = byId[reqId]
            if (!from) return 

            const x1 = from.position.x + NODE_WIDTH / 2
            const y1 = from.position.y + NODE_HEIGHT / 2
            const x2 = node.position.x + NODE_WIDTH / 2
            const y2 = node.position.y + NODE_HEIGHT / 2

            const dx = x2 - x1
            const dy = y2 - y1
            const length = Math.sqrt(dx * dx + dy * dy)
            const angle = Math.atan2(dy, dx) * (180 / Math.PI)

            lines.push(
                <div
                    key={`${reqId}-${node.id}`}
                    className="connection-line"
                    style={{
                        left: x1,
                        top: y1,
                        width: length,
                        transform: `rotate(${angle}deg)`,
                    }}
                />
            )
        })
    })

    return <div className="connections-layer">{lines}</div>
}