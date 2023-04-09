
export type IconProps = {
  stroke: string
  x: number
  y: number
}

export default function IconArrows(props: IconProps) {
    return <g fill="none" transform={`translate(${props.x} ${props.y})`}>
        <path d="M11.1389 7.35641L12.6645 5.83087L11.1416 4.30803" stroke={ props.stroke } strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M1.00003 5.83356L5.44235 5.83357" stroke={ props.stroke } strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M8.23292 5.83628L12.6672 5.83358" stroke={ props.stroke } strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2.52554 4.30804L0.999996 5.83359L2.52554 7.35913" stroke={ props.stroke } strokeLinecap="round" strokeLinejoin="round"/>
      </g>
}
