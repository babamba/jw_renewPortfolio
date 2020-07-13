import { PageType, RobotsContent, MetaTags } from '../interfaces/meta-tags';
import { concatenateStrings } from '../shared/helpers/helper';

export const defaultMetaTags: MetaTags = {
  canonical: `${process.env.DOMAIN_PUBLIC}`,
  description: '김진원 Kim Jin Won | Hello Im FrontEnd Developer JW',
  image: '../static/images/jw.png',
  robots: concatenateStrings(RobotsContent.index, RobotsContent.follow),
  title: 'FrontEnd-DEV-JW',
  type: PageType.website,
};
