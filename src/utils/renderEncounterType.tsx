import { Icons } from "@/components/icons/Icons"
import StoryInfoElement from "@/components/story-homepage/StoryInfoElement"

export const renderEncounterType = (input: string) => {
    switch (input) {
      case "Story": {
        // TODO: Change icon to corrent one
        return <StoryInfoElement icon={Icons.Clock} />
      }
      case "Fight": {
        // TODO: Change icon to corrent one
        return <StoryInfoElement icon={Icons.Playtime} />
      }
      case "Death": {
        // TODO: Change icon to corrent one
        return <StoryInfoElement icon={Icons.Skull} />
      }
      case "Other": {
        // TODO: Change icon to corrent one
        return <StoryInfoElement icon={Icons.Nodes} />
      }
      default: {
        return <StoryInfoElement icon={Icons.GitHub} />
      }
    }
  }