export const isHttps = (value) => {
    try {
        return new URL(value).protocol === 'https:'
    } catch {
        return false
    }
}

export const isSafeImage = (value) =>
    !value || value.startsWith('assets/') || isHttps(value)