import { NavigationItem } from "Types/NavigationItem";

export namespace NAVIGATION {
  export enum PATH {
    PHYSICS_RAPIER_WORLD = "rapier/world",
    MINIGAME = "rapier/mini-game"
  }

  export const ITEMS: Array<NavigationItem> = [
    {
      label: "Physics-Rapier World",
      to: PATH.PHYSICS_RAPIER_WORLD,
    },
    {
      label: "Physics-Rapier Game",
      to: PATH.MINIGAME,
    },
  ];
}
