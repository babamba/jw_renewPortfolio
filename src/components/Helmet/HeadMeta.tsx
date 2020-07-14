import React, { FC } from 'react';
import { Helmet } from 'react-helmet-async';

interface MetaProps {
  text: string;
}

const HeadMeta: FC<MetaProps> = ({ text }) => {
  return (
    <Helmet>
      <title>{text} | Hello Im FrontEnd Developer JW </title>
      <meta name={text} content={`${text} content`} />
    </Helmet>
  );
};

// HeadMeta.propTypes = {
//   text: PropTypes.string
// };

export default HeadMeta;
