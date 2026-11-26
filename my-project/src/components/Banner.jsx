import EditableText from "./EditableText";
import { resolveIcon } from "../data/icons";

export default function Banner({ banner, editing, onChange, onPickIcon }) {
    const iconSrc = resolveIcon(banner.icon)

    return (
        <div className="relative mx-auto aspect-[4/7] w-67 md:w-72 xl:absolute xl:right-12 xl:top-6 xl:mx-0 xl:w-64">
            <img src="assets/bannerfat1.png" alt="" className="absolute inset-0 h-full w-full"/>

            <div className="absolute inset-x-8 top-10 bottom-24 flex flex-col items-center gap-3 overflow-hidden text-wood-ink">
                {editing ? (
                    <button
                onClick={onPickIcon}
                className="h-14 shrink-0 rounded border border-dashed border-wood-ink/60 px-2 text-xs"
                >
                    {iconSrc ? <img src={iconSrc} alt="" className="h-full w-auto" /> : 'icon' }
                </button>
                ) : (
                    iconSrc && <img src={iconSrc} alt="" className="h-14 w-auto shrink-0" />
                )}

                <EditableText
                as="h3"
                editing={editing}
                value={banner.heading}
                onChange={(v) => onChange({ heading: v})}
                className="text-center text-lg uppercase tracking-widest"
                />
                <EditableText
                as="p"
                multiline
                editing={editing}
                value={banner.text}
                onChange={(v) => onChange({ text: v})}
                className="text-center text-sm whitespace-pre-line"
                />


            </div>
        </div>
    )
}