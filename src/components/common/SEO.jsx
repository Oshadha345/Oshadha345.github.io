// =============================================================================
// SEO COMPONENT
// =============================================================================
// 
// Handles all SEO meta tags using react-helmet-async
// Use this component on every page to set page-specific SEO
//
// USAGE:
// <SEO 
//   title="Page Title" 
//   description="Page description"
//   image="/path/to/image.jpg"
// />
//
// =============================================================================

import { Helmet } from 'react-helmet-async'
import { seoData } from '../../data'

// =============================================================================
// SEO COMPONENT
// =============================================================================

const SEO = ({ 
  title,
  description,
  image,
  article = false,
  pathname = ''
}) => {
  // Build full values with defaults
  const seo = {
    title: title ? `${title} | ${seoData.siteTitle}` : seoData.siteTitle,
    description: description || seoData.siteDescription,
    image: `${seoData.siteUrl}${image || seoData.siteImage}`,
    url: `${seoData.siteUrl}${pathname}`,
  }
  
  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta name="keywords" content={seoData.keywords.join(', ')} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={seo.url} />
      
      {/* Open Graph (Facebook, LinkedIn) */}
      <meta property="og:title" content={seo.title} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={article ? 'article' : 'website'} />
      <meta property="og:site_name" content={seoData.siteTitle} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content={seoData.twitterHandle} />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta name="twitter:image" content={seo.image} />
      
      {/* Additional SEO */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
      
      {/* Theme Color for browser */}
      <meta name="theme-color" content="#0f0f1a" />
    </Helmet>
  )
}

export default SEO
