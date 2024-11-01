import openai

openai.api_key = 'your_openai_api_key'  # Replace with your actual API key

def generate_content(prompt):
    response = openai.Completion.create(
        engine="davinci-codex",  # or any other engine
        prompt=prompt,
        max_tokens=300  # Adjust the number of tokens as needed
    )
    return response.choices[0].text.strip()
