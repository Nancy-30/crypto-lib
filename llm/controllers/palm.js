const { TextServiceClient } =
  require("@google-ai/generativelanguage").v1beta2;

const { GoogleAuth } = require("google-auth-library");

const MODEL_NAME = "models/text-bison-001";
const API_KEY = process.env.API_KEY;

const client = new TextServiceClient({
  authClient: new GoogleAuth().fromAPIKey(API_KEY),
});



const chat = (req, res) => {
    try {
        const prompt = "what could be the summary of this?";

        client
            .generateText({
                model: MODEL_NAME,
                prompt: {
                    text: prompt,
                },
            })
            .then((result) => {
                const outputText = result[0].candidates[0].output;
                const paragraphs = outputText.split('\n'); 
                console.log(paragraphs);
                res.status(200).json({ message: paragraphs });
            });
    } catch (error) {
        res.status(400).json({ message: error });
    }
}

module.exports = { chat };
