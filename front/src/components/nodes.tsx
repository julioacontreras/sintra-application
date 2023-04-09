import { NodeGraph } from '@/business/editor/domain/types/nodeGraph';
import RequestNode from '@/components/node/requestNode'
import ResponseNode from '@/components/node/responseNode'
import ApiNode from '@/components/node/apiNode'
import IfNode from '@/components/node/ifNode'

export type NodesProps = {
    nodes: NodeGraph[]
    setCommandId: (id: string) => void
}

export default function Nodes (props: NodesProps) {
  function factoryNode (node: NodeGraph, index: number) {
    if (node.type === 'endpoint') {
      return <RequestNode nodeGraph={node} key={index} setCommandId={props.setCommandId}></RequestNode>
    }
    if (node.type === 'api') {
      return <ApiNode nodeGraph={node} key={index} setCommandId={props.setCommandId}></ApiNode>
    }
    if (node.type === 'if') {
      return <IfNode nodeGraph={node} key={index} setCommandId={props.setCommandId}></IfNode>
    }
    if (node.type === 'response') {
      return <ResponseNode nodeGraph={node} key={index} setCommandId={props.setCommandId}></ResponseNode>
    }
    throw 'Error not find component node'
  }
  const nodes = props.nodes
  return (
    <>
      {nodes.map((node: NodeGraph, index: number) => factoryNode(node, index))}       
    </>
  );
}
