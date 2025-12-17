export default async function handler(req, res) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method Not Allowed' });
    }

    const { messages } = req.body; // Expecting an array of messages
    const apiKey = process.env.GROQ_API_KEY;

    if (!apiKey) {
        return res.status(500).json({ error: 'Missing API Key configuration' });
    }

    try {
        const systemMessage = {
            role: "system",
            content: "You are a helpful healthcare assistant. Maintain conversational context. Provide general possible causes for symptoms. Limit responses to 4-6 lines. Avoid lengthy paragraphs and be concise. Do NOT diagnose. Always advise consulting a doctor."
        };

        // Prepend system message to the conversation history
        const conversation = [systemMessage, ...messages];

        const response = await fetch('https://api.groq.com/openai/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: "llama-3.1-8b-instant",
                messages: conversation,
                temperature: 0.3,
                max_tokens: 150
            })
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Groq API Error:', errorText);
            return res.status(500).json({ error: 'Failed to fetch response' });
        }

        const data = await response.json();
        const reply = data.choices[0]?.message?.content || "No response received.";

        return res.status(200).json({ reply });

    } catch (error) {
        console.error('Server Error:', error);
        return res.status(500).json({ error: 'Internal Server Error' });
    }
}
