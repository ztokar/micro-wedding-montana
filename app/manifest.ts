import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Montana Micro Wedding at North Star Ranch",
    short_name: "Montana Micro Wedding",
    description: "Plan a private Montana micro wedding near Whitefish and Glacier National Park.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf7f2",
    theme_color: "#234530",
    icons: [
      {
        src: "/icon.png",
        sizes: "192x192",
        type: "image/png"
      },
      {
        src: "/brand/icon-512.png",
        sizes: "512x512",
        type: "image/png"
      }
    ]
  };
}
