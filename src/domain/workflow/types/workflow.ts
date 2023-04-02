import { Command } from './command'

export type Workflow = {
  commands: Command[]
  title: string
  description: string
}
