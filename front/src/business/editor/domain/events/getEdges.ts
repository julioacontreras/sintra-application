import { EdgeGraph } from '../types/edgeGraph'
import { NodeGraph } from '../types/nodeGraph'

export function getEdges (nodes: NodeGraph[]) {
  const edges: EdgeGraph[] = [] 
  nodes.forEach((source: NodeGraph) => {
    Object.keys(source.data.outputs).map((outputName) => {
      const output = source.data.outputs[outputName]
      if (!output.sendToIds) {
        return
      }
      output.sendToIds.forEach((targetId: string) => {
        const target = nodes.find(el => el.id === targetId) 
        if (!target) {
          throw 'Error: not exist target'
        }
        edges.push({
          id: `${outputName}-${source.id}-${targetId}`,
          source: source.id,
          target: targetId,
          outputName: outputName,
          sourceData: source,
          targetData: target
        })
      })
    })
  })
  return edges
}
