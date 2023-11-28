import { Icons } from "@/components/icons/Icons";
import StoryInfoElement from "@/components/story-homepage/StoryInfoElement";

export const renderDifficultyIcons = (input: string) => {
    switch (input) {
      case "easy": {
        const iconArray = Array(1).fill(<></>).map((_, index) => (
          <StoryInfoElement icon={Icons.Skull} />
        ));
        return iconArray;
      }
      case "medium": {
        const iconArray = Array(2).fill(<></>).map((_, index) => (
          <StoryInfoElement icon={Icons.Skull} />
        ));
        return iconArray;
      }
      case "hard": {
        const iconArray = Array(3).fill(<></>).map((_, index) => (
          <StoryInfoElement icon={Icons.Skull} />
        ));
        return iconArray;
      }
      default: {
        return <p>Ingen sværhedsgrad</p>
      }
    }
  }