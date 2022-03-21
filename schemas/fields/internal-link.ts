import { internalReference } from './internal-reference';
import { internalLinkRender } from '../utils/link-render';
import { getIcon } from '../utils/get-icon';

type ReferenceType = 'post' | 'route' | 'legal' | 'page';

export const internalLink = (referenceTypes: ReferenceType[]) => ({
  name: 'internalLink',
  title: 'Internal Link',
  type: 'object',
  icon: getIcon('internalLink'),
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    internalReference(referenceTypes),
  ],
  blockEditor: {
    icon: getIcon('internalLink'),
    render: internalLinkRender,
  },
});
`"settings": *[_id == "global-settings"]{
    footerNav[]{
      ...,
  navLink{
    linkType == "internal"=> {
          "link": internalReference->{
      includeInSitemap
      internalId
      slug
    },
      linkType,
},
    linkType == "external" => {
      linkType,
      "link": externalLink{...,}
    },
  }
    },
    mainNav[]{...,},
    seo->,
    socials->,
    title
  }`;
