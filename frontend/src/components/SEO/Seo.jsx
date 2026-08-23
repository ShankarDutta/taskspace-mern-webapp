import { Helmet } from "react-helmet-async";

const Seo = ({ title, description, canonical, keywords }) => {
  const SITE_NAME = "React Vite Starter Kit";
  const SITE_URL = import.meta.env.VITE_DOMAIN_NAME;
  const pageTitle = title ? `${title} | ${SITE_NAME}` : SITE_NAME;
  const pageUrl = `${SITE_URL}${canonical}`;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta
        name="description"
        content={description}
      />
      {keywords && (
        <meta
          name="keywords"
          content={keywords}
        />
      )}

      <link
        rel="canonical"
        href={pageUrl}
      />
    </Helmet>
  );
};

export default Seo;
