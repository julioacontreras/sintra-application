export type ReturnRun = { ids: string[], result: object }

export type Command = {
  id: string
  title: string
  command: string
  parameters: object
  input: {
    dataReceived: string
  }
  outputs: object
  run: (data: object) => Promise<ReturnRun>
}
