import { streamText } from "ai"
import { openai } from "@ai-sdk/openai"

// Mock event data for recommendations
const mockEvents = [
  {
    id: 1,
    title: "Tech Innovation Summit 2024",
    date: "2024-03-15",
    location: "San Francisco, CA",
    category: "Technology",
    price: "$299",
    description: "Join industry leaders for cutting-edge tech discussions",
  },
  {
    id: 2,
    title: "Digital Marketing Masterclass",
    date: "2024-03-20",
    location: "New York, NY",
    category: "Marketing",
    price: "$199",
    description: "Learn advanced digital marketing strategies",
  },
  {
    id: 3,
    title: "Creative Design Workshop",
    date: "2024-03-25",
    location: "Los Angeles, CA",
    category: "Design",
    price: "$149",
    description: "Hands-on workshop for creative professionals",
  },
  {
    id: 4,
    title: "Startup Pitch Competition",
    date: "2024-04-01",
    location: "Austin, TX",
    category: "Business",
    price: "Free",
    description: "Watch innovative startups pitch their ideas",
  },
  {
    id: 5,
    title: "AI & Machine Learning Conference",
    date: "2024-04-10",
    location: "Seattle, WA",
    category: "Technology",
    price: "$399",
    description: "Explore the future of AI and ML technologies",
  },
]

export async function POST(req: Request) {
  const { messages } = await req.json()

  const result = await streamText({
    model: openai("gpt-4o"),
    system: `You are EventBot, an intelligent assistant for event recommendations. You help users discover and register for amazing events.

Available Events:
${mockEvents
  .map(
    (event) =>
      `- ${event.title} (${event.date}) in ${event.location} - ${event.category} - ${event.price}
    Description: ${event.description}`,
  )
  .join("\n")}

Your capabilities:
1. Recommend events based on user preferences (location, category, budget, date)
2. Provide detailed information about specific events
3. Help users understand event registration process
4. Answer questions about event logistics
5. Suggest similar events based on interests

Guidelines:
- Be enthusiastic and helpful
- Provide specific event recommendations when possible
- Include relevant details like dates, locations, and prices
- Ask clarifying questions to better understand user needs
- Use emojis to make responses more engaging
- Keep responses concise but informative
- Always encourage users to register for events they're interested in

If users ask about events not in the list, you can suggest similar alternatives from the available events or mention that you can help them find events that match their interests.`,
    messages,
  })

  return result.toDataStreamResponse()
}
