// imageGenerator.js

const { GoogleGenerativeAI } = require('@google/generative-ai');
const fs = require('fs');
const path = require('path');

// Set up the Generative AI client with your API key
const geneAI = new GoogleGenerativeAI('AIzaSyAjlfnV823dapSsAWhtQX0FqHVsO7Cw0Vg'); // Replace with your actual API key

async function generateImage(prompt) {
    console.log("prmote for generateImage", prompt);
    try {
      const model = geneAI.getGenerativeModel({ model: 'imagen-3.0-generate-002' });

      console.log(model);
  
      // Set up the generation parameters
      const config = {
        prompt: prompt, 
        negative_prompt: 'people', 
        number_of_images: 1, 
        include_rai_reason: true, 
        output_mime_type: 'image/jpeg', 
      };
  
      // Call the generate method to get the generated image
      const result = await model.generate(config); 
  
      // Display the image
      if (result.generated_images && result.generated_images.length > 0) {
        // const generatedImage = result.generated_images[0];
  
        // // Optionally, save the image to a file
        // const imageBuffer = Buffer.from(generatedImage.image, 'base64');
        // const imagePath = path.join(__dirname, 'generated_image.jpg');
  
        // fs.writeFileSync(imagePath, imageBuffer);
        // console.log('Image generated and saved at:', imagePath);
        console.log("hello image is printing");
        return 'hello'; 
      } else {
        throw new Error('No images were generated.');
      }
    } catch (error) {
      console.error('Error generating image:', error);
      throw error;
    }
  }
module.exports = { generateImage };
