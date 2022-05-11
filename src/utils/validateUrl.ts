export default function validateUrl(url: string): string {
  if (url.includes("https://") || url.includes("http://")) {
    return url;
  } else return "";
}
