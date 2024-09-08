import { defineStore } from 'pinia'
import { getCanvasFromId, getContextOrAlert } from '@/utils/canvas'

export const useWebGLStore = defineStore('webgl', () => {
  const canvases: Record<string, HTMLCanvasElement> = reactive({})
  const contexts: Record<string, WebGLRenderingContext> = reactive({})

  const start = (targetCanvasId: string): [HTMLCanvasElement, WebGLRenderingContext] => {
    const canvas: HTMLCanvasElement = getCanvasFromId(targetCanvasId)
    const context: WebGLRenderingContext = getContextOrAlert(canvas)

    // init context // ***
    // Set clear color to black, fully opaque
    context.clearColor(0.0, 0.0, 0.0, 1.0)
    // Clear the color buffer with specified clear color
    context.clear(context.COLOR_BUFFER_BIT)

    // add canvas and context to state
    canvases[targetCanvasId] = canvas
    contexts[targetCanvasId] = context

    return [canvas, context]
  }

  return { canvases, contexts, start }
})
