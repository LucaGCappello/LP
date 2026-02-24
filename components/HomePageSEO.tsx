import React from 'react';
import SEO from './SEO';

const HomePageSEO: React.FC = () => {
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Nexta Intelligence',
    description: 'AI-powered business automation systems that reduce costs, eliminate repetitive tasks, and multiply team productivity with measurable ROI.',
    url: 'https://nexta.agency',
    logo: 'https://nexta.agency/Logo/nexta_no_background.png',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'Sales'
    },
    sameAs: [
      'https://www.linkedin.com/company/nexta-intelligence'
    ]
  };

  const websiteSchema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Nexta Intelligence',
    url: 'https://nexta.agency',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://nexta.agency/blog?search={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://nexta.agency'
      }
    ]
  };

  // Combine all schemas
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [organizationSchema, websiteSchema, breadcrumbSchema]
  };

  return (
    <SEO
      title="Turn Operational Chaos Into AI-Powered Performance | Nexta Intelligence"
      description="We diagnose inefficiencies in your business operations and deploy intelligent automation systems that reduce costs, eliminate repetitive tasks, and multiply team productivity — with measurable ROI."
      structuredData={structuredData}
    />
  );
};

export default HomePageSEO;
