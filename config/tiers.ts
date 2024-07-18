import { siteConfig } from "@/config/site";
import { Tier, TiersEnum } from "@/types/pricing";

export const TIERS_EN: Array<Tier> = [
  {
    key: TiersEnum.OnPremise,
    title: "On-Premise Large Language Model",
    price: "Negotiable",
    href: siteConfig.openSourceURL || "#",
    description:
      "Provides on-premise large language model solutions for enterprises and organizations, ensuring data security and privacy.",
    features: [
      "Enterprise-level support",
      "Access to full code",
      "Local data processing",
      "High security",
      "Customized services",
    ],
    buttonText: "Learn more",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Cloud,
    title: "Cloud Large Language Model",
    price: "Pay-as-you-go",
    href: siteConfig.authors[0].twitter || "#",
    description: "Provides cloud-based large language model solutions for quick integration and usage.",
    features: [
      "No local deployment required",
      "High availability",
      "Scalable on demand",
      "Real-time updates",
      "API access",
    ],
    buttonText: "Learn more",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
];

export const TIERS_ZH: Array<Tier> = [
  {
    key: TiersEnum.OnPremise,
    title: "大语言模型本地部署",
    price: "面议",
    href: siteConfig.openSourceURL || "#",
    description: "为企业和单位提供本地部署的大语言模型解决方案，确保数据安全和隐私。",
    features: [
      "企业级支持",
      "访问全部代码",
      "本地数据处理",
      "高度安全性",
      "定制化服务",
    ],
    buttonText: "了解更多",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Cloud,
    title: "云端使用大语言模型",
    price: "按需计费",
    href: siteConfig.authors[0].twitter || "#",
    description: "通过云端提供的大语言模型解决方案，快速集成和使用。",
    features: [
      "无需本地部署",
      "高可用性",
      "按需扩展",
      "实时更新",
      "API 访问",
    ],
    buttonText: "了解更多",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
];

export const TIERS_JA: Array<Tier> = [
  {
    key: TiersEnum.OnPremise,
    title: "オンプレミス大規模言語モデル",
    price: "交渉可能",
    href: siteConfig.openSourceURL || "#",
    description: "企業と団体向けのオンプレミス大規模言語モデルソリューションを提供し、データのセキュリティとプライバシーを確保します。",
    features: [
      "企業レベルのサポート",
      "全コードへのアクセス",
      "ローカルデータ処理",
      "高いセキュリティ",
      "カスタマイズサービス",
    ],
    buttonText: "詳細を知る",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Cloud,
    title: "クラウド大規模言語モデル",
    price: "従量課金",
    href: siteConfig.authors[0].twitter || "#",
    description: "迅速な統合と使用のためのクラウドベースの大規模言語モデルソリューションを提供します。",
    features: [
      "ローカルデプロイメント不要",
      "高可用性",
      "オンデマンドスケーラビリティ",
      "リアルタイム更新",
      "APIアクセス",
    ],
    buttonText: "詳細を知る",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
];

export const TIERS_AR: Array<Tier> = [
  {
    key: TiersEnum.OnPremise,
    title: "نموذج لغة كبير داخلي",
    price: "قابل للتفاوض",
    href: siteConfig.openSourceURL || "#",
    description: "تقدم حلول نماذج اللغة الكبيرة الداخلية للمؤسسات والجهات، مما يضمن أمان البيانات والخصوصية.",
    features: [
      "دعم على مستوى المؤسسات",
      "الوصول إلى كامل الكود",
      "معالجة البيانات المحلية",
      "أمان عالي",
      "خدمات مخصصة",
    ],
    buttonText: "اعرف المزيد",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Cloud,
    title: "نموذج لغة كبير على السحابة",
    price: "الدفع حسب الاستخدام",
    href: siteConfig.authors[0].twitter || "#",
    description: "تقدم حلول نماذج اللغة الكبيرة على السحابة للتكامل السريع والاستخدام.",
    features: [
      "لا حاجة للنشر المحلي",
      "توفر عالي",
      "توسعية عند الطلب",
      "تحديثات في الوقت الفعلي",
      "الوصول إلى API",
    ],
    buttonText: "اعرف المزيد",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
];

export const TIERS_ES: Array<Tier> = [
  {
    key: TiersEnum.OnPremise,
    title: "Modelo de Lenguaje Grande en Premisa",
    price: "Negociable",
    href: siteConfig.openSourceURL || "#",
    description: "Proporciona soluciones de modelos de lenguaje grande en premisa para empresas y organizaciones, asegurando la seguridad y privacidad de los datos.",
    features: [
      "Soporte a nivel empresarial",
      "Acceso a todo el código",
      "Procesamiento de datos local",
      "Alta seguridad",
      "Servicios personalizados",
    ],
    buttonText: "Saber más",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Cloud,
    title: "Modelo de Lenguaje Grande en la Nube",
    price: "Pagar por uso",
    href: siteConfig.authors[0].twitter || "#",
    description: "Proporciona soluciones de modelos de lenguaje grande basadas en la nube para una rápida integración y uso.",
    features: [
      "No se requiere implementación local",
      "Alta disponibilidad",
      "Escalable bajo demanda",
      "Actualizaciones en tiempo real",
      "Acceso a API",
    ],
    buttonText: "Saber más",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
];

export const TIERS_RU: Array<Tier> = [
  {
    key: TiersEnum.OnPremise,
    title: "Локальная Большая Языковая Модель",
    price: "Договорная",
    href: siteConfig.openSourceURL || "#",
    description: "Предоставляет локальные решения больших языковых моделей для предприятий и организаций, обеспечивая безопасность и конфиденциальность данных.",
    features: [
      "Поддержка на уровне предприятия",
      "Доступ ко всему коду",
      "Локальная обработка данных",
      "Высокая безопасность",
      "Настраиваемые услуги",
    ],
    buttonText: "Узнать больше",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
  {
    key: TiersEnum.Cloud,
    title: "Облачная Большая Языковая Модель",
    price: "Оплата по мере использования",
    href: siteConfig.authors[0].twitter || "#",
    description: "Предоставляет облачные решения больших языковых моделей для быстрой интеграции и использования.",
    features: [
      "Не требует локального развертывания",
      "Высокая доступность",
      "Масштабируемость по требованию",
      "Обновления в реальном времени",
      "Доступ к API",
    ],
    buttonText: "Узнать больше",
    buttonColor: "primary",
    buttonVariant: "solid",
  },
];

interface TiersCollection {
  [key: `TIERS_${string}`]: Array<Tier>;
}

export const ALL_TIERS: TiersCollection = {
  TIERS_EN,
  TIERS_ZH,
  TIERS_JA,
  TIERS_AR,
  TIERS_ES,
  TIERS_RU
};

    // buttonText: "Связаться с нами",
    // buttonColor: "default",
    // buttonVariant: "flat",