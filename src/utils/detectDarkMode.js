export const detectDarkMode = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme)').matches) {
        return 'dark'
    } else {
        return 'light'
    }
}