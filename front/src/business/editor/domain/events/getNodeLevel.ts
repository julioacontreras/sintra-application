import { Command } from '@/business/workflow/domain/command'

export type Level = {
  x: number, 
  y: number,
  founded: boolean
}

export function findLevel (commands: Command[], id: string, level: Level): Level {
  for (const command of commands) {
    level.x = 1
    level.y++
    if (command.id === id) {
      level.founded = true
      return level
    }
    const nameOuputs = Object.keys(command.outputs)
    for (const key of nameOuputs) {
      const output = command.outputs[key]
      if (!output.sendToIds) {
        break
      }
      for (const idTarget of output.sendToIds) {
        if (idTarget === id) {
          level.y++
          level.founded = true
          return level
        }
        level.x++
      }
    }
  }
  return level
}

export function getNodeLevel (commands: Command[], id: string): Level {
  let level = {
    x: 1, 
    y: 0,
    founded: false
  }
  level = findLevel(commands, id, level)

  return level
}
