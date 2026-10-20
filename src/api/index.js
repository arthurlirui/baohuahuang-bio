import axios from 'axios'

// In dev, the Vite proxy forwards /api and /files to the FastAPI backend on :8000.
// In production, set VITE_API_BASE to the deployed backend URL (e.g. https://api.example.com/api).
const baseURL = import.meta.env.VITE_API_BASE || '/api'

const http = axios.create({
  baseURL,
  timeout: 180000,
})

/**
 * Resolve a backend-relative URL (e.g. "/files/xxx.jpg") to a fully-qualified
 * URL that works in production. In dev the Vite proxy handles /files, so the
 * relative path is returned as-is. In production the backend origin is derived
 * from VITE_API_BASE by stripping the trailing "/api".
 */
export function fileUrl(path) {
  if (!path) return path
  // Already a full URL (https://...) — return as-is
  if (/^https?:\/\//.test(path)) return path
  // In dev (no VITE_API_BASE), /files is proxied by Vite
  const apiBase = import.meta.env.VITE_API_BASE
  if (!apiBase) return path
  // Derive backend origin: strip trailing /api
  const backendOrigin = apiBase.replace(/\/api\/?$/, '')
  return `${backendOrigin}${path.startsWith('/') ? '' : '/'}${path}`
}

export async function getHealth() {
  const { data } = await http.get('/health')
  return data
}

export async function getStyles() {
  const { data } = await http.get('/styles')
  return data
}

export async function getStyle(id) {
  const { data } = await http.get(`/styles/${id}`)
  return data
}

export async function generateImage(payload) {
  const { data } = await http.post('/generate', payload)
  return data
}

export async function getArticles() {
  const { data } = await http.get('/teaching')
  return data
}

export async function getArticle(id) {
  const { data } = await http.get(`/teaching/${id}`)
  return data
}

export async function getGallery(limit = 50) {
  const { data } = await http.get('/gallery', { params: { limit } })
  return data
}

export async function getPrompts(category = null) {
  const params = category ? { category } : {}
  const { data } = await http.get('/prompts', { params })
  return data
}

export async function getPromptCategories() {
  const { data } = await http.get('/prompts/categories')
  return data
}

export async function getProviders() {
  const { data } = await http.get('/providers')
  return data
}

export default http
