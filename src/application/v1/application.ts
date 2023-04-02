import fs from 'fs'
import path from 'path'

import { WorkflowRunner } from '../../domain/workflow'
import { Project } from '../../domain/workflow/types/project'
import { Workflow } from '../../domain/workflow/types/workflow'

export const application = () => {
  const projectPlain = fs.readFileSync(path.resolve('workflows/project.json'), 'utf8')
  const project = JSON.parse(projectPlain) as unknown as Project
  project.collection.forEach(async workflowFilename => {
    const workflowPlain = fs.readFileSync(path.resolve(`workflows/${workflowFilename}`), 'utf8')
    const workflow = JSON.parse(workflowPlain) as unknown as Workflow
    const workflowRunner = new WorkflowRunner()
    workflowRunner.load(workflow)
    await workflowRunner.run()
  })
}
