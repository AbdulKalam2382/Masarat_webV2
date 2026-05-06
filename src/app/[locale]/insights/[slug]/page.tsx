import { notFound } from "next/navigation";
import { getInsightBySlug, getAllSlugs } from "@/lib/insights";
import ArticlePageClient from "./ArticlePageClient";
import type { Metadata } from "next";

interface Props {
  params: { slug: string; locale: string };
}

// ─── Static Generation ──────────────────────────────────────────────────────
export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

// ─── SEO Metadata ────────────────────────────────────────────────────────────
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const article = getInsightBySlug(params.slug);
  if (!article) return { title: "Not Found" };
  return {
    title: article.en.title,
    description: article.en.excerpt,
  };
}

// ─── Page (Server Component) ─────────────────────────────────────────────────
export default function ArticlePage({ params }: Props) {
  const article = getInsightBySlug(params.slug);

  if (!article) {
    notFound();
    // notFound() throws — unreachable, but satisfies TS narrowing
    return null;
  }

  return <ArticlePageClient article={article} />;
}
