import { useEffect } from "react";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
}

const BASE_URL = "https://asadullah.dev";

function setMeta(name: string, content: string, attr = "name") {
  let el = document.querySelector(`meta[${attr}="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function setLink(rel: string, href: string) {
  let el = document.querySelector(`link[rel="${rel}"]`);
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", rel);
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function useSEO({ title, description, path = "/" }: SEOProps) {
  useEffect(() => {
    const fullTitle = title.includes("Asad Ullah") ? title : `${title} | Asad Ullah`;
    document.title = fullTitle;

    setMeta("description", description);
    setMeta("robots", "index, follow");

    setMeta("og:type", "website", "property");
    setMeta("og:title", fullTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:image", "/asad.jpg", "property");
    setMeta("og:url", `${BASE_URL}${path}`, "property");
    setMeta("og:site_name", "Asad Ullah Portfolio", "property");

    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", fullTitle);
    setMeta("twitter:description", description);
    setMeta("twitter:image", "/asad.jpg");

    setLink("canonical", `${BASE_URL}${path}`);
  }, [title, description, path]);
}
