import { useEffect } from 'react'

export default function Modal({ onClose, children }) {
    useEffect(() => {
        const handleKey = (e) => {
            if (e.key === 'Escape') onClose()
            }
        window.addEventListener('keydown', handleKey)
        return () => window.removeEventListener('keydown', handleKey)
    }, [onClose])

    return (
        <div
           onClick={(e) => {
            if (e.target === e.currentTarget) onClose()
           }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
            {children}
        </div>
    )

}