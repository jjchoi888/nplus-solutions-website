import { HomePage } from "@/components/home-page";
import { HomeStructuredData } from "@/components/seo-structured-data";
import { createSeoMetadata } from "@/lib/seo";

const title = "N Plus Solutions | Software, Digital Platforms & AI";
const description =
  "N Plus Solutions designs and develops connected software, digital platforms, AI-enabled systems, fintech, hospitality technology, and industry-specific solutions.";

export const metadata = createSeoMetadata({
  locale: "en",
  title,
  description,
  absoluteTitle: true,
});

export default function Page() {
  return (
    <>
      <HomeStructuredData />
      <HomePage locale="en" />
    </>
  );
}
