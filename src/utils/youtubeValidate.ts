export default function youtubeValidate(url: string): string {
  if (url.includes("www.youtube.com/watch?")) {
    let newUrl = url.replace("watch?v=", "embed/");
    return newUrl;
  } else return url;
}
