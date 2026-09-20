import { useEffect, useRef, useState } from 'react'

const navItems = ['Home', 'Projects', 'About', 'Contact']

function UpRightArrow() {
  return (
    <svg
      className="cta-arrow"
      viewBox="0 0 20 20"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M4.5 15.5 15.5 4.5M7 4.5h8.5V13" />
    </svg>
  )
}

const projects = [
  {
    file: 'wedge-bbq.jpg',
    title: 'The Wedge BBQ Logo',
    slug: 'the-wedge-bbq-logo',
  },
  {
    file: 'money-musical.jpg',
    title: 'Money The Musical Logo',
    slug: 'money-the-musical-logo',
  },
  {
    file: 'Big Energy Logo.jpg',
    title: 'Big Energy Logo',
    slug: 'big-energy-logo',
  },
  {
    file: 'Sefanya Printworks.jpg',
    title: 'Sefanya Printworks Logo',
    slug: 'sefanya-printworks-logo',
  },
  { file: 'Ada Logo.jpg', title: 'ADA Logo', slug: 'ada-logo' },
  {
    file: 'Pace Peace Logo.jpg',
    title: 'PacePeace Logo',
    slug: 'pacepeace-logo',
  },
  { file: 'Satushop Logo.jpg', title: 'Satushop Logo', slug: 'satushop-logo' },
  { file: 'SGN Logo.jpg', title: 'SGN Logo', slug: 'sgn-logo' },
  {
    file: 'Shopee Campaign.jpg',
    title: 'Shopee Campaign',
    slug: 'shopee-campaign',
  },
  {
    file: 'Lazada Campaign.jpg',
    title: 'Lazada Campaign',
    slug: 'lazada-campaign',
  },
]

const allProjects = [
  ...projects,
  {
    file: 'slippers-design/thumbnail.avif',
    title: 'Slippers Design',
    slug: 'slippers-design',
  },
  {
    file: 'web-banner/thumbnail.webp',
    title: 'Web Banner Design',
    slug: 'web-banner-design',
  },
  {
    file: 'hope-for-lupus-design/thumbnail.webp',
    title: 'Hope for Lupus — Slippers Design',
    slug: 'hope-for-lupus-slippers-design',
  },
  {
    file: 'DOT-slippers-design/thumbnail.webp',
    title: 'Department of Tourism x Banana Peel Flip Flop Design',
    slug: 'department-of-tourism-banana-peel-flip-flop-design',
  },
  {
    file: 'daikin-graphics/thumbnail.webp',
    title: 'Daikin Philippines Graphic',
    slug: 'daikin-philippines-graphic',
  },
  {
    file: 'asocial-logo/thumbnail.avif',
    title: 'Asocial Logo',
    slug: 'asocial-logo',
  },
  {
    file: 'kazi-logo/thumbnail.avif',
    title: 'Kazzi Logo',
    slug: 'kazzi-logo',
  },
  {
    file: 'socialmedia-post/thumbnail.avif',
    title: 'Social Media Post',
    slug: 'social-media-post',
  },
  {
    file: 'packaging-design/thumbnail.webp',
    title: 'Packaging Design',
    slug: 'packaging-design',
  },
  {
    file: 'printing-maker/thumbnail.webp',
    title: 'Printing Maker Logo',
    slug: 'printing-maker-logo',
  },
  {
    file: 'promo-collateral/thumbnail.webp',
    title: 'Promo Collateral',
    slug: 'promo-collateral',
  },
  {
    file: 'hangtag-design/thumbnail.avif',
    title: 'Hangtag Design',
    slug: 'hangtag-design',
  },
  {
    file: '3d-module/thumbnail.webp',
    title: '3D Module Design',
    slug: '3d-module-design',
  },
  {
    file: 'hug-coffee/03.jpg',
    title: 'Hug & Coffee Logo',
    slug: 'hug-and-coffee-logo',
  },
]

const featuredProjects = [
  {
    file: 'wedge-bbq.jpg',
    title: 'The Wedge BBQ',
    slug: 'the-wedge-bbq-logo',
    category: 'Logo Design / Branding',
  },
  {
    file: 'money-musical.jpg',
    title: 'Money The Musical',
    slug: 'money-the-musical-logo',
    category: 'Logo Design / Branding',
  },
  {
    file: 'hope-for-lupus-design/thumbnail.webp',
    title: 'Hope For Lupus x Banana Peel',
    slug: 'hope-for-lupus-slippers-design',
    category: 'Product Design / Campaign',
  },
  {
    file: 'DOT-slippers-design/thumbnail.webp',
    title: 'Department of Tourism x Banana Peel',
    slug: 'department-of-tourism-banana-peel-flip-flop-design',
    category: 'Product Design / Campaign',
  },
  {
    file: 'Ada Logo.jpg',
    title: 'ADA Logo',
    slug: 'ada-logo',
    category: 'Logo Design / Branding',
  },
  {
    file: 'daikin-graphics/thumbnail.webp',
    title: 'Daikin Philippines',
    slug: 'daikin-philippines-graphic',
    category: 'Graphic Design / Campaign',
  },
  {
    file: 'Shopee Campaign.jpg',
    title: 'Shopee Campaign',
    slug: 'shopee-campaign',
    category: 'Campaign Design',
  },
  {
    file: 'Lazada Campaign.jpg',
    title: 'Lazada Campaign',
    slug: 'lazada-campaign',
    category: 'Campaign Design',
  },
  {
    file: 'Big Energy Logo.jpg',
    title: 'Big Energy Logo',
    slug: 'big-energy-logo',
    category: 'Logo Design / Branding',
  },
  {
    file: 'Pace Peace Logo.jpg',
    title: 'PacePeace Logo',
    slug: 'pacepeace-logo',
    category: 'Logo Design / Branding',
  },
]

