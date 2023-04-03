import fs from 'fs'

import { Workflow } from '../domain/workflow'

export function loadWorkflow (filename: string): Workflow {
  const workflowPlain = fs.readFileSync(`../workflows/${filename}`)
  return JSON.parse(workflowPlain.toString())
}
