import vertexShaderDefault from '@/utils/shaders/default.vert?raw'
import fragmentShaderDefault from '@/utils/shaders/default.frag?raw'

// creates a shader of the given type, uploads the source and compiles it.
export const loadShader = (
  context: WebGLRenderingContext,
  type: GLenum,
  source: string
): WebGLShader | null => {
  // Create shader from context
  const shader: WebGLShader | null = context.createShader(type)
  if (!shader) throw 'Could not create shader'

  // Send the source to the shader object
  context.shaderSource(shader, source)

  // Compile the shader program
  context.compileShader(shader)

  // See if it compiled successfully
  if (!context.getShaderParameter(shader, context.COMPILE_STATUS)) {
    console.error(`An error occurred compiling the shaders: ${context.getShaderInfoLog(shader)}`)
    context.deleteShader(shader)
    return null
  }

  return shader
}

// Initialize a shader program, so WebGL knows how to draw our data
export const loadShaderProgram = (
  context: WebGLRenderingContext,
  vertSource: string,
  fragSource: string
): WebGLProgram | null => {
  // load the shaders
  const vertexShader = loadShader(context, context.VERTEX_SHADER, vertSource)
  const fragmentShader = loadShader(context, context.FRAGMENT_SHADER, fragSource)
  if (!vertexShader || !fragmentShader) throw 'could not load necessary shaders'

  // Create the shader program
  const shaderProgram = context.createProgram()
  if (!shaderProgram) throw 'could not initialise shader program'
  context.attachShader(shaderProgram, vertexShader)
  context.attachShader(shaderProgram, fragmentShader)
  context.linkProgram(shaderProgram)

  // If creating the shader program failed, alert
  if (!context.getProgramParameter(shaderProgram, context.LINK_STATUS)) {
    console.error(
      `Unable to initialize the shader program: ${context.getProgramInfoLog(shaderProgram)}`
    )
    return null
  }

  return shaderProgram
}

export { vertexShaderDefault, fragmentShaderDefault }
