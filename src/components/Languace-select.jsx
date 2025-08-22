import { useDispatch, useSelector } from "react-redux"
import ReactSelect from "react-select"
import { setSource, setTarget, swap } from "../redux/slices/translateSlice"
import { translateText } from "../redux/actions"

const LanguaceSelect = () => {

    const dispatch = useDispatch()
    const { isLoading, languages } = useSelector((store) => store.language)
    const { sourceLang, targetLang, textToTranslate } = useSelector((store) => store.translate)

    const formatted = languages.map((item) => ({
        value: item.code,
        label: item.name,
    })) || []

    // console.log(languages)


    return (
        <div className="flex gap-2 text-black">
            <ReactSelect options={formatted.filter((i) => i.value !== targetLang.value)}
                className="flex-1 " isLoading={isLoading}
                isDisabled={isLoading}
                value={sourceLang}
                onChange={(selected) => {
                    dispatch(setSource(selected))
                }}

            />
            <button
                onClick={() => dispatch(swap())}
                className='bg-zinc-700 py-2 px-6 hover:bg-zinc-800 transition rounded text-white'>Değiş</button>

            <ReactSelect options={formatted.filter((i) => i.value !== sourceLang.value)}
                className="flex-1"
                isLoading={isLoading}
                isDisabled={isLoading}
                value={targetLang}
                onChange={(selected) => {
                    dispatch(setTarget(selected))

                    if (textToTranslate) {
                        dispatch(translateText())
                    }
                }}



            />

        </div>
    )
}

export default LanguaceSelect
