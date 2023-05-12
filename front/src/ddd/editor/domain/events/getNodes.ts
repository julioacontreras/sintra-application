import { Command } from '@/ddd/workflow/domain/command'
import { getNodeLevel } from './getNodeLevel'
import { spaceHorizontalBetweenComponents, spaceVeriticalBetweenComponents } from '../constants'

export function getNodes (commands: Command[]) {
  return commands.map((command) => {
    const level = getNodeLevel(commands, command.id)
    const size = {
      width: 200,
      height: 30
    }
    const position = { x: 0, y: 0 }
    if (level.founded) {
      position.x += (level.x * (size.width + spaceHorizontalBetweenComponents)) - size.width
      position.y = level.y * (size.height + spaceVeriticalBetweenComponents)
    }
    return {
      id: command.id,
      type: command.command,
      size,
      position,
      data: {
        label: command.title,
        outputs: command.outputs,
      },
    }
  })
}
