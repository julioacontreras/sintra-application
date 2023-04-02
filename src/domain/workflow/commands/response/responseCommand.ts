import { Command, ReturnRun } from '../../types/command'
import { prepareReturnRun } from '../../events/prepareReturnRun'
import { ResponseOutput } from '../../commands/response/responseOutput'

export const useResponseCommand = (command: Command) => {
  const run = async (data: object): Promise<ReturnRun> => {
    return new Promise(resolve => {
      const outputs = command.outputs as ResponseOutput
      const result = prepareReturnRun(data, outputs.default)
      resolve(result)
    })
  }
  return run
}

