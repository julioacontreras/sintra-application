import { Workflow } from '@/ddd/workflow/domain/workflow'
import { getNodes } from '../events/getNodes'
import { getEdges } from '../events/getEdges'
import { Command } from '@/ddd/workflow/domain/command'

export class WorkManagement {
  public workflow: Workflow

  constructor (workflow: Workflow) {
    this.workflow = workflow
  }

  public getGraph () {
    const nodes = getNodes(this.workflow.commands)
    const edges = getEdges(nodes)
    return {
      nodes,
      edges
    }
  }

  public setCommand (commandId: string, newCommand: Command) {
    this.workflow.commands = this.workflow.commands.map(command => {
      if (command.id === commandId) {
        return newCommand
      } else {
        return command
      }
    })
  }

}
