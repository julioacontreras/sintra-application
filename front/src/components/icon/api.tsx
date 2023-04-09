
export type IconProps = {
  stroke?: string
  fill: string
  x: number
  y: number
}

export default function IconApi(props: IconProps) {
    return <g fill="none" transform={`translate(${props.x} ${props.y})`}>
        <path d="M0.884676 7H0L2.55876 0H3.42982L5.98858 7H5.1039L3.02151 1.10742H2.96707L0.884676 7ZM1.21133 4.26563H4.77725V5.01758H1.21133V4.26563Z" fill={ props.fill }/>
        <path d="M7.07401 7V0H9.42861C9.97529 0 10.4222 0.0991211 10.7692 0.297363C11.1186 0.493327 11.3772 0.758789 11.545 1.09375C11.7129 1.42871 11.7968 1.80241 11.7968 2.21484C11.7968 2.62728 11.7129 3.00212 11.545 3.33936C11.3794 3.6766 11.1231 3.94548 10.776 4.146C10.429 4.34424 9.98436 4.44336 9.44222 4.44336H7.75453V3.69141H9.415C9.78928 3.69141 10.0898 3.62646 10.3167 3.49658C10.5435 3.3667 10.708 3.19124 10.8101 2.97021C10.9144 2.74691 10.9666 2.49512 10.9666 2.21484C10.9666 1.93457 10.9144 1.68392 10.8101 1.46289C10.708 1.24186 10.5424 1.06868 10.3133 0.943359C10.0842 0.815755 9.78021 0.751953 9.40139 0.751953H7.91785V7H7.07401Z" fill={ props.fill }/>
        <path d="M14 0V7H13.1562V0H14Z" fill={ props.fill }/>
      </g>
}
