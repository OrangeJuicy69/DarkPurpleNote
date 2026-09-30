import { Node } from './node'
import nodes from './data.json'

export const NodeCanvas = () => {
    return (
        <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
            {nodes.map((node) => (
                <Node key={node.id} data={node} />
            ))}
        </div>
    );
};