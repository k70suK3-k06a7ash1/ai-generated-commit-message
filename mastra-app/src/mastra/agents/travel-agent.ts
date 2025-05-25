import { anthropic } from "@ai-sdk/anthropic";
import { Agent } from "@mastra/core/agent";
import { weatherTool } from "../tools/weather-tool";
 
export const travelAgent = new Agent({
  name: "travel-agent",
  instructions: `ユーザーの旅行の計画を手伝うエージェントです。
  旅行の計画を立てるために、ユーザーの希望や条件を聞き出し、最適な旅行プランを提案します。
  必ず旅行先の天気を確認したうえで、天候に応じた旅行プランを提案してください。`,
  model: anthropic("claude-4-sonnet-20250514"),
  tools: {
    weatherTool,
  },
});