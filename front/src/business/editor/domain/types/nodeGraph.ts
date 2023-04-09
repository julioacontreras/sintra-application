
export type NodeGraph = {
  id: string,
  type: string,
  size: {
    width: number,
    height: number
  },
  position: {
    x: number, 
    y: number
  },
  data: {
    label: string
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    outputs: any
  }
}
