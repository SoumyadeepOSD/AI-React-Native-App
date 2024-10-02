const { GoogleGenerativeAI } = require("@google/generative-ai");
const API = process.env.GEMINI_API_KEY!;
const genAI = new GoogleGenerativeAI(API);

type PropmtType = {
    prompt: String;
}

const search = async({prompt}:PropmtType) => {
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    const result = await model.generateContent(["Please write 1 paragraph and 5 points about"+prompt]);
    return result.response.text();
}

export {search};
