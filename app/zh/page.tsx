import { HomePage } from "@/components/home-page";
import { createSeoMetadata } from "@/lib/seo";

const title = "N Plus Solutions | 软件开发·数字平台·AI";
const description =
  "N Plus Solutions 提供软件开发、数字平台、AI 驱动系统、金融科技、酒店与款待业技术以及面向行业的综合解决方案。";

export const metadata = createSeoMetadata({
  locale: "zh",
  title,
  description,
  absoluteTitle: true,
});

export default function Page() {
  return <HomePage locale="zh" />;
}
