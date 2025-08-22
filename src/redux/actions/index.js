import { createAsyncThunk } from "@reduxjs/toolkit";
import api from "../../utils/api";

export const getLanguages = createAsyncThunk("language/getLanguages", async () => {

    // api dan dil verilerini al
    const res = await api.get("getLanguages")

    // alınan verileri payload olarak belirle

    return res.data.data.languages
})


export const translateText = createAsyncThunk(
    "translate/translateText", async (arg, { getState }) => {
        const { translate } = getState()

        // api a gönderilecek olan parametreleri belirle
        const params = new URLSearchParams()
        params.set("source_language", translate.sourceLang.value)
        params.set("target_language", translate.targetLang.value)
        params.set("text", translate.textToTranslate)

        // api a istek at
        const res = await api.post("/translate", params)

        //   console.log(res.data.data.translatedText)
        // aldığı veriyi payload olarak belirle

        return res.data.data.translatedText
    }
)