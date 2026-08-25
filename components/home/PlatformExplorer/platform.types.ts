import type { PlatformData } from "@/data/platformData";

export type { PlatformData };

export interface PlatformTabsProps {
  platforms: PlatformData[];
  selectedPlatform: PlatformData;
  onSelect: (platform: PlatformData) => void;
}

export interface PlatformShowcaseProps {
  platform: PlatformData;
}

export interface PlatformStatsProps {
  platform: PlatformData;
}

export interface PlatformCTAProps {
  platform: PlatformData;
}