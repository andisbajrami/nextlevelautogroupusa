import { SeoHead } from "@/components/seo/SeoHead";
import Layout from "@/components/layout/Layout";
import HomeHero from "@/components/home/HomeHero";
import TrustLicenseBar from "@/components/home/TrustLicenseBar";
import VehicleBrandsSection from "@/components/home/VehicleBrandsSection";
import ServicesRibbon from "@/components/home/ServicesRibbon";
import WhyTeamSection from "@/components/home/WhyTeamSection";
import WarrantySection from "@/components/home/WarrantySection";
import ClientStoriesSection from "@/components/home/ClientStoriesSection";
import SignatureProjectsSection from "@/components/home/SignatureProjectsSection";
import AboutHomeSection from "@/components/home/AboutHomeSection";
import CommunityDiscountBand from "@/components/home/CommunityDiscountBand";
import ServiceAreasHome from "@/components/home/ServiceAreasHome";
import HomeFaqSection from "@/components/home/HomeFaqSection";
import NewsletterSignup from "@/components/home/NewsletterSignup";
import CTABannerSection from "@/components/home/CTABannerSection";
import LeadContactSection from "@/components/home/LeadContactSection";
import EmergencyFinancingBand from "@/components/home/EmergencyFinancingBand";
import Reveal from "@/components/animations/Reveal";
import { useSiteContent } from "@/contexts/SiteContentContext";
import { HOME_SEO, buildAutoDealerSchema, buildFaqSchema, buildWebSiteSchema } from "@/lib/seo";

const Index = () => {
  const { sectionVisibility, faqItems } = useSiteContent();

  return (
    <Layout>
      <SeoHead
        title={HOME_SEO.title}
        description={HOME_SEO.description}
        path="/"
        imageAlt="Used cars and vehicles at NextLevel Auto Group USA in Orlando, FL"
        jsonLd={[buildAutoDealerSchema(), buildWebSiteSchema(), buildFaqSchema(faqItems)].filter(Boolean) as Record<string, unknown>[]}
      />

      {sectionVisibility["home.hero"] && (
        <Reveal direction="zoom" duration={700}>
          <HomeHero />
        </Reveal>
      )}
      {sectionVisibility["home.trustBar"] && (
        <Reveal delay={40}>
          <TrustLicenseBar />
        </Reveal>
      )}
      {sectionVisibility["home.vehicleBrands"] !== false && (
        <Reveal delay={60}>
          <VehicleBrandsSection />
        </Reveal>
      )}
      {sectionVisibility["home.servicesRibbon"] && (
        <Reveal delay={90}>
          <ServicesRibbon />
        </Reveal>
      )}
      {sectionVisibility["home.whyTeam"] && (
        <Reveal delay={120}>
          <WhyTeamSection />
        </Reveal>
      )}
      {sectionVisibility["home.warranty"] !== false && (
        <Reveal delay={150}>
          <WarrantySection />
        </Reveal>
      )}
      <Reveal delay={160}>
        <CommunityDiscountBand />
      </Reveal>
      {sectionVisibility["home.clientStories"] && (
        <Reveal delay={180}>
          <ClientStoriesSection />
        </Reveal>
      )}
      {sectionVisibility["home.signatureProjects"] && (
        <Reveal delay={210}>
          <SignatureProjectsSection />
        </Reveal>
      )}
      {sectionVisibility["home.aboutHome"] !== false && (
        <Reveal delay={240}>
          <AboutHomeSection />
        </Reveal>
      )}
      {sectionVisibility["home.serviceAreas"] && (
        <Reveal delay={270}>
          <ServiceAreasHome />
        </Reveal>
      )}
      {sectionVisibility["home.faq"] !== false && (
        <Reveal delay={300}>
          <HomeFaqSection />
        </Reveal>
      )}
      <Reveal delay={305}>
        <EmergencyFinancingBand />
      </Reveal>
      <Reveal delay={310}>
        <NewsletterSignup variant="section" />
      </Reveal>
      {sectionVisibility["home.ctaBanner"] !== false && (
        <Reveal delay={320}>
          <CTABannerSection />
        </Reveal>
      )}
      {sectionVisibility["home.leadContact"] && (
        <Reveal delay={340}>
          <LeadContactSection />
        </Reveal>
      )}
    </Layout>
  );
};

export default Index;
