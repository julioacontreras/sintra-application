import { Command, ReturnRun } from '../../types/command'
import { prepareReturnRun } from '../../events/prepareReturnRun'
import { IfOutput } from '../../commands/if/ifOutput'
import { IfParameters } from '../../commands/if/ifParameters'
import { extractDataToString } from '../../events/extractData'

export const useIfCommand = (command: Command) => {
  const run = async (data: object): Promise<ReturnRun> => {
    return new Promise((resolve) => {
      console.log('useIfCommand', command, data)
      const params = command.parameters as IfParameters

      const firstCompare = extractDataToString(data, params.firstCompare)
      const secondCompare = extractDataToString(data, params.secondCompare)

      console.log({
        firstCompare,
        secondCompare
      })

      const outputs = command.outputs as IfOutput
      if (params.operator === '===') {
        if (firstCompare === secondCompare) {
          console.log('ok')
          resolve(prepareReturnRun(data, outputs.ok))
          return
        } else {
          console.log('ko')
          resolve(prepareReturnRun(data, outputs.ko))
          return
        }
      } else if (params.operator === '>=') {
        if (params.firstCompare >= params.secondCompare) {
          resolve(prepareReturnRun(data, outputs.ok))
          return
        } else {
          resolve(prepareReturnRun(data, outputs.ko))
          return
        }
      } else if (params.operator === '>') {
        if (params.firstCompare > params.secondCompare) {
          resolve(prepareReturnRun(data, outputs.ok))
          return
        } else {
          resolve(prepareReturnRun(data, outputs.ko))
          return
        }
      } else if (params.operator === '<=') {
        if (params.firstCompare <= params.secondCompare) {
          resolve(prepareReturnRun(data, outputs.ok))
          return
        } else {
          resolve(prepareReturnRun(data, outputs.ko))
          return
        }
      } else if (params.operator === '<') {
        if (params.firstCompare < params.secondCompare) {
          resolve(prepareReturnRun(data, outputs.ok))
          return
        } else {
          resolve(prepareReturnRun(data, outputs.ko))
          return
        }
      }
      throw new Error('useIfCommand: Invalid operator')
    })
  }
  return run
}
