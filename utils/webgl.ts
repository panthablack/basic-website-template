export type BuffersCollection = {
  position: WebGLBuffer
}

export const createBuffers = (context: WebGLRenderingContext): BuffersCollection => {
  const positions = [1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, -1.0]
  const position = createPositionBuffer(context, positions)
  if (!position) throw 'could not create buffers'

  return { position }
}

export const createPositionBuffer = (context: WebGLRenderingContext, positions: number[]) => {
  // Create a buffer for the square's positions.
  const positionBuffer = context.createBuffer()

  // Select the positionBuffer as the one to apply buffer operations to from here out.
  context.bindBuffer(context.ARRAY_BUFFER, positionBuffer)

  // Now pass the list of positions into Webcontext to build the
  // shape. We do this by creating a Float32Array from the
  // JavaScript array, then use it to fill the current buffer.
  context.bufferData(context.ARRAY_BUFFER, new Float32Array(positions), context.STATIC_DRAW)

  return positionBuffer
}

export const getContextOrAlert = (canvas: HTMLCanvasElement): WebGLRenderingContext => {
  const context = canvas.getContext('webgl')
  if (!context) {
    alert('Unable to initialize WebGL. Your browser or machine may not support it.')
    throw 'Cannot initialise WebGL - get context failed.'
  }
  return context
}

export const resetRenderingContext = (context: WebGLRenderingContext): WebGLRenderingContext => {
  // Set clear color to black, fully opaque
  context.clearColor(0.0, 0.0, 0.0, 1.0)
  // Clear the color buffer with specified clear color
  context.clear(context.COLOR_BUFFER_BIT)

  return context
}
