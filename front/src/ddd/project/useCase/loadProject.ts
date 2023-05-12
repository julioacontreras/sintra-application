import fs from 'fs'

import { Project } from '../domain/project'

export function loadProject (filename: string): Project {
  const projectPlain = fs.readFileSync(`../workflows/${filename}`)
  return JSON.parse(projectPlain.toString())
}
