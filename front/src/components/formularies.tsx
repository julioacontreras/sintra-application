import { Workflow } from '@/business/workflow/domain/workflow';
import { useState, useEffect } from 'react';
import RequestFormulary from '@/components/formulary/formularyRequest'

import style from '@/styles/formulary.module.css'

export type NodesProps = {
  workflow: Workflow
  commandId: string
  setCommandId: (commandId: string) => void
}

export default function Formularies (props: NodesProps) {
  const [ isVisibleFormulary, setIsVisibleFormulary ] = useState(false)

  function hideFormulary () {
    props.setCommandId('')
    setIsVisibleFormulary(false)
  }

  function getFormulary () {
    const command = props.workflow.commands.find(el => el.id === props.commandId)
    if (command) {
      return <RequestFormulary command={command} workflow={props.workflow} ></RequestFormulary>
    }
    return <></>
  }

  useEffect(() => {
    if (props.commandId) {
      setIsVisibleFormulary(true)
    }
  }, [isVisibleFormulary, props.commandId])

  return (
    <>
    {isVisibleFormulary ? 
      <>
        <div className={style.container}>
          <div className={style.screenShadow} onClick={ hideFormulary }></div>
          { getFormulary() }
        </div>
      </> :
      <></>
    }
    </>
  );
}
