export default function ImageView({ content, title }) {
  return (
    <img
      src={content.src}
      alt={title}
      className="max-h-[85vh] max-w-[90vw] object-contain"
    />
  )
}