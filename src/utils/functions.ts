export function extractPublicIdFromUrl(url: string) {
  const regex = /\/v\d+\/([^/]+)\./;
  const match = url.match(regex);

  if (match && match[1]) {
    return match[1]; // Extracted public ID
  } else {
    return null; // Invalid URL format or no match
  }
}
