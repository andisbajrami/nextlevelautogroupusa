import { Helmet } from "react-helmet-async";
import { absoluteUrl, DEFAULT_OG_IMAGE, type PageSeo } from "@/lib/seo";
import { COMPANY } from "@/data/siteData";

type SeoHeadProps = {
  title: string;
  description: string;
  path: string;
  image?: string;
  imageAlt?: string;
  type?: "website" | "article";
  noindex?: boolean;
  jsonLd?: Record<string, unknown>[];
};

export function SeoHead({
  title,
  description,
  path,
  image,
  imageAlt,
  type = "website",
  noindex = false,
  jsonLd,
}: SeoHeadProps) {
  const url = absoluteUrl(path);
  const ogImage = absoluteUrl(image || DEFAULT_OG_IMAGE);
  const ogImageAlt = imageAlt || `${COMPANY.name} — Orlando, FL`;

  return (
    <Helmet>
      <html lang="en" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? "noindex, nofollow" : "index, follow"} />
      <meta name="author" content={COMPANY.name} />
      <meta property="og:site_name" content={COMPANY.name} />
      <meta property="og:locale" content="en_US" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={ogImageAlt} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      <meta name="twitter:image:alt" content={ogImageAlt} />
      <link rel="alternate" hrefLang="en-us" href={url} />
      {jsonLd?.map((data, index) => (
        <script key={`${data["@type"] || "ld"}-${index}`} type="application/ld+json">
          {JSON.stringify(data)}
        </script>
      ))}
    </Helmet>
  );
}

export function pageToSeoHead(page: PageSeo) {
  return (
    <SeoHead
      title={page.title}
      description={page.description}
      path={page.path}
      image={page.image}
      imageAlt={page.imageAlt}
      type={page.type}
      noindex={page.noindex}
      jsonLd={page.jsonLd}
    />
  );
}
