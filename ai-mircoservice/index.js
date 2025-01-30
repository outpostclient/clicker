const express = require("express");
const { GoogleGenerativeAI } = require("@google/generative-ai");
const app = express();
const port = 5000;
const { generateImage } = require("./imageGenerator");

app.use(express.json());

const geneAI = new GoogleGenerativeAI(
  "AIzaSyAjlfnV823dapSsAWhtQX0FqHVsO7Cw0Vg"
);
const model = geneAI.getGenerativeModel({ model: "gemini-1.5-flash" });

app.post("/generate-content", async (req, res) => {
  const { prompt } = req.body;

  const properPrompt = `Generate a high-quality blog post based on the title: "${prompt}". The content should be engaging, human-like, and optimized for search engines.
Ensure the following:

Include relevant and trending SEO keywords naturally throughout the content.
Use headings (H3,h4) and subheadings to structure the blog effectively.
Write in a friendly and conversational tone, appealing to readers.
Add short, easy-to-read paragraphs with proper spacing.
Include bold keywords and phrases to emphasize important points.
in the last of content with long tail keywords heading write all the keywords with comma separated.
Provide a meta description (under 160 characters) summarizing the blog for search engines.
Conclude with a call-to-action (CTA) encouraging readers to engage (e.g., comment, share, or explore related content).
Use HTML formatting for headings, bold text, and links.`;
  try {
    const result = await model.generateContent(properPrompt);
    res.json({ description: result.response.text() });
  } catch (error) {
    console.log("error occure in content generation");
    res.status(500).json({ error: "Something went worng" });
  }
});

// app.post("/image-generator", async (req, res) => {
//   // const { prompt } = req.body;
//   // console.log("This is my prompt given by the user or client", prompt);
//   const prompt = 'generate the image of ai in 2025';
//   console.log("i am hitting");
//   try {
//     const imagePath = await generateImage(prompt);
//     res.sendFile(imagePath, { root: __dirname__ }, (err) => {
//       if (err) {
//         console.log("Error sending image:", err);
//         res.status(500).send("Error generating or sending image");
//       }
//     });
//   } catch (error) {
//     res.status(500).send("Error generating image");
//   }
// });

app.listen(port, () => {
  console.log(`AI microservice running on http://localhost:${port}`);
});

// // async function generateContent() {
// //   const prompt =
// //     "The Hidden Cost of Cheap Clothes: Ethical Concerns in Fashion";

// // }

// // generateContent();
