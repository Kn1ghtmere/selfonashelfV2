import JSZip from 'jszip'
import { resolveIcon } from '../data/icons'
import { DEFAULT_BANNER } from './constants'

const ALWAYS = ['assets/wood.png', 'assets/natural-paper.png', DEFAULT_BANNER]
const isLocal = (s) =>
  typeof s === 'string' && (s.startsWith('assets/') || s.startsWith('data:image/'))
const extOf = (dataUrl) =>
  dataUrl.slice(11, dataUrl.indexOf(';')).replace('jpeg', 'jpg')

export async function exportShelf(shelf) {
  const zip = new JSZip()
  const seen = new Map() // original url -> path inside the zip
  const jobs = []

  const register = (value) => {
    if (!seen.has(value)) {
      const path = value.startsWith('assets/')
        ? value
        : `assets/upload-${seen.size}.${extOf(value)}`
      seen.set(value, path)
      jobs.push(
        fetch(value)
          .then((r) => {
            if (!r.ok || !r.headers.get('content-type')?.startsWith('image/'))
              throw new Error(`Missing file: ${value}`)
            return r.blob()
          })
          .then((blob) => zip.file(path, blob)),
      )
    }
    return seen.get(value)
  }

  const rewrite = (v) => {
    if (typeof v === 'string') return isLocal(v) ? register(v) : v
    if (Array.isArray(v)) return v.map(rewrite)
    if (v && typeof v === 'object')
      return Object.fromEntries(Object.entries(v).map(([k, x]) => [k, rewrite(x)]))
    return v
  }

  const normalized = {
    ...shelf,
    banner: shelf.banner && { ...shelf.banner, icon: resolveIcon(shelf.banner.icon)},
    shelves: shelf.shelves.map((s) => ({
      ...s,
      items: s.items.map((it) => ({ ...it, icon: resolveIcon(it.icon) })),
    })),
  }

  const data = rewrite(normalized)
  ALWAYS.forEach(register)
  await Promise.all(jobs)

  const template = await (await fetch('viewer-template.html')).text()
  const json = JSON.stringify(data).replace(/</g, '\\u003c')
  zip.file('index.html', template.replace('__SHELF_DATA__', () => json))

  const blob = await zip.generateAsync({ type: 'blob' })
  const a = document.createElement('a')
  a.href = URL.createObjectURL(blob)
  a.download = 'my-shelf.zip'
  a.click()
  URL.revokeObjectURL(a.href)
}