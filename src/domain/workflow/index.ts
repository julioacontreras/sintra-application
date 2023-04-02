import { Command } from './types/command'
import { useIfCommand } from './commands/if/ifCommand'
import { useApiRequest } from './commands/apiRequest/apiRequestCommand'
import { useResponseCommand } from './commands/response/responseCommand'
import { Workflow } from './types/workflow'
import { runEndpoint } from './commands/endpoint/endpointCommand'

export class WorkflowRunner {
  public commands: Command[] = []

  public load (workflow: Workflow) {
    this.commands = workflow.commands
  }

  public async run () {
    await this.createPipeline()
  }

  public async createPipeline () {
    this.commands.forEach((data) => {
      this.createCommand(data)
    })
    const elStart = this.commands.find((el) => el.id === 'endpont')
    if (elStart) {
      await this.createEndpoint(elStart)
    }
  }

  public createCommand (data: Command) {
    if (data.command === 'api') {
      this.createApiRequest(data)
    }
    if (data.command === 'if') {
      this.createIf(data)
    }
    if (data.command === 'response') {
      this.createResponse(data)
    }
  }

  public async runIds (ids: string[], data: object): Promise<object> {
    let lastResult = {}
    for (const id of ids) {
      const command = this.commands.find((el) => el.id === id)
      if (command) {
        const { ids, result } = await command.run(data)
        console.log(command.title)
        if (ids.length > 0) {
          lastResult = await this.runIds(ids, result)
        } else {
          lastResult = result
        }
      } else {
        throw new Error('runIds:: invalid commmand')
      }
    }
    return lastResult
  }

  public async createEndpoint (el: Command) {
    runEndpoint(el, await this.runIds.bind(this))
  }

  public createIf (command: Command) {
    const run = useIfCommand(command)
    command.run = run
  }

  public createResponse (command: Command) {
    const run = useResponseCommand(command)
    command.run = run
  }

  public async createApiRequest (command: Command) {
    const run = useApiRequest(command)
    command.run = run  
  }
}
