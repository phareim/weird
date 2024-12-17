const OpenAI  = require("openai");

const openai = new OpenAI({
	apiKey: process.env.OPENAI_KEY,
});

async function generatePoem(theme, numberOfLines, prompt) {
    try {
        const response = await openai.chat.completions.create({
            model: "gpt-4-turbo",
            messages: [
				{
				  "role": "user",
				  "content": [
					{
					  "type": "text",
					  "text": prompt
					}
				  ]
				}
			  ],
            temperature: 1,
			max_tokens: 256,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0,
        });

        // Log the generated poem to the console
        console.log( response.choices[0].message.content );
		
    } catch (error) {
        console.error('Error generating poem:', error);
    }
}

// Get the theme and optionally the number of lines from the command line arguments
const theme = process.argv[2] || 'nature';
const numberOfLines = process.argv[3] || 5;
const prompt = `Write a ${numberOfLines}-line poem about ${theme}.`;

// Call the function to generate the poem
generatePoem(theme, numberOfLines, prompt);
