import {Groq} from "groq-sdk"

const GROQ_APIKEY = import.meta.env.VITE_GROQ_APIKEY

const groq = new Groq({
  apiKey: GROQ_APIKEY,
  dangerouslyAllowBrowser: true
})

export const reqToGroq = async(content) => {
    const reply = await groq.chat.completions.create({
        messages: [{
            role: "user",
            content
        }] ,
        model: "llama3-8b-8192",
    })
    return reply.choices[0].message.content;
}