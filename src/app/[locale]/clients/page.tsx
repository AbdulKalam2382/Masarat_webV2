import { notFound } from "next/navigation";

// This page has been removed. Accessing /clients will return a 404.
export default function ClientsPage() {
  notFound();
}
