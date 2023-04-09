export type ReturnRun = { ids: string[], result: object }

export type Command = {
  id: string
  title: string
  command: string
  parameters: object
  input: {
    dataReceived: string
  }
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  outputs: any
  run: (data: object) => Promise<ReturnRun>
}
