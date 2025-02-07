import { APIContext } from "astro";

export async function GET({ request }: APIContext) {
  const userProfile = {
    id: 1,
    name: "Bruno",
    email: "bruno@example.com",
    bio: "Astro developer exploring full-stack projects!",
    avatar: "https://live.staticflickr.com/65535/54306862431_fd3337cdbd_c.jpg",
  };

  return new Response(JSON.stringify(userProfile), {
    headers: { "Content-Type": "application/json" },
  });
}
