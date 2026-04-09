export const openExternalLink = (url: string) => {
  const externalWindow = window.open(url, "_blank", "noopener,noreferrer");

  if (externalWindow) {
    externalWindow.opener = null;
    return;
  }

  const fallbackLink = document.createElement("a");
  fallbackLink.href = url;
  fallbackLink.target = "_blank";
  fallbackLink.rel = "noopener noreferrer";
  fallbackLink.style.display = "none";

  document.body.appendChild(fallbackLink);
  fallbackLink.click();
  fallbackLink.remove();
};