import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const seoData = {
  '/': {
    title: 'PJN Materiais - Materiais de Construção de Qualidade | Salvador, Pojuca, Bahia',
    description: 'Fornecedor de materiais de construção com agregados, areias e produtos de qualidade. Entrega rápida em Salvador, Pojuca, Bahia. Orçamento gratuito.',
    keywords: 'materiais construção, brita, areia, agregados, Salvador, Pojuca, Bahia, entrega rápida, orçamento'
  },
  '/sobre': {
    title: 'Sobre a PJN Materiais - 10 Anos de Experiência | Materiais de Construção',
    description: 'Conheça a história da PJN Materiais. Mais de 10 anos fornecendo materiais de construção de qualidade com atendimento especializado.',
    keywords: 'sobre pjn materiais, história, experiência, construção civil, qualidade'
  },
  '/produtos': {
    title: 'Produtos - Brita, Areia e Agregados | PJN Materiais',
    description: 'Catálogo completo de produtos: Brita 0, Brita 1, Fino de Quartzo, Areia de Sílica. Materiais certificados com entrega rápida.',
    keywords: 'brita 0, brita 1, fino de quartzo, areia sílica, agregados, materiais certificados'
  },
  '/contato': {
    title: 'Contato - Solicite seu Orçamento | PJN Materiais Salvador, Pojuca, Bahia',
    description: 'Entre em contato com a PJN Materiais. Orçamento gratuito, WhatsApp, telefone. Atendimento especializado em materiais de construção.',
    keywords: 'contato pjn materiais, orçamento, whatsapp, telefone, salvador, pojuca, bahia'
  }
};

const SEOHead = () => {
  const location = useLocation();

  useEffect(() => {
    const currentPageData = seoData[location.pathname as keyof typeof seoData] || seoData['/'];
    
    // Update title
    document.title = currentPageData.title;
    
    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]') as HTMLMetaElement;
    if (metaDescription) {
      metaDescription.content = currentPageData.description;
    }
    
    // Add or update meta keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]') as HTMLMetaElement;
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.name = 'keywords';
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.content = currentPageData.keywords;

    // Update Open Graph tags
    let ogTitle = document.querySelector('meta[property="og:title"]') as HTMLMetaElement;
    if (ogTitle) {
      ogTitle.content = currentPageData.title;
    }

    let ogDescription = document.querySelector('meta[property="og:description"]') as HTMLMetaElement;
    if (ogDescription) {
      ogDescription.content = currentPageData.description;
    }

  }, [location.pathname]);

  return null;
};

export default SEOHead;