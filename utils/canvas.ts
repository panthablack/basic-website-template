export const getCanvasFromId = (id: string) => {
  const canvas = document.getElementById(id) as HTMLCanvasElement
  if (canvas?.nodeName === 'CANVAS') return canvas
  else throw 'Cannot initialise WebGL Store - Canvas missing.'
}

export const getContextOrAlert = (canvas: HTMLCanvasElement): WebGLRenderingContext => {
  const context = canvas.getContext('webgl')
  if (!context) {
    alert('Unable to initialize WebGL. Your browser or machine may not support it.')
    throw 'Cannot initialise WebGL - get context failed.'
  }
  return context
}
