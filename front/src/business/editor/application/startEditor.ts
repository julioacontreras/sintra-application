import { Workflow } from '@/business/workflow/domain/workflow'
import { getNodes } from '../domain/events/getNodes'
import { getEdges } from '../domain/events/getEdges'
  
export function startEditor (workflow: Workflow) {
  const commands = workflow.commands
  const nodes = getNodes(commands)
  const edges = getEdges(nodes)
  return {
    nodes,
    edges
  }
}
