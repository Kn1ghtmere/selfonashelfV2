import { itemTypes } from '../itemTypes'

export default function ModalContent({ item }) {
  const View = itemTypes[item.type]?.View
  if (!View) return null
  return <View content={item.content} title={item.title} />
}