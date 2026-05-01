export type RunningItemType = "reel" | "post" | "story" | "recap"

export interface RunningItem {
  id: string
  title: string
  type: RunningItemType
  thumbnail: string | null
  embedUrl: string | null
  instagramUrl: string
  description?: string
}

export const runningItems: RunningItem[] = [
  {
    id: "1",
    title: "Post de running",
    type: "post",
    thumbnail: null,
    embedUrl: "https://www.instagram.com/p/DS74OkVEawQ/embed/",
    instagramUrl: "https://www.instagram.com/p/DS74OkVEawQ/",
  },
  {
    id: "2",
    title: "Post de running",
    type: "post",
    thumbnail: null,
    embedUrl: "https://www.instagram.com/p/DXhHRtdkbeW/embed/",
    instagramUrl: "https://www.instagram.com/p/DXhHRtdkbeW/",
  },
  {
    id: "3",
    title: "Reel de running",
    type: "reel",
    thumbnail: null,
    embedUrl: "https://www.instagram.com/reel/DWNHjEmjoMI/embed/",
    instagramUrl: "https://www.instagram.com/reel/DWNHjEmjoMI/",
  },
  {
    id: "4",
    title: "Reel de running",
    type: "reel",
    thumbnail: null,
    embedUrl: "https://www.instagram.com/reel/DTvDePukXfj/embed/",
    instagramUrl: "https://www.instagram.com/reel/DTvDePukXfj/",
  },
  {
    id: "5",
    title: "Reel de running",
    type: "reel",
    thumbnail: null,
    embedUrl: "https://www.instagram.com/reel/DSXsETwkTol/embed/",
    instagramUrl: "https://www.instagram.com/reel/DSXsETwkTol/",
  },
  {
    id: "6",
    title: "Post de running",
    type: "post",
    thumbnail: null,
    embedUrl: "https://www.instagram.com/p/DVWdoElEREa/embed/",
    instagramUrl: "https://www.instagram.com/p/DVWdoElEREa/",
  },
]
