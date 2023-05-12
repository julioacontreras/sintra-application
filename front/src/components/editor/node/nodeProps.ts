import { NodeGraph } from '@/ddd/editor/domain/types/nodeGraph'

export type NodeProps = {
  nodeGraph: NodeGraph,
  setCommandId: (id: string) => void
}
