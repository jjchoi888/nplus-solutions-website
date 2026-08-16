import { HomePage } from "@/components/home-page";
import { createSeoMetadata } from "@/lib/seo";

const title = "N Plus Solutions | 소프트웨어 개발·디지털 플랫폼·AI";
const description =
  "N Plus Solutions는 소프트웨어 개발, 디지털 플랫폼, AI 기반 시스템, 핀테크, 호텔·호스피탈리티 기술 및 산업별 통합 솔루션을 설계·개발합니다.";

export const metadata = createSeoMetadata({
  locale: "ko",
  title,
  description,
  absoluteTitle: true,
});

export default function Page() {
  return <HomePage locale="ko" />;
}
