import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';
import favicon from '../../assets/images/jw.png';

interface MetaProps {
  text: string;
  keywords: string;
  description: string;
  title: string;
}

const HeadMeta: FC<MetaProps> = ({ text, keywords = '', description = '', title = '' }) => {
  return (
    <Helmet>
      <title>{text} | Hello Im FrontEnd Developer JW </title>
      <meta name={text} content={`${text} content`} />
      <meta property="og:title" content={text} />

      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta property="og:image" content={favicon} />
      <meta property="og:site_name" content="JW PortFolio" />
      <meta property="og:description" content={description} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={favicon} />
      <meta name="twitter:card" content="summary" />
    </Helmet>
  );
};
export default HeadMeta;