const projectDetails = {
  'the-wedge-bbq-logo': {
    title: 'The Wedge BBQ Logo',
    titleLines: ['The Wedge', 'BBQ Logo'],
    category: 'Logo Design / Branding',
    image: '/image/projects/wedge-bbq.jpg',
    overview: {
      statement:
        'The Wedge BBQ is a Newport Beach BBQ concept with a fresh take on the usual BBQ identity.',
      body: [
        'The goal was to move away from the traditional Texas-style BBQ look and bring in more of the California coastal lifestyle. The logo combines a bold, expressive wordmark with a flame detail built into the lettering, connecting the brand to both BBQ and the laid-back energy of Newport Beach.',
        'The overall direction is simple, bold, and designed to work across signage, apparel, packaging, and other brand applications.',
      ],
      closing: 'A BBQ brand with a little more California in it.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/wedge/A-Board Mockup.jpg',
            alt: 'The Wedge BBQ A-board sign application',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/wedge/BNM-NP-001-B.jpg',
            alt: 'The Wedge BBQ vertical brand application',
            position: 'center center',
          },
          {
            src: '/image/projects/wedge/BNM-SH-001.jpg',
            alt: 'The Wedge BBQ shirt brand application',
            position: 'center 58%',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/wedge/Scene _8.jpg',
            alt: 'The Wedge BBQ identity in context',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/wedge/Mockup_ 3000 x 4500 px.jpg',
            alt: 'The Wedge BBQ portrait mockup',
            position: 'center 42%',
          },
          {
            src: '/image/projects/wedge/Plastic Bag Mockup 01.jpg',
            alt: 'The Wedge BBQ packaging application',
            position: 'center center',
          },
        ],
      },
    ],
    nextProject: {
      title: 'Money The Musical',
      href: '/projects/money-the-musical-logo',
    },
  },
  'money-the-musical-logo': {
    title: 'Money The Musical',
    titleLines: ['Money The', 'Musical'],
    category: 'Logo Design / Branding',
    image: '/image/projects/money-musical.jpg',
    overview: {
      statement:
        'Money The Musical is built around one provocative idea: “The dollar is a big, fat liar.”',
      body: [
        'The show challenges the belief that holding dollars is the safest way to preserve wealth. Instead, it encourages audiences to think beyond cash toward assets, ownership, real estate, stocks, gold, silver, and other ways of building and preserving value.',
        'The concept also compares money to a vampire—something that quietly drains you over time by eating away at your purchasing power.',
      ],
      closing:
        'A bold, humorous, and unconventional take on money, wealth, and ownership.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/money-musical/money-musical thumbnails.jpg',
            alt: 'Money The Musical identity presentation',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/money-musical/Apple Watch Ultra.jpg',
            alt: 'Money The Musical Apple Watch application',
            position: 'center center',
          },
          {
            src: '/image/projects/money-musical/Free iOS 26 App icon Mockup M02 —by MockupsVault.jpg',
            alt: 'Money The Musical mobile app icon application',
            position: 'center 52%',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/money-musical/FREE_The-Urbans-Night-Billboards-Mockup-Series_01.jpg',
            alt: 'Money The Musical billboard campaign',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/money-musical/LED WALL MOCKUP-2.jpg',
            alt: 'Money The Musical LED wall application',
            position: '42% center',
          },
          {
            src: '/image/projects/money-musical/iPad Mockup.jpg',
            alt: 'Money The Musical tablet application',
            position: 'center center',
          },
        ],
      },
    ],
    nextProject: {
      title: 'Big Energy Logo',
      href: '/projects/big-energy-logo',
    },
  },
  'big-energy-logo': {
    title: 'Big Energy Logo',
    titleLines: ['Big Energy', 'Logo'],
    category: 'Logo Design / Branding',
    image: '/image/projects/Big Energy Logo.jpg',
    overview: {
      statement:
        'Big Energy is a corporate brand identity created for a modern energy supplier, built around the idea of power, reliability, and forward movement.',
      body: [
        'The identity centers on a bold geometric symbol where two angled forms create a lightning bolt through negative space. A vibrant yellow-orange brings energy and innovation to the mark, while the dark contrasting form communicates stability, safety, and trust.',
        'The visual system was designed to stay clear and recognizable across everything from corporate stationery and digital platforms to large-scale applications and environmental graphics. Clean typography, strong contrast, and a simple geometric approach give Big Energy a modern identity that feels both established and future-focused.',
      ],
      closing: 'Powering a modern identity built for what comes next.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/big-energy/CONFERENCE SCREEN MOCKUP.jpg',
            alt: 'Big Energy conference screen application',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/big-energy/Apple Watch Ultra.jpg',
            alt: 'Big Energy Apple Watch application',
            position: 'center center',
          },
          {
            src: '/image/projects/big-energy/Business Card thumbnail.jpg',
            alt: 'Big Energy business card application',
            position: 'center center',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/big-energy/LED BILLBOARD MOCKUP.jpg',
            alt: 'Big Energy LED billboard application',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/big-energy/MACBOOK SHOWCASE SCREEN MOCKUP.jpg',
            alt: 'Big Energy website shown on a laptop',
            position: 'center center',
          },
          {
            src: '/image/projects/big-energy/Mockup1.jpg',
            alt: 'Big Energy mobile app application',
            position: '60% center',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/big-energy/Screen Mockup.jpg',
            alt: 'Big Energy environmental screen applications',
          },
        ],
      },
    ],
    nextProject: {
      title: 'Sefanya Printworks Logo',
      href: '/projects/sefanya-printworks-logo',
    },
  },
  'sefanya-printworks-logo': {
    title: 'Sefanya Printworks Logo',
    titleLines: ['Sefanya', 'Printworks Logo'],
    category: 'Logo Design / Branding',
    image: '/image/projects/Sefanya Printworks.jpg',
    overview: {
      statement:
        'Sefanya is a boutique printing brand focused on creating personalized pieces that celebrate people, memories, and meaningful moments.',
      body: [
        'Built around a warm, minimalist identity, the brand transforms everyday objects into thoughtful keepsakes. Clean typography, intentional layouts, and a soft contemporary visual direction help each personalized piece feel considered and crafted rather than generic.',
        'From a morning coffee to a quiet evening tea, Sefanya turns simple daily rituals into opportunities for connection — creating personalized pieces designed to be kept, gifted, and remembered.',
      ],
      closing: 'Made personal. Made meaningful. Made to be remembered.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/sefanya-printworks/2_Wall Mounted Signboard Mockup.jpg',
            alt: 'Sefanya wall-mounted storefront sign',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/sefanya-printworks/06 A3 Poster on a Blue Couch_DekGrafis.jpg',
            alt: 'Sefanya personalized brand poster',
            position: 'center 58%',
          },
          {
            src: '/image/projects/sefanya-printworks/POSTER-MOCKUP-032.jpg',
            alt: 'Sefanya outdoor poster application',
            position: 'center 52%',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/sefanya-printworks/Business Card-2 thumbnail.jpg',
            alt: 'Sefanya business card application',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/sefanya-printworks/Mug Print.jpg',
            alt: 'Sefanya personalized mug application',
            position: 'center 48%',
          },
          {
            src: '/image/projects/sefanya-printworks/jowinski_mockup_totebag2.jpg',
            alt: 'Sefanya tote bag application',
            position: 'center 58%',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/sefanya-printworks/Plastic Bag Mockup 01.jpg',
            alt: 'Sefanya branded packaging application',
          },
        ],
      },
    ],
    nextProject: {
      title: 'ADA Logo',
      href: '/projects/ada-logo',
    },
  },
  'ada-logo': {
    title: 'ADA Logo',
    titleLines: ['ADA', 'Logo'],
    category: 'Logo Design / Branding',
    image: '/image/projects/Ada Logo.jpg',
    overview: {
      statement:
        'Ada is a global music booking agency and digital platform built to connect world-class artists with audiences, venues, and cultural communities around the world.',
      body: [
        'The platform bridges talent and opportunity through artist curation, tour planning, and seamless collaboration across the international music landscape. By combining industry expertise with a global network, Ada helps artists expand their reach and discover new opportunities.',
        'The identity represents movement, discovery, and music’s ability to connect people beyond borders. It reflects a platform where artists, partners, and audiences can come together through shared creative experiences.',
      ],
      closing: 'Connecting artists, cultures, and audiences beyond borders.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/ada-logo/Bus Station Lightbox Banner Mockup.jpg',
            alt: 'ADA transit lightbox identity application',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/ada-logo/Image0009 thumbnails.jpg',
            alt: 'ADA mobile identity application',
            position: '66% center',
          },
          {
            src: '/image/projects/ada-logo/ios-app-icon-mockup-iphone-16-pro-mockups-v1-front-vew1.jpg',
            alt: 'ADA iOS app icon application',
            position: '55% center',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/ada-logo/Mockup.jpg',
            alt: 'ADA digital platform environmental display',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/ada-logo/Macbook-Pro-Showcase-Screen-Free-psd-Mockup.jpg',
            alt: 'ADA website shown on a laptop',
            position: '62% center',
          },
          {
            src: '/image/projects/ada-logo/tp238-rm388-04-mockup.jpg',
            alt: 'ADA campaign poster application',
            position: 'center center',
          },
        ],
      },
    ],
    nextProject: {
      title: 'PacePeace Logo',
      href: '/projects/pacepeace-logo',
    },
  },
  'pacepeace-logo': {
    title: 'PacePeace Logo',
    titleLines: ['PacePeace', 'Logo'],
    category: 'Logo Design / Branding',
    image: '/image/projects/Pace Peace Logo.jpg',
    overview: {
      statement:
        'PacePeace is a conceptual identity for a running and athletic apparel brand built around a simple idea: peace of mind shouldn’t depend on your pace.',
      body: [
        'The brand challenges the performance pressure often associated with running culture, shifting the focus away from split times and toward mindfulness, mental well-being, and the experience of simply moving forward.',
        'The identity centers on a minimalist geometric monogram built around the letter ‘P,’ representing forward movement and internal balance. Cobalt blue, neon volt, and a high-contrast visual system give the brand an energetic athletic character while keeping the identity clean and adaptable.',
      ],
      closing: 'Run your pace. Find your peace.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/pacepeace-logo/Billboard1 thumbnail.jpg',
            alt: 'PacePeace interior billboard campaign',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/pacepeace-logo/Neck Label.jpg',
            alt: 'PacePeace athletic garment neck label',
            position: '58% center',
          },
          {
            src: '/image/projects/pacepeace-logo/Shirt1.jpg',
            alt: 'PacePeace shirt logo application',
            position: 'center center',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/pacepeace-logo/PacePeace_Logo-05.jpg',
            alt: 'PacePeace monogram construction and concept',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/pacepeace-logo/PacePeace_Logo-07.jpg',
            alt: 'PacePeace neon volt identity artwork',
            position: 'center center',
          },
          {
            src: '/image/projects/pacepeace-logo/PacePeace_Logo-08.jpg',
            alt: 'PacePeace cobalt blue identity artwork',
            position: 'center center',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/pacepeace-logo/Billboard2.jpg',
            alt: 'PacePeace rooftop billboard campaign',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/pacepeace-logo/Shirt2.jpg',
            alt: 'PacePeace apparel application',
            position: 'center center',
          },
          {
            src: '/image/projects/pacepeace-logo/Shirt3.jpg',
            alt: 'PacePeace graphic shirt application',
            position: 'center center',
          },
        ],
      },
    ],
    nextProject: {
      title: 'Satushop Logo',
      href: '/projects/satushop-logo',
    },
  },
  'satushop-logo': {
    title: 'Satushop Logo',
    titleLines: ['Satushop', 'Logo'],
    category: 'Logo Design / Branding',
    image: '/image/projects/Satushop Logo.jpg',
    overview: {
      statement:
        'Satushop is an e-commerce brand bringing authentic Vietnamese coffee and regional goods to a modern digital marketplace.',
      body: [
        'The storefront focuses on premium Vietnamese imports, from well-known coffee brands and traditional brewing tools to carefully selected regional products. The goal was to create an experience that makes authenticity and product quality immediately clear to customers.',
        'The visual direction combines warm, product-focused imagery with a clean and contemporary e-commerce system. Each application was designed to highlight the character of the products while keeping the brand approachable, trustworthy, and easy to recognize across digital and physical touchpoints.',
      ],
      closing: 'Authentic Vietnamese flavor, made easier to discover.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/satushop-logo/MOCKUP_1.jpg',
            alt: 'Satushop Vietnamese coffee packaging',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/satushop-logo/MOCKUP_2.jpg',
            alt: 'Satushop storefront sign application',
            position: '60% center',
          },
          {
            src: '/image/projects/satushop-logo/MOCKUP_3.jpg',
            alt: 'Satushop business card application',
            position: 'center center',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/satushop-logo/MOCKUP_4.jpg',
            alt: 'Satushop coffee brand stationery',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/satushop-logo/MOCKUP_5.jpg',
            alt: 'Satushop mobile app icon application',
          },
        ],
      },
    ],
    nextProject: {
      title: 'SGN Logo',
      href: '/projects/sgn-logo',
    },
  },
  'sgn-logo': {
    title: 'SGN Mart',
    titleLines: ['SGN', 'Mart'],
    category: 'Logo Design / Branding',
    image: '/image/projects/SGN Logo.jpg',
    overview: {
      statement:
        'SGN Mart is a digital storefront identity created to give an international goods retailer a distinctive brand rooted in Vietnamese culture.',
      body: [
        'The identity centers on a custom SGN monogram, with a coffee bean integrated into the letter “G” to represent the brand’s connection to Vietnamese coffee. The geometry of the “N” also draws inspiration from the shape of Ho Chi Minh City’s District 1, connecting the mark to one of the city’s most recognizable cultural and coffee destinations.',
        'Built for a modern e-commerce environment, the identity is designed to remain clear and recognizable across digital platforms, packaging, merchandise, and other brand applications.',
      ],
      closing:
        'A modern storefront identity that brings Vietnamese roots into a clean, global visual language.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/sgn-logo/SGN Minimart Logo-01.jpg',
            alt: 'SGN Mart logo concept and cultural references',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/sgn-logo/SGN MOCKUP_1 thumbnail.jpg',
            alt: 'SGN Mart billboard campaign',
            position: 'center center',
          },
          {
            src: '/image/projects/sgn-logo/SGN MOCKUP_2.jpg',
            alt: 'SGN Mart mobile app icon application',
            position: '55% center',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/sgn-logo/SGN MOCKUP_3.jpg',
            alt: 'SGN Mart tote bag application',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/sgn-logo/SGN MOCKUP_4.jpg',
            alt: 'SGN Mart stationery application',
            position: 'center center',
          },
          {
            src: '/image/projects/sgn-logo/SGN MOCKUP_5.jpg',
            alt: 'SGN Mart retail apron application',
            position: 'center center',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/sgn-logo/SGN MOCKUP_6.jpg',
            alt: 'SGN Mart exterior sign application',
          },
        ],
      },
    ],
    nextProject: {
      title: 'Shopee Campaign',
      href: '/projects/shopee-campaign',
    },
  },
  'shopee-campaign': {
    title: 'Shopee Campaign',
    titleLines: ['Shopee', 'Campaign'],
    category: 'Campaign Design',
    image: '/image/projects/Shopee Campaign.jpg',
    overview: {
      statement:
        'Shopee Campaign is a collection of digital campaign visuals created for a range of brands and promotional events across the platform.',
      body: [
        'The work focuses on translating different product offers, campaign messages, and brand identities into clear, engaging visuals while working within Shopee’s fast-paced e-commerce environment.',
        'Each design balances promotional information with strong hierarchy, consistent branding, and adaptable layouts across different digital formats.',
      ],
      closing:
        'A flexible campaign system designed to make different brands and promotions stand out while remaining visually consistent across the platform.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/shopee-campaign/0guKGR96sHRBCb5aK8fxnBBsuI0.webp',
            alt: 'Shopee promotional campaign banner',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/shopee-campaign/1KHiVvSuwkERuCMBPENuExR4BmA.webp',
            alt: 'Shopee square campaign visual',
            position: 'center center',
          },
          {
            src: '/image/projects/shopee-campaign/32XTh0vptBcQbWfMdTvsd3odCNM.webp',
            alt: 'Shopee square promotional artwork',
            position: 'center center',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/shopee-campaign/4Iz0yQHmfHyzYL2gOSndeiAgbGo.webp',
            alt: 'Shopee digital campaign artwork',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/shopee-campaign/67RWGsESmvgjY79yqpLTgiZSHA.webp',
            alt: 'Shopee promotional campaign banner',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/shopee-campaign/67zT9qMNQ4YvIDs3MCO3NKtSQ.webp',
            alt: 'Shopee square campaign visual',
            position: 'center center',
          },
          {
            src: '/image/projects/shopee-campaign/8xyzdR7bXzosdH0fPi3d91xJqOM.webp',
            alt: 'Shopee square promotional artwork',
            position: 'center center',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/shopee-campaign/9tsE2NgKHowEgCF13hDaxD2BDPo.webp',
            alt: 'Shopee promotional campaign banner',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/shopee-campaign/COHyLFIF3J6zgtBfA5BEmKetOE.webp',
            alt: 'Shopee promotional campaign banner',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/shopee-campaign/9TZOhE1paQIbTeWl2H30CAgT5c.webp',
            alt: 'Shopee square campaign visual',
            position: 'center center',
          },
          {
            src: '/image/projects/shopee-campaign/GbJ3sANwr0aLxvmCRpYPAjjYNCY.webp',
            alt: 'Shopee square promotional artwork',
            position: 'center center',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/shopee-campaign/CqSeBWA18FRePqtisAz0Gmerqk.webp',
            alt: 'Shopee promotional campaign banner',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/shopee-campaign/FJa9RJGuv6vSFlTI1m20v6TyfKQ.webp',
            alt: 'Shopee promotional campaign banner',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/shopee-campaign/LFDLtk2oq0fhefbVDuvqekm8.webp',
            alt: 'Shopee square campaign visual',
            position: 'center center',
          },
          {
            src: '/image/projects/shopee-campaign/TQ2vNUsSqt8twGaFpRiFQHwh4c0.webp',
            alt: 'Shopee square promotional artwork',
            position: 'center center',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/shopee-campaign/QzxawQllm7Mjwm4272jmjMjsP4.webp',
            alt: 'Shopee promotional campaign banner',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/shopee-campaign/Tw8KLAiBuBDK7KcKTNsxUhReOs.webp',
            alt: 'Shopee promotional campaign banner',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/shopee-campaign/bkbHEUfDnzHc03n7euMgughbS6w.webp',
            alt: 'Shopee square campaign visual',
            position: 'center center',
          },
          {
            src: '/image/projects/shopee-campaign/ed2ETDLasCmOOqOP2DYYFMbWTw.webp',
            alt: 'Shopee square promotional artwork',
            position: 'center center',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/shopee-campaign/XrZ68s2MAWoweNRVhKt7f6aNIRU.webp',
            alt: 'Shopee promotional campaign banner',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/shopee-campaign/aLB4MiAYfOvWJqMW6S1s91Wg.webp',
            alt: 'Shopee promotional campaign banner',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/shopee-campaign/nbpMYdAAIis7nXujLm9IeMpNU.webp',
            alt: 'Shopee square campaign visual',
            position: 'center center',
          },
          {
            src: '/image/projects/shopee-campaign/sqN5ULIZvcJCI166GMUDuOGGI.webp',
            alt: 'Shopee square promotional artwork',
            position: 'center center',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/shopee-campaign/cfOKFjGjlDhfjDf3Fvm2Qrfzks.webp',
            alt: 'Shopee promotional campaign banner',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/shopee-campaign/kJTFBIGGixw0IncFhwzPXBid0.avif',
            alt: 'Shopee promotional campaign banner',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/shopee-campaign/u5JNra2KMuExFcaeqEbI0aO5Ia4.webp',
            alt: 'Shopee square campaign visual',
            position: 'center center',
          },
          {
            src: '/image/projects/shopee-campaign/wPUPRZQBIRBbzM66nOYfczKA6oA.avif',
            alt: 'Shopee square promotional artwork',
            position: 'center center',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/shopee-campaign/lIKXI8ZbhK2PNM9ayl0m01hTWk.webp',
            alt: 'Shopee promotional campaign banner',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/shopee-campaign/orbsH3UjKQZh1RDwNIoXvlNWxnk.webp',
            alt: 'Shopee promotional campaign banner',
          },
        ],
      },
    ],
    nextProject: {
      title: 'Lazada Campaign',
      href: '/projects/lazada-campaign',
    },
  },
  'lazada-campaign': {
    title: 'Lazada Campaign',
    titleLines: ['Lazada', 'Campaign'],
    category: 'Campaign Design',
    image: '/image/projects/Lazada Campaign.jpg',
    overview: {
      statement:
        'Lazada Campaign is a collection of digital promotional visuals created for brands, products, and major sales events across the platform.',
      body: [
        'The work explores a range of campaign formats, from product-focused promotions and discount offers to large-scale seasonal sale events. Each visual was designed to communicate key information quickly while maintaining strong hierarchy, energetic compositions, and clear brand presence.',
        'The system was adapted across square, portrait, and wide digital placements, allowing each campaign to remain consistent while responding naturally to different formats and promotional needs.',
      ],
      closing:
        'A versatile campaign system built to turn fast-moving promotions into clear, engaging, and recognizable digital experiences.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/lazada-campaign/9BkI0ZV3q7rKh0abmomz4lkKqI.webp',
            alt: 'Lazada promotional campaign banner',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/lazada-campaign/0NNuFn2a3RFs6GghtgUsRfWM.webp',
            alt: 'Lazada square campaign visual',
            position: 'center center',
          },
          {
            src: '/image/projects/lazada-campaign/3UmdVpE2BRKr5HzDq6MqgDeRw.webp',
            alt: 'Lazada square promotional artwork',
            position: 'center center',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/lazada-campaign/ADHmv7XlEAuLqSlqwHVr9WCKVE.webp',
            alt: 'Lazada promotional campaign banner',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/lazada-campaign/3yUshgwlhZmEaSCVWDpn1O89GU.webp',
            alt: 'Lazada portrait campaign visual',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/lazada-campaign/CVz5f7vwtOoET0b3qgRfKINPM.webp',
            alt: 'Lazada promotional campaign banner',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/lazada-campaign/BWGq492Ms3dZ9GRmYvCBlwHGFE.webp',
            alt: 'Lazada square campaign visual',
            position: 'center center',
          },
          {
            src: '/image/projects/lazada-campaign/GCDSbzPd91tx3dt8FTB7YyX580w.webp',
            alt: 'Lazada square promotional artwork',
            position: 'center center',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/lazada-campaign/DLcHKc1hkxfSDg1Dl2reGPsE2M.avif',
            alt: 'Lazada promotional campaign banner',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/lazada-campaign/8cD6UXdof00qZG94C1Jf69x8v4.avif',
            alt: 'Lazada portrait campaign visual',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/lazada-campaign/FDZEa1LyutZWFaxbueiwr40G0.webp',
            alt: 'Lazada promotional campaign banner',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/lazada-campaign/O4gA8Cf7iPp48tx3V408KlxNKi0.webp',
            alt: 'Lazada square campaign visual',
            position: 'center center',
          },
          {
            src: '/image/projects/lazada-campaign/gvX9n2b9LKpB423gpZ39LPcKH90.webp',
            alt: 'Lazada square promotional artwork',
            position: 'center center',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/lazada-campaign/GyOWUetZ69LZ0eXo4mfLzghiU.webp',
            alt: 'Lazada promotional campaign banner',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/lazada-campaign/B5Cc7iZcbCU1uI9OEJH75KM.avif',
            alt: 'Lazada portrait campaign visual',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/lazada-campaign/QoUjH0T0PiWC1NjsKYqh6DtPo.webp',
            alt: 'Lazada promotional campaign banner',
          },
        ],
      },
      {
        layout: 'split',
        images: [
          {
            src: '/image/projects/lazada-campaign/qHXMJuAnMXfMRXelVZHFPd9IMSc.webp',
            alt: 'Lazada square campaign visual',
            position: 'center center',
          },
          {
            src: '/image/projects/lazada-campaign/qdOfEJPWMhr0AuVU4KTI2QeZZpY.webp',
            alt: 'Lazada square promotional artwork',
            position: 'center center',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/lazada-campaign/SNLkyC89vqoB99hIQq6JWvEqpsM.webp',
            alt: 'Lazada promotional campaign banner',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/lazada-campaign/z2iZraVumpGT5iOqlUxscqdpV8.webp',
            alt: 'Lazada portrait campaign visual',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/lazada-campaign/T5MgEjgyajzR23Lcywy7id70pc.webp',
            alt: 'Lazada promotional campaign banner',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/lazada-campaign/zxnPHRFA3BcsAgqWKYpHEUwWE.webp',
            alt: 'Lazada square campaign visual',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/lazada-campaign/UFCelj64eDGsDePKcwALjci0.webp',
            alt: 'Lazada promotional campaign banner',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/lazada-campaign/Vc5mAqA1Q7w13MWX7s1QJrN0kM.webp',
            alt: 'Lazada promotional campaign banner',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/lazada-campaign/adn44QChN8J7YOdZn6qdthZM.webp',
            alt: 'Lazada promotional campaign banner',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/lazada-campaign/thumbnail.webp',
            alt: 'Lazada promotional campaign banner',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/lazada-campaign/v7MZqe7mikzTW9xPBvNWSW5MHk.webp',
            alt: 'Lazada promotional campaign banner',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/lazada-campaign/wxfxZMhG7qiygKS2TsX1rKzwICM.avif',
            alt: 'Lazada promotional campaign banner',
          },
        ],
      },
    ],
    nextProject: {
      title: 'Slippers Design',
      href: '/projects/slippers-design',
    },
  },
  'slippers-design': {
    title: 'Slippers Design',
    titleLines: ['Slippers', 'Design'],
    category: 'Graphic Design / Footwear',
    image: '/image/projects/slippers-design/thumbnail.avif',
    overview: {
      statement:
        'Slippers Design is a collection of lifestyle-focused footwear graphics created around playful concepts, clean layouts, and product-ready visual applications.',
      body: [
        'The project explores different graphic directions for slippers and flip-flops, using typography, illustration, color, and simple compositions to give each design its own personality. The artwork was developed to feel visually engaging while remaining adaptable to different footwear styles and product presentations.',
        'Across the collection, the focus stays on clear composition, balanced placement, and designs that translate naturally from the original artwork into finished lifestyle products.',
      ],
      closing:
        'A playful collection that turns simple everyday footwear into a canvas for expressive graphic design.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/slippers-design/FaGQu7rFJxzR2ErWnzqIoQLB20.webp',
            alt: 'Colorful slippers product collection',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/slippers-design/CqEla5jhvbmKJNOdOhGBq7Iev8.webp',
            alt: 'Pastel flip-flop collection campaign',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/slippers-design/iVN9iRmflyANMRxY6H4pLgpptA.webp',
            alt: 'Hello Kitty slide collection campaign',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/slippers-design/E7XP3R1hB09HzbvjBu1m5O88smA.webp',
            alt: 'Hello Kitty flip-flop campaign design',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/slippers-design/FX8HJt3kfOrTAIyamLSfATv6c6g.webp',
            alt: 'Hello Kitty footwear collection artwork',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/slippers-design/ZNQLv5Y5K9VzY3htUQ4R3I9gkTo.webp',
            alt: 'Hello Kitty travel-themed slippers campaign',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/slippers-design/oIDSkGhynXhDNvfMjMuJVUBcz0.webp',
            alt: 'Hello Kitty floral slippers campaign',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/slippers-design/XXCeXj2N9VkqSXsEMpvK11eparc.avif',
            alt: 'Lifestyle footwear campaign design',
          },
        ],
      },
    ],
    nextProject: {
      title: 'Web Banner Design',
      href: '/projects/web-banner-design',
    },
  },
  'web-banner-design': {
    title: 'Web Banner Design',
    titleLines: ['Web Banner', 'Design'],
    category: 'Digital Design / Advertising',
    image: '/image/projects/web-banner/thumbnail.webp',
    overview: {
      statement:
        'Web Banner Design is a collection of digital advertising visuals created for different brands, products, campaigns, and online promotions.',
      body: [
        'The project explores a variety of visual directions while keeping each banner clear, engaging, and easy to understand at a glance. Typography, imagery, color, and promotional messaging were carefully balanced to create strong visual hierarchy without overcrowding the limited banner space.',
        'Designed across different digital placements, the collection demonstrates an adaptable approach to working with different brand identities while maintaining clarity, consistency, and effective communication.',
      ],
      closing:
        'A versatile collection built to turn limited digital space into clear, engaging, and brand-focused visual communication.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/web-banner/01U2neXoAtHrAGxbfh5AJDU2kuo.webp',
            alt: 'Web advertising banner design',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/web-banner/1ejwIQmAVJ9BInSEiPRshMtGmM.webp',
            alt: 'Digital promotional banner design',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/web-banner/6rDfT0XAWiMHZXyW8UfNAJTQUPw.webp',
            alt: 'Brand-focused web banner design',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/web-banner/AlX2Af6dHo0kmRk4sPi52QAxVzY.webp',
            alt: 'Online promotion banner design',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/web-banner/GI4k8ZYTcc8kgBLC4V2XyOYgaVA.avif',
            alt: 'Digital advertising campaign banner',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/web-banner/MkeBRGK6t0kT01KDbeDOAQRGk.avif',
            alt: 'Promotional web banner artwork',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/web-banner/NMUAD3sk8fToIkb3qQsdJBztPXg.webp',
            alt: 'Product campaign banner design',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/web-banner/O9agFhzpQgaxRxcDzaK9rUHCJA.webp',
            alt: 'Digital brand promotion banner',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/web-banner/Vn6Be12oQDIiQp2VLQvCtfoYEHw.avif',
            alt: 'Wide web advertising banner',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/web-banner/eWFRZbM5gXvufpY3FTOTUJdJyU.webp',
            alt: 'Online campaign banner artwork',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/web-banner/ikKjkTSCgioV0dmkrP9nSxfGI.webp',
            alt: 'Promotional digital banner design',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/web-banner/lMq3PqF4baz3JSZaJVHr2DPfPDg.webp',
            alt: 'Brand campaign web banner',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/web-banner/tOI7BMQCp3hbjEMM7MA5B242KwI.webp',
            alt: 'Digital promotion banner artwork',
          },
        ],
      },
    ],
    nextProject: {
      title: 'Hope for Lupus — Slippers Design',
      href: '/projects/hope-for-lupus-slippers-design',
    },
  },
  'hope-for-lupus-slippers-design': {
    title: 'Hope for Lupus — Slippers Design',
    titleLines: ['Hope for Lupus', 'Slippers Design'],
    category: 'Product Design / Campaign',
    image: '/image/projects/hope-for-lupus-design/thumbnail.webp',
    overview: {
      statement:
        'Hope for Lupus — Slippers Design is a product design project created for the Banana Peel × Hope for Lupus partnership campaign.',
      body: [
        'The collection uses custom flip-flops as a platform for raising lupus awareness, combining expressive purple colorways, campaign graphics, and thoughtful product applications. Each design was developed to support the advocacy message while still feeling approachable, wearable, and visually connected to the Banana Peel brand.',
        'The project extends beyond the slippers themselves into supporting touchpoints such as hangtags, packaging, and eco bag applications, creating a more cohesive campaign experience around the cause.',
      ],
      closing:
        'A purpose-driven collaboration that shows how everyday product design can help carry a meaningful message beyond the campaign.',
    },
    longImage: {
      src: '/image/projects/hope-for-lupus-design/nvV4pSJIMYGzIpXqQzlQdZBCprM.avif',
      alt: 'Hope for Lupus slippers campaign case study',
    },
    nextProject: {
      title: 'Department of Tourism x Banana Peel Flip Flop Design',
      href: '/projects/department-of-tourism-banana-peel-flip-flop-design',
    },
  },
  'department-of-tourism-banana-peel-flip-flop-design': {
    title: 'Department of Tourism x Banana Peel Flip Flop Design',
    titleLines: [
      'Department of Tourism',
      'x Banana Peel',
      'Flip Flop Design',
    ],
    category: 'Product Design / Campaign',
    image: '/image/projects/DOT-slippers-design/thumbnail.webp',
    overview: {
      statement:
        'This is a custom campaign and footwear collection for the Banana Peel x Department of Tourism partnership.',
      body: [
        'Built around the official “It’s More Fun in the Philippines” visual style, the collection showcases five distinct destination-inspired colorways featuring custom illustrations of jeepneys, kalesas, and surfboards.',
        'The design pairs everyday casual comfort with a bright, energetic graphic system that celebrates local culture and summer adventure.',
      ],
      closing:
        'A vibrant footwear collection that turns Philippine culture, destinations, and everyday adventure into something you can wear.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/DOT-slippers-design/1st image.webp',
            alt: 'Department of Tourism and Banana Peel campaign hangtags',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/DOT-slippers-design/4Uz7LOOd7nfnFaYs8YUUcImYI.webp',
            alt: 'Department of Tourism destination-inspired flip-flop design',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/DOT-slippers-design/NqVynd3lubsBwjnS6TXEDH5pw0.webp',
            alt: 'Philippine culture-inspired flip-flop artwork',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/DOT-slippers-design/aRlIAUwrNuE5ZvLbnO5jSoMU5M.avif',
            alt: 'Banana Peel campaign footwear presentation',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/DOT-slippers-design/cIqxpj9UP92dj6IzYh03Rw7LFE8.webp',
            alt: 'Destination-inspired flip-flop collection artwork',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/DOT-slippers-design/dFjoTJD5aZbKOmiCP3yd8B97Kg.webp',
            alt: 'It’s More Fun in the Philippines footwear design',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/DOT-slippers-design/iNW1PwXmefTdg6lPOXAzY1X80I.webp',
            alt: 'Department of Tourism flip-flop campaign artwork',
          },
        ],
      },
    ],
    nextProject: {
      title: 'Daikin Philippines Graphic',
      href: '/projects/daikin-philippines-graphic',
    },
  },
  'daikin-philippines-graphic': {
    title: 'Daikin Philippines Graphic',
    titleLines: ['Daikin Philippines', 'Graphic'],
    category: 'Graphic Design / Campaign',
    image: '/image/projects/daikin-graphics/thumbnail.webp',
    overview: {
      statement:
        'This graphic design project for Daikin Philippines explores a clean and high-performing visual system created for a leading global appliance brand.',
      body: [
        'Built around energetic blue color stories, clean vector accents, and structured text hierarchies, the layouts communicate key promotional offers and technical appliance features clearly and effectively.',
        'The final visuals create a polished system of digital and print marketing assets designed to remain clear, professional, and recognizable across different formats.',
      ],
      closing:
        'A flexible visual system that turns technical product information into clear, engaging, and polished brand communication.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/daikin-graphics/1.avif',
            alt: 'Daikin Philippines graphic design campaign',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/daikin-graphics/2.webp',
            alt: 'Daikin Philippines promotional graphic',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/daikin-graphics/3.webp',
            alt: 'Daikin Philippines product campaign artwork',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/daikin-graphics/4.webp',
            alt: 'Daikin Philippines digital marketing visual',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/daikin-graphics/5.webp',
            alt: 'Daikin Philippines appliance marketing layout',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/daikin-graphics/6.webp',
            alt: 'Daikin Philippines promotional layout system',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/daikin-graphics/7.webp',
            alt: 'Daikin Philippines branded campaign graphic',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/daikin-graphics/8.webp',
            alt: 'Daikin Philippines marketing asset collection',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            type: 'video',
            src: '/image/projects/daikin-graphics/9.mp4',
            alt: 'Daikin Philippines campaign video',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            type: 'video',
            src: '/image/projects/daikin-graphics/10.mp4',
            alt: 'Daikin Philippines promotional video',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            type: 'video',
            portrait: true,
            src: '/image/projects/daikin-graphics/eYJrHNzhQvUVa1NNWA5Zt6MFXMM.mp4',
            alt: 'Daikin Philippines product feature video',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            type: 'video',
            portrait: true,
            src: '/image/projects/daikin-graphics/7gY0Qe6olEaveH7WNOWxLsqkIw.mp4',
            alt: 'Daikin Philippines vertical campaign video',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            type: 'video',
            portrait: true,
            src: '/image/projects/daikin-graphics/13.mp4',
            alt: 'Daikin Philippines campaign motion graphic',
          },
        ],
      },
    ],
    nextProject: {
      title: 'Asocial Logo',
      href: '/projects/asocial-logo',
    },
  },
  'asocial-logo': {
    title: 'Asocial Logo',
    titleLines: ['Asocial', 'Logo'],
    category: 'Logo Design / Branding',
    image: '/image/projects/asocial-logo/thumbnail.avif',
    overview: {
      statement:
        'Anti-Social Moms Club is a lifestyle and home brand for moms who don’t fit the traditional social-butterfly mold.',
      body: [
        'The identity uses a minimal, contemporary approach that feels understated, confident, and different from conventional motherhood branding. It celebrates individuality and belonging without traditional social expectations.',
      ],
      closing:
        'A minimal identity for moms who are comfortable doing things their own way.',
    },
    longImage: {
      src: '/image/projects/asocial-logo/3pjL4VHzBrymNdIA6OeuRr9RYg.avif',
      alt: 'Anti-Social Moms Club brand identity case study',
    },
    nextProject: {
      title: 'Kazzi Logo',
      href: '/projects/kazzi-logo',
    },
  },
  'kazzi-logo': {
    title: 'Kazzi Logo',
    titleLines: ['Kazzi', 'Logo'],
    category: 'Logo Design / Branding',
    image: '/image/projects/kazi-logo/thumbnail.avif',
    overview: {
      statement:
        'Kazzi is a premium athletic footwear identity built around movement, performance, and direction.',
      body: [
        'The monogram combines a K with a stylized F for footwear, forming a shape inspired by a running posture. Three structural lines suggest speed, while the yellow arrow reinforces forward movement and a clear goal. Black, white, and energetic yellow create a clean, high-contrast identity.',
      ],
      closing:
        'A performance-driven identity designed to always move forward.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/kazi-logo/1.avif',
            alt: 'Kazzi athletic footwear identity presentation',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/kazi-logo/2.webp',
            alt: 'Kazzi logo and visual identity application',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/kazi-logo/3.webp',
            alt: 'Kazzi athletic brand application',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/kazi-logo/4.webp',
            alt: 'Kazzi footwear identity artwork',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/kazi-logo/5.webp',
            alt: 'Kazzi performance brand presentation',
          },
        ],
      },
    ],
    nextProject: {
      title: 'Social Media Post',
      href: '/projects/social-media-post',
    },
  },
  'social-media-post': {
    title: 'Social Media Post',
    titleLines: ['Social Media', 'Post'],
    category: 'Graphic Design / Social Media',
    image: '/image/projects/socialmedia-post/thumbnail.avif',
    overview: {
      statement:
        'Social Media Post is a collection of custom digital designs created for a diverse range of commercial brands.',
      body: [
        'The collection explores structured, eye-catching layouts for product launches, promotional campaigns, and branded content while maintaining strong typography, vibrant visuals, and clear communication across different industries.',
      ],
      closing:
        'A versatile collection built to make brands stand out in the social feed.',
    },
    gallery: Array.from({ length: 18 }, (_, index) => ({
      layout: 'full',
      images: [
        {
          src:
            index === 5
              ? '/image/projects/socialmedia-post/06.webp'
              : `/image/projects/socialmedia-post/${index + 1}.webp`,
          alt: `Social media post design ${index + 1}`,
        },
      ],
    })),
    nextProject: {
      title: 'Packaging Design',
      href: '/projects/packaging-design',
    },
  },
  'packaging-design': {
    title: 'Packaging Design',
    titleLines: ['Packaging', 'Design'],
    category: 'Packaging Design / Branding',
    image: '/image/projects/packaging-design/thumbnail.webp',
    overview: {
      statement:
        'This packaging system explores how clean, modern design can give everyday wellness products a more premium retail presence.',
      body: [
        'Built around botanical-inspired colors, subtle textures, and refined typography, the system creates a cohesive identity across different packaging formats while maintaining clear hierarchy and strong visual consistency.',
      ],
      closing:
        'Thoughtful packaging designed to make the product feel as considered as what’s inside.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/packaging-design/5OmBrJ5EpK91TptfJQHbjSA22I.avif',
            alt: 'Premium wellness packaging presentation',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/packaging-design/ALdO0u1hAg6SNJjlIJSDwLKNiZw.avif',
            alt: 'Botanical-inspired packaging system',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/packaging-design/OOf38Slanf3bcbr0hku6gy8amxg.webp',
            alt: 'Modern retail packaging application',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/packaging-design/Rzt9rDNBiQfBm789US3qcpn75LY.webp',
            alt: 'Wellness product packaging collection',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/packaging-design/YJL1Lz3LDEoPzPyw80Kumdl86f8.avif',
            alt: 'Refined packaging identity design',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/packaging-design/jbtE0Cx8e3nZk6fUPAXJQDepYg.webp',
            alt: 'Cohesive wellness packaging artwork',
          },
        ],
      },
    ],
    nextProject: {
      title: 'Printing Maker Logo',
      href: '/projects/printing-maker-logo',
    },
  },
  'printing-maker-logo': {
    title: 'Printing Maker Logo',
    titleLines: ['Printing Maker', 'Logo'],
    category: 'Logo Design / Branding',
    image: '/image/projects/printing-maker/thumbnail.webp',
    overview: {
      statement:
        'Printing Maker is a visual identity project built around the process of turning ideas into printed form.',
      body: [
        'The logo combines the letters P for Printer and M for Maker with simplified references to a document and printer head, unified through a modular geometric structure. Warm orange and red tones keep the identity energetic, approachable, and professional.',
      ],
      closing:
        'A modular identity where printing, making, and creativity come together in one mark.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/printing-maker/1.avif',
            alt: 'Printing Maker visual identity presentation',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/printing-maker/2.avif',
            alt: 'Printing Maker logo construction and application',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/printing-maker/3.webp',
            alt: 'Printing Maker brand identity application',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/printing-maker/4.webp',
            alt: 'Printing Maker logo presentation',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/printing-maker/5.webp',
            alt: 'Printing Maker branded design application',
          },
        ],
      },
    ],
    nextProject: {
      title: 'Promo Collateral',
      href: '/projects/promo-collateral',
    },
  },
  'promo-collateral': {
    title: 'Promo Collateral',
    titleLines: ['Promo', 'Collateral'],
    category: 'Graphic Design / Retail',
    image: '/image/projects/promo-collateral/5.webp',
    galleryPortraitWidth: '55rem',
    overview: {
      statement:
        'Promo Collateral is an in-store Sintra board poster designed for Banana Peel’s holiday retail campaign.',
      body: [
        'The design combines festive colors, seasonal flat-lay graphics, and clear typography to communicate the promotion and purchase mechanics quickly within a busy retail environment.',
      ],
      closing:
        'A festive in-store piece designed to turn seasonal attention into retail action.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            portrait: true,
            src: '/image/projects/promo-collateral/01.webp',
            alt: 'Banana Peel in-store promotional poster',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            portrait: true,
            src: '/image/projects/promo-collateral/2.webp',
            alt: 'Banana Peel portrait retail campaign artwork',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            portrait: true,
            src: '/image/projects/promo-collateral/3.webp',
            alt: 'Banana Peel promotional Sintra board design',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            portrait: true,
            src: '/image/projects/promo-collateral/4.webp',
            alt: 'Seasonal in-store promotion poster',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/promo-collateral/5.webp',
            alt: 'Banana Peel seasonal retail campaign artwork',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            portrait: true,
            src: '/image/projects/promo-collateral/6.avif',
            alt: 'Banana Peel A4 promotional collateral',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            portrait: true,
            src: '/image/projects/promo-collateral/7.webp',
            alt: 'Banana Peel holiday retail poster',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/promo-collateral/8.webp',
            alt: 'Banana Peel retail promotion graphic',
          },
        ],
      },
    ],
    nextProject: {
      title: 'Hangtag Design',
      href: '/projects/hangtag-design',
    },
  },
  'hangtag-design': {
    title: 'Hangtag Design',
    titleLines: ['Hangtag', 'Design'],
    category: 'Graphic Design / Retail Collateral',
    image: '/image/projects/hangtag-design/thumbnail.avif',
    overview: {
      statement:
        'Hangtag Design is a retail collateral project focused on turning small functional touchpoints into polished brand experiences.',
      body: [
        'Clear typography, structured layouts, and cohesive color systems organize essential product information while maintaining a clean presentation.',
      ],
      closing:
        'The result is a functional design detail that strengthens the overall retail experience.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/hangtag-design/01.webp',
            alt: 'Hangtag retail collateral presentation',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/hangtag-design/02.avif',
            alt: 'Hangtag typography and information layout',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/hangtag-design/03.webp',
            alt: 'Hangtag brand application',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/hangtag-design/04.png',
            alt: 'Hangtag design collection',
          },
        ],
      },
    ],
    nextProject: {
      title: '3D Module Design',
      href: '/projects/3d-module-design',
    },
  },
  '3d-module-design': {
    title: '3D Module Design',
    titleLines: ['3D Module', 'Design'],
    category: '3D Design / Retail',
    image: '/image/projects/3d-module/thumbnail.webp',
    overview: {
      statement:
        'This 3D module design was developed as a custom retail display for Banana Peel, translating the brand’s tropical identity into a functional in-store experience.',
      body: [
        'The structure combines a wood-inspired framework, organized footwear display system, and a custom surfboard graphic centerpiece, with detailed dimensions and material specifications prepared for fabrication.',
        'From the initial technical layout to the finished physical installation, the design balances product visibility, brand presence, and practical retail functionality.',
      ],
      closing:
        'The result is a distinctive branded display that brings the Banana Peel experience directly into the retail space.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/3d-module/01.webp',
            alt: 'Banana Peel 3D retail module design',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/3d-module/02.webp',
            alt: 'Banana Peel retail display technical layout',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/3d-module/03.webp',
            alt: 'Banana Peel branded module presentation',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/3d-module/04.webp',
            alt: 'Finished Banana Peel retail display installation',
          },
        ],
      },
    ],
    nextProject: {
      title: 'Hug & Coffee Logo',
      href: '/projects/hug-and-coffee-logo',
    },
  },
  'hug-and-coffee-logo': {
    title: 'Hug & Coffee Logo',
    titleLines: ['Hug & Coffee', 'Logo'],
    category: 'Logo Design / Branding',
    image: '/image/projects/hug-coffee/03.jpg',
    overview: {
      statement:
        'Hug & Coffee is a conceptual digital branding project developed to showcase a minimalist and creative logo system for a cafe brand.',
      body: [
        'The design strategy focuses on a unique icon that balances a coffee bean outline with an embracing hug symbol to communicate community and comfort.',
      ],
      closing:
        'Presented across realistic brand applications, the project delivers a scalable and balanced identity that transforms familiar café imagery into a warm, memorable visual mark.',
    },
    gallery: [
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/hug-coffee/01.jpg',
            alt: 'Hug & Coffee brand identity presentation',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/hug-coffee/02.jpg',
            alt: 'Hug & Coffee logo application',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/hug-coffee/03.jpg',
            alt: 'Hug & Coffee cafe branding',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/hug-coffee/04.jpg',
            alt: 'Hug & Coffee visual identity mockup',
          },
        ],
      },
      {
        layout: 'full',
        images: [
          {
            src: '/image/projects/hug-coffee/05.jpg',
            alt: 'Hug & Coffee branded cafe application',
          },
        ],
      },
    ],
    endNavigation: true,
  },
}

