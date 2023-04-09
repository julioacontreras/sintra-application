import { NodeGraph } from './nodeGraph'

export type EdgeGraph = {
  id: string
  source: string
  target: string
  outputName: string 
  sourceData: NodeGraph
  targetData: NodeGraph
}
