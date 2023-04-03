
import { Workflow } from '@/business/workflow/domain/workflow'
import ReactFlow from 'reactflow'
import 'reactflow/dist/style.css'

export type EditorSettings = {
  workflow: Workflow | null 
}

export default function Editor(props: EditorSettings) {
  const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  ]
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }]

  console.log(props.workflow)

  return (
    <>
      <ReactFlow nodes={initialNodes} edges={initialEdges} />
    </>
  )
}