function SiteHeader({ isHome = false }) {
  const sectionPrefix = isHome ? '' : '/'
  const currentPath = window.location.pathname
  const [currentHash, setCurrentHash] = useState(() => window.location.hash)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleHashChange = () => setCurrentHash(window.location.hash)

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useEffect(() => {
    if (!isHome) return

    const isMobileViewport = () =>
      window.matchMedia('(max-width: 48rem)').matches

    const sections = ['top', 'projects', 'about', 'contact']

    const updateActiveSection = () => {
      if (!isMobileViewport()) return

      const navbarHeight = 5.75 * 16
      const triggerPoint = window.innerHeight * 0.4

      let current = ''

      for (const id of sections) {
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= triggerPoint && rect.bottom > navbarHeight) {
            current = id
          }
        }
      }

      setCurrentHash(current ? `#${current}` : '')
    }

    window.addEventListener('scroll', updateActiveSection)
    updateActiveSection()

    return () => window.removeEventListener('scroll', updateActiveSection)
  }, [isHome])

  useEffect(() => {
    if (!isMobileMenuOpen) return

    const previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const closeOnOutsideClick = (event) => {
      if (!event.target.closest('.site-header')) {
        setIsMobileMenuOpen(false)
      }
    }
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setIsMobileMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', closeOnOutsideClick)
    document.addEventListener('keydown', closeOnEscape)

    return () => {
      document.body.style.overflow = previousBodyOverflow
      document.removeEventListener('pointerdown', closeOnOutsideClick)
      document.removeEventListener('keydown', closeOnEscape)
    }
  }, [isMobileMenuOpen])

  return (
    <header className="site-header">
      <a
        className="wordmark"
        href={isHome ? '#top' : '/'}
        aria-label="Ian Tabinas, home"
      >
        <img src="/logo/ian-logo-light.png" alt="" />
      </a>

      <button
        className={`mobile-menu-toggle${isMobileMenuOpen ? ' is-open' : ''}`}
        type="button"
        aria-label={isMobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-controls="primary-navigation"
        aria-expanded={isMobileMenuOpen}
        onClick={() => setIsMobileMenuOpen((isOpen) => !isOpen)}
      >
        <span />
        <span />
        <span />
      </button>

      <nav
        className={`primary-navigation${isMobileMenuOpen ? ' is-open' : ''}`}
        id="primary-navigation"
        aria-label="Primary navigation"
      >
        <ul className="nav-list">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={
                  item === 'Home'
                    ? isHome
                      ? '#top'
                      : '/'
                    : item === 'Projects'
                    ? `${sectionPrefix}#projects`
                    : `${sectionPrefix}#${item.toLowerCase()}`
                }
                className={
                  (item === 'Home' &&
                    isHome &&
                    (!currentHash || currentHash === '#top')) ||
                  (item === 'Projects' &&
                    (currentPath === '/projects' ||
                      currentPath.startsWith('/projects/'))) ||
                  (isHome && currentHash === `#${item.toLowerCase()}`)
                    ? 'is-active'
                    : undefined
                }
                aria-current={
                  (item === 'Home' &&
                    isHome &&
                    (!currentHash || currentHash === '#top')) ||
                  (item === 'Projects' &&
                    (currentPath === '/projects' ||
                      currentPath.startsWith('/projects/'))) ||
                  (isHome && currentHash === `#${item.toLowerCase()}`)
                    ? 'page'
                    : undefined
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}

function ProjectDetailPage({ project }) {
  return (
    <div className="site-shell">
      <SiteHeader />

      <main className="project-detail" id="top">
        <section
          className="project-detail-hero"
          aria-labelledby="project-detail-title"
        >
          <p className="project-detail-category reveal reveal-1">
            {project.category}
          </p>

          <h1
            className="project-detail-title reveal reveal-2"
            id="project-detail-title"
          >
            {project.titleLines.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </h1>

          <div className="project-detail-image reveal reveal-3">
            <img src={project.image} alt={`${project.title} project`} />
          </div>
        </section>

        {project.overview && (
          <section
            className="project-overview"
            aria-labelledby="project-overview-title"
          >
            <p className="project-overview-label" id="project-overview-title">
              Project Overview
            </p>

            <div className="project-overview-content">
              <p className="project-overview-statement">
                {project.overview.statement}
              </p>

              <div className="project-overview-body">
                {project.overview.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              {project.overview.closing && (
                <p className="project-overview-closing">
                  {project.overview.closing}
                </p>
              )}
            </div>
          </section>
        )}

        {project.gallery && (
          <section
            className="case-study-gallery"
            aria-label="Project gallery"
            style={
              project.galleryPortraitWidth
                ? {
                    '--gallery-portrait-width': project.galleryPortraitWidth,
                  }
                : undefined
            }
          >
            {project.gallery.map((row, rowIndex) => (
              <div
                className={`case-study-gallery-row case-study-gallery-row--${row.layout}`}
                key={`${row.layout}-${rowIndex}`}
              >
                {row.images.map((image) => (
                  <figure
                    className={`case-study-gallery-item${
                      image.portrait
                        ? ' case-study-gallery-item--portrait'
                        : ''
                    }`}
                    key={image.src}
                    style={{ '--gallery-position': image.position || 'center' }}
                  >
                    {image.type === 'video' ? (
                      <video
                        src={image.src}
                        aria-label={image.alt}
                        controls
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <img
                        src={image.src}
                        alt={image.alt}
                        loading="lazy"
                        decoding="async"
                      />
                    )}
                  </figure>
                ))}
              </div>
            ))}
          </section>
        )}

        {project.longImage && (
          <section className="project-long-image" aria-label="Project case study">
            <figure>
              <img
                src={project.longImage.src}
                alt={project.longImage.alt}
                loading="lazy"
                decoding="async"
              />
            </figure>
          </section>
        )}

        {project.nextProject && (
          <section className="next-project" aria-labelledby="next-project-title">
            <a className="next-project-link" href={project.nextProject.href}>
              <span className="next-project-label">Next Project</span>
              <h2 className="next-project-title" id="next-project-title">
                {project.nextProject.title}
              </h2>
            </a>
          </section>
        )}

        {project.endNavigation && (
          <nav className="project-end-navigation" aria-label="Portfolio navigation">
            <a href="/#top"><span>Home</span></a>
            <a href="/projects"><span>Projects</span></a>
            <a href="/#about"><span>About</span></a>
            <a href="/#contact"><span>Contact</span></a>
          </nav>
        )}
      </main>
    </div>
  )
}

function ProjectsGrid({ items, variant = 'default' }) {
  const isFeatured = variant === 'featured'

  return (
    <div
      className={`projects-grid${
        isFeatured
          ? ' projects-grid--featured scroll-reveal scroll-reveal--delay-1'
          : ''
      }`}
    >
      {items.map(({ file, title, slug, category, year }) => {
        const card = (
          <figure
            className={`project-card${isFeatured ? ' project-card--featured' : ''}`}
          >
            <div className="project-placeholder">
              <img
                src={`/image/projects/${file}`}
                alt={`${title} project`}
                loading="lazy"
                decoding="async"
              />
            </div>
            {isFeatured ? (
              <figcaption>
                <span className="project-card-heading">
                  <span>{title}</span>
                  {year && <span className="project-card-year">{year}</span>}
                </span>
                {category && (
                  <span className="project-card-category">{category}</span>
                )}
              </figcaption>
            ) : (
              <figcaption>{title}</figcaption>
            )}
          </figure>
        )

        return slug ? (
          <a className="project-link" href={`/projects/${slug}`} key={file}>
            {card}
          </a>
        ) : (
          <div key={file}>{card}</div>
        )
      })}
    </div>
  )
}

function ProjectsPage() {
  return (
    <div className="site-shell">
      <SiteHeader />

      <main id="top">
        <section
          className="featured-projects"
          aria-labelledby="projects-page-title"
        >
          <h1 id="projects-page-title" className="featured-projects-title">
            Projects
          </h1>

          <ProjectsGrid items={allProjects} />
        </section>
      </main>
    </div>
  )
}

function PortfolioHome() {
  const companiesMarqueeRef = useRef(null)

  useEffect(() => {
    const navigationEntry = window.performance
      .getEntriesByType('navigation')
      .at(0)
    const isReload = navigationEntry?.type === 'reload'

    if (isReload) {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual'
      }

      window.history.replaceState(
        null,
        '',
        `${window.location.pathname}${window.location.search}`,
      )
      window.dispatchEvent(new HashChangeEvent('hashchange'))

      const previousScrollBehavior =
        document.documentElement.style.scrollBehavior
      document.documentElement.style.scrollBehavior = 'auto'
      window.scrollTo(0, 0)

      const animationFrame = window.requestAnimationFrame(() => {
        window.scrollTo(0, 0)
        document.documentElement.style.scrollBehavior = previousScrollBehavior
      })

      return () => window.cancelAnimationFrame(animationFrame)
    }

    const sectionId = window.location.hash.slice(1)

    if (!['top', 'projects', 'about', 'contact'].includes(sectionId)) return

    let animationFrame
    let cancelled = false

    document.fonts.ready.then(() => {
      if (cancelled) return

      animationFrame = window.requestAnimationFrame(() => {
        document
          .getElementById(sectionId)
          ?.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    })

    return () => {
      cancelled = true
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
    }
  }, [])

  useEffect(() => {
    const revealElements = document.querySelectorAll('.scroll-reveal')
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    const isMobileViewport = window.matchMedia(
      '(max-width: 26.875rem)',
    ).matches

    if (reduceMotion || !('IntersectionObserver' in window)) {
      revealElements.forEach((element) => element.classList.add('is-visible'))
      return undefined
    }

    let observer
    let firstFrame
    let secondFrame

    firstFrame = window.requestAnimationFrame(() => {
      secondFrame = window.requestAnimationFrame(() => {
        observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (!entry.isIntersecting) return

              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            })
          },
          {
            rootMargin: isMobileViewport
              ? '0px 0px -8% 0px'
              : '0px 0px -22% 0px',
            threshold: 0.01,
          },
        )

        revealElements.forEach((element) => observer.observe(element))
      })
    })

    return () => {
      window.cancelAnimationFrame(firstFrame)
      window.cancelAnimationFrame(secondFrame)
      observer?.disconnect()
    }
  }, [])

  useEffect(() => {
    const marquee = companiesMarqueeRef.current
    if (!marquee) return

    const isMobile = window.matchMedia('(max-width: 47.99rem)').matches
    if (!isMobile) return

    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches
    if (reduceMotion) return

    const img = marquee.querySelector('.companies-image')
    if (!img) return

    const style = getComputedStyle(img)
    const unitWidth = parseFloat(style.width) + parseFloat(style.marginRight)
    const pxPerMs = unitWidth / 15000

    let startTime = null

    function animate(timestamp) {
      if (!startTime) startTime = timestamp
      const position = ((timestamp - startTime) * pxPerMs) % unitWidth
      marquee.style.transform = `translateX(${-position}px)`
      window.requestAnimationFrame(animate)
    }

    const id = window.requestAnimationFrame(animate)
    return () => window.cancelAnimationFrame(id)
  }, [])

  return (
    <div className="site-shell" id="top">
      <SiteHeader isHome />

      <main>
        <section
          className="hero hero-editorial"
          aria-labelledby="hero-title"
        >
          <div className="hero-editorial-grid" aria-hidden="true">
            <span className="hero-editorial-axis hero-editorial-axis--vertical" />
            <span className="hero-editorial-axis hero-editorial-axis--horizontal" />
          </div>

          <div className="hero-editorial-copy">
            <h1
              id="hero-title"
              className="hero-editorial-title reveal reveal-1"
            >
              <span>Making</span>
              <span>Ideas</span>
              <span>Visible.</span>
            </h1>

            <div className="hero-editorial-intro reveal reveal-2">
              <p className="hero-editorial-byline">
                Ian Tabinas — Graphic Designer
              </p>
              <p className="hero-editorial-statement">
                Creating with intention. Designing with purpose.
              </p>
            </div>
          </div>

          <a
            className="hero-editorial-talk reveal reveal-1"
            href="#contact"
          >
            Let’s talk <UpRightArrow />
          </a>

          <figure className="hero-editorial-image reveal reveal-3">
            <img src="/image/about/profile.webp" alt="Ian Tabinas" />
          </figure>

          <a
            className="hero-editorial-scroll reveal reveal-4"
            href="#projects"
          >
            <span className="hero-editorial-scroll-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" focusable="false">
                <line x1="12" y1="1.5" x2="12" y2="22" />
                <line x1="4.75" y1="14.75" x2="12" y2="22" />
                <line x1="19.25" y1="14.75" x2="12" y2="22" />
              </svg>
            </span>
            <span>Scroll to explore</span>
          </a>
        </section>

        <section
          className="featured-projects featured-projects--home"
          id="projects"
          aria-labelledby="featured-projects-title"
        >
          <div className="featured-projects-header scroll-reveal">
            <h2
              id="featured-projects-title"
              className="featured-projects-title featured-projects-title--home"
              aria-label="Featured Projects"
            >
              <span>Featured</span>
              <span>Projects</span>
            </h2>

            <a className="featured-projects-view-all" href="/projects">
              View all projects <UpRightArrow />
            </a>
          </div>

          <ProjectsGrid items={featuredProjects} variant="featured" />
        </section>

        <section className="about" id="about" aria-labelledby="about-title">
          <h2 className="about-title scroll-reveal" id="about-title">
            About
          </h2>

          <div className="about-intro scroll-reveal scroll-reveal--delay-1">
            <img
              className="about-profile"
              src="/image/about/About.png"
              alt="Adrian Ian Tabinas"
              loading="lazy"
              decoding="async"
            />
            <p className="about-lead">
              Hi, I'm Adrian "Ian" Tabinas, a Graphic Designer with nearly 6
              years of experience creating purposeful and impactful visual
              solutions.
            </p>
          </div>

          <div className="about-copy scroll-reveal">
            <div className="about-copy-item">
              <span className="about-copy-label">01 / Philosophy</span>
              <p>
                I believe that great design is more than aesthetics, it's about
                communicating ideas, telling stories, and creating meaningful
                connections. Through branding, graphic design, and visual
                storytelling, I help businesses and individuals transform their
                ideas into visuals that inspire, engage, and leave a lasting
                impression.
              </p>
            </div>

            <div className="about-copy-item">
              <span className="about-copy-label">02 / Ian Studio</span>
              <p>
                As the founder of Ian Studio, my mission is to help small brands
                grow by combining creativity, strategy, and thoughtful design.
                Every project is approached with intention, ensuring that each
                design not only looks visually appealing but also serves a
                purpose.
              </p>
            </div>

            <div className="about-copy-item">
              <span className="about-copy-label">03 / Beyond Design</span>
              <p>
                When I'm not designing, I'm constantly exploring new ideas,
                learning creative tools, and finding inspiration in everyday
                life, all with the goal of becoming a better designer and helping
                others bring their vision to life.
              </p>
            </div>
          </div>

          <section
            className="companies"
            aria-labelledby="companies-title"
          >
            <h3 className="companies-title" id="companies-title">
              Brands & Companies I’ve Worked With
            </h3>
            <div className="companies-image-frame">
              <div className="companies-marquee" ref={companiesMarqueeRef}>
                <img
                  className="companies-image"
                  src="/image/projects/company/company-updated.png"
                  alt="Companies Ian Tabinas has worked with"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  className="companies-image"
                  src="/image/projects/company/company-updated.png"
                  alt="Companies Ian Tabinas has worked with"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            </div>
          </section>
        </section>

        <section
          className="contact"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-heading scroll-reveal">
            <h2 className="contact-title" id="contact-title">
              Let’s make something great.
            </h2>

            <p className="contact-intro">
              Have a project in mind? Let’s create something thoughtful, clear,
              and built to make an impact.
            </p>
          </div>

          <div
            className="contact-actions scroll-reveal scroll-reveal--delay-1"
            aria-label="Contact options"
          >
            <a className="contact-action" href="mailto:ianstudioph@gmail.com">
              <span>Email me</span>
              <UpRightArrow />
            </a>

            <a
              className="contact-action"
              href="https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0u5_b9MB3UALJd82pGuRcoIhSLrt_F6JIbeMYToHKBEE92B8ore7uj3HCIb0pQPo5imxR7BAmF"
              target="_blank"
              rel="noreferrer"
            >
              <span>Book a call</span>
              <UpRightArrow />
            </a>
          </div>

          <footer className="site-footer scroll-reveal">
            <p>© 2026 Ian Tabinas</p>

            <nav className="social-links" aria-label="Social links">
              <a
                href="https://www.behance.net/adriantabinas"
                target="_blank"
                rel="noreferrer"
              >
                Behance
              </a>
              <a
                href="https://www.facebook.com/ianstudiophl"
                target="_blank"
                rel="noreferrer"
              >
                Facebook
              </a>
            </nav>
          </footer>
        </section>
      </main>
    </div>
  )
}

function App() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/'
  const projectSlug = path.startsWith('/projects/')
    ? path.slice('/projects/'.length)
    : null
  const project = projectSlug ? projectDetails[projectSlug] : null

  if (path === '/projects') {
    return <ProjectsPage />
  }

  return project ? <ProjectDetailPage project={project} /> : <PortfolioHome />
}

export default App
