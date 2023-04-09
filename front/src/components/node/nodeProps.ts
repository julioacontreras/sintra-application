import { NodeGraph } from '@/business/editor/domain/types/nodeGraph'

export type NodeProps = {
  nodeGraph: NodeGraph,
  setCommandId: (id: string) => void
}
