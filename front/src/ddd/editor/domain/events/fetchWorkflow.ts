
export type SettingsWorkflow = {
  callback: (data: unknown) => void
}

export function useFetchWorkflow (project: string, workflow:string): any {
  function fetchWorkflow (settings: SettingsWorkflow) {
    fetch(
      `/api/workflow?project=${project}&workflow=${workflow}`,
      {
        method: 'GET',
        cache: 'no-cache',
        credentials: 'same-origin',
        headers: {
          'Content-Type': 'application/json'
        },
        referrerPolicy: 'no-referrer'
      },
    ).then(
      (response) => response.json()
    ).then((data) => {
      settings.callback(data)
    })
  }

  return fetchWorkflow
}
