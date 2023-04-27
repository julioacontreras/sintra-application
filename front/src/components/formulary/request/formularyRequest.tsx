import { Command } from '@/business/workflow/domain/command'
import { Workflow } from '@/business/workflow/domain/workflow'
import { getDimensions } from '@/business/editor/domain/events/getDimensions'

import style from '@/styles/formularyRequest.module.css'
import { RequestParameter } from './requestParameter'
import ParameterInput from './parmeterInput'

export type FormularyRequestProps = {
  command: Command
  workflow: Workflow
  onSave: (workflow: Workflow) => void
  onHide: () => void
}

export default function RequestFormulary(props: FormularyRequestProps) {
  function changeParameter () {
    // change
  }

  function save () {
    props.onSave(props.workflow)
  }

  const inputKeys = Object.keys(props.command.parameters);
  function getParameter(key: string): RequestParameter {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const params:any = props.command.parameters
    return params[key] as RequestParameter;
  }

  const screen = getDimensions()
  return (
    <div className={style.formulary} style={{ top: (screen.height/2) - 300 }}>
      <div>
        <div className={style.title}>{props.command.title}</div>
        <div className={style.id}>#{props.command.id}</div>
      </div>
      <div className={style.content}>
        <div>
          {inputKeys.map(key => (
            <ParameterInput params={ getParameter(key) } key={key} title={key} onChange={ changeParameter } />
          ))}          
          <div className="group-btn" >
            <button className="btn btn-default" onClick={ props.onHide } >Cancel</button>
            <button className="btn btn-primary" onClick={ save } >Ok</button>
          </div>
        </div>
      </div>
    </div>
  )
}
