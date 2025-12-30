// lib/toast.ts
import { toast } from '@zerodevx/svelte-toast'

const default_theme = {
  '--toastBackground': '#252525',
  '--toastColor': 'white',
  '--toastBorderRadius': '0.2rem',
  '--toastBarHeight': '4px',
  '--toastBarBackground': '#2F855A',
  '--toastContainerTop': 'auto',
  '--toastContainerRight': 'auto',
  '--toastContainerBottom': '1rem',
  '--toastContainerLeft': '1rem',
  '--toastWidth': '40rem'
}

export const show_info = (msg: string, duration = 1500) => {
  toast.push(msg, {
    duration,
    theme: { ...default_theme }
  })
}

export const show_success = (msg: string, duration = 1500) => {
  toast.push(msg, {
    duration,
    theme: { ...default_theme, '--toastBarBackground': '#2F855A' }
  })
}

export const show_error = (msg: string, duration = 3000) => {
  toast.push(msg, {
    duration,
    theme: { ...default_theme, '--toastBarBackground': '#ef4444' }
  })
}

export const show_warning = (msg: string, duration = 1500) => {
  toast.push(msg, {
    duration,
    theme: { ...default_theme, '--toastBarBackground': '#f59e0b' }
  })
}

const mappings = {
  'warning': show_warning,
  'success': show_success,
  'error': show_error,
  'info':show_info
}

type ToastType = "warning" | "success" | "error" | "info"

export const show_toast = (msg: string, type: ToastType = "success", duration = 1500) => {
  mappings[type]?.(msg, duration)  // no cast needed
}