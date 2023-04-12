import { Command } from '@/business/workflow/domain/command'
import { Workflow } from '@/business/workflow/domain/workflow'
import { getDimensions } from '@/business/editor/domain/events/getDimensions'

import style from '@/styles/formularyRequest.module.css'

export type FormularyRequestProps = {
  command: Command
  workflow: Workflow
}

export type RequestParameters = {
  dev: {
    route: string
    method: string
  }
}

function getParameters(params: unknown) {
  return params as RequestParameters
}

export default function RequestFormulary(props: FormularyRequestProps) {
  const screen = getDimensions()
  return (
    <div className={style.formulary} style={{ top: (screen.height/2) - 300 }}>
      <div>
        <div className={style.title}>{props.command.title}</div>
        <div className={style.id}>#{props.command.id}</div>
      </div>
      <div className={style.content}>
        <div>
          <div className={style.parameter}>DEV</div>
          <div>
            <div className={style.property}> Route </div>
            <div className={style.value}>
              <input
                type="text"
                defaultValue={getParameters(props.command.parameters).dev.route}
              />
            </div>
          </div>
          <div>
            <div className={style.property}>Method</div>
            <div className={style.value}>
              <input
                type="text"
                defaultValue={
                  getParameters(props.command.parameters).dev.method
                }
              />
            </div>
          </div>
          <div className="group-btn" >
            <button className="btn btn-default" >Cancel</button>
            <button className="btn btn-primary" >Ok</button>
          </div>
        </div>
      </div>
    </div>
  )
}
