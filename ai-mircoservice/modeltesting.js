const axios = require('axios');
const fs = require('fs');
const path = require('path');

const API_KEY = 'AIzaSyAjlfnV823dapSsAWhtQX0FqHVsO7Cw0Vg';

async function generateImageUsingAPI() {
    const endpoint = 'https://generative-ai.googleapis.com/v1beta2/models/imagen-3.0-generate-002:generate';
    const prompt = 'A serene sunset over a mountain range with a clear blue lake in the foreground.';
    
    try {
        const response = await axios.post(
            endpoint,
            {
                prompt,
                number_of_images: 1,
                mime_type: 'image/jpeg',
            },
            {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${API_KEY}`,
                },
            }
        );

        const images = response.data.generated_images;
        if (images && images.length > 0) {
            const imageBuffer = Buffer.from(images[0].image, 'base64');
            const imagePath = path.join(__dirname, 'generated_image.jpg');
            fs.writeFileSync(imagePath, imageBuffer);
            console.log('Image generated and saved at:', imagePath);
        } else {
            console.error('No images were generated.');
        }
    } catch (error) {
        console.error('Error generating image:', error.response?.data || error.message);
    }
}

generateImageUsingAPI();
