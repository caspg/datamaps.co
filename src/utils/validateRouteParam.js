import mapConfig from 'config/maps'

export const validateEditorParam = (nextState, replace, redirectPath) => {
  const mapTypes = mapConfig.types.map(i => i.code)

  if (mapTypes.indexOf(nextState.params.mapType) < 0) {
    replace({
      pathname: redirectPath,
      state: { nextPathname: nextState.location.pathname },
    })
  }
}
