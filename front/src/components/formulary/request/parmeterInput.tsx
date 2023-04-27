import { RequestParameter } from './requestParameter'
import style from '@/styles/parameter.module.css'

export default function ParameterInput(props: {
  title: string;
  params: RequestParameter;
  onChange: () => void
}) {
  return <>
    <div className={style.parameter}>{ props.title }</div>
      <div>
        <div className={style.property}>Route</div>
        <div className={style.value}>
          <input
            type="text"
            defaultValue={props.params.route}
          />
        </div>
      </div>
      <div>
        <div className={style.property}>Method</div>
        <div className={style.value}>
          <input
            type="text"
            defaultValue={
              props.params.method
            }
          />
        </div>
      </div>  
  </>
}
