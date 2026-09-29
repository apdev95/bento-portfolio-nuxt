<script setup>
import { onMounted, ref } from 'vue';
import { stagger, spring, timeline } from 'motion';

const animateCards = () => {
  if (typeof window === 'undefined') return;
  const cards = document.querySelectorAll('.bento-card, .card');
  if (!cards.length) return;

  const sequence = [
    [
      cards,
      { y: ['30px', '0px'], opacity: [0, 1] },
      {
        duration: 0.45,
        delay: stagger(0.06),
        easing: spring({ velocity: 80, stiffness: 60, damping: 12 }),
      },
    ],
  ];
  timeline(sequence);
};

onMounted(animateCards);

// Maximum Level SEO Optimization
const siteTitle = 'Andrea Puglisi — Full-Stack Developer & AI Solutions Engineer';
const siteDescription = 'Portfolio of Andrea Puglisi, Software Engineer at Formability & AI Solutions Engineer based in Sicily, Italy. Architecting high-performance web applications (Nuxt 3, Vue 3, Laravel, Node.js) and autonomous Generative AI & LLM agent workflows.';
const siteUrl = 'https://andreapuglisi.io';
const siteImage = `${siteUrl}/me/me10.webp`;

useSeoMeta({
  title: siteTitle,
  ogTitle: siteTitle,
  description: siteDescription,
  ogDescription: siteDescription,
  ogImage: siteImage,
  ogImageAlt: 'Andrea Puglisi - Full-Stack Developer & AI Solutions Engineer',
  ogImageUrl: siteImage,
  ogUrl: siteUrl,
  ogType: 'profile',
  ogSiteName: 'Andrea Puglisi',
  ogLocale: 'en_US',
  twitterCard: 'summary_large_image',
  twitterTitle: siteTitle,
  twitterDescription: siteDescription,
  twitterImage: siteImage,
  twitterImageAlt: 'Andrea Puglisi Portfolio',
  author: 'Andrea Puglisi',
  robots: 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1'
});

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@graph': [
          {
            '@type': 'Person',
            '@id': `${siteUrl}/#person`,
            name: 'Andrea Puglisi',
            url: siteUrl,
            image: {
              '@type': 'ImageObject',
              url: siteImage,
              caption: 'Andrea Puglisi'
            },
            jobTitle: [
              'Software Engineer',
              'Full-Stack Developer',
              'AI Solutions Engineer'
            ],
            description: siteDescription,
            worksFor: {
              '@type': 'Organization',
              name: 'Formability',
              url: 'https://formability.eu'
            },
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Ragusa',
              addressRegion: 'Sicily',
              addressCountry: 'IT'
            },
            sameAs: [
              'https://github.com/apdev95',
              'https://www.linkedin.com/in/andrea-puglisi-9046a255/',
              'https://www.instagram.com/andreapuglisi',
              'https://www.facebook.com/andrea.puglisi.95/'
            ],
            knowsAbout: [
              'Artificial Intelligence',
              'Generative AI & LLMs',
              'Autonomous AI Agents',
              'Retrieval-Augmented Generation (RAG)',
              'Prompt Engineering & Vector Databases',
              'Nuxt.js & Vue.js',
              'TypeScript & JavaScript',
              'Node.js & Python',
              'Laravel & PHP',
              'Tailwind CSS',
              'REST & GraphQL APIs',
              'PostgreSQL & MySQL',
              'Directus Headless CMS'
            ],
            contactPoint: {
              '@type': 'ContactPoint',
              email: 'info@andreapuglisi.io',
              telephone: '+393311495834',
              contactType: 'professional'
            }
          },
          {
            '@type': 'WebSite',
            '@id': `${siteUrl}/#website`,
            url: siteUrl,
            name: 'Andrea Puglisi Portfolio',
            description: siteDescription,
            publisher: {
              '@id': `${siteUrl}/#person`
            }
          }
        ]
      })
    }
  ]
});
</script>

<template>
  <!-- Row 1-2: Intro (3 cols x 2 rows) + About (1 col x 1 row) + Current Role @ Formability (1 col x 1 row, right under About) -->
  <Intro />
  <About colSpan="col-span-1 md:col-span-1 lg:col-span-1" rowSpan="lg:row-span-1" />
  <Currently colSpan="col-span-1 md:col-span-1 lg:col-span-1" rowSpan="lg:row-span-1" />

  <!-- Row 3-4: AI Terminal Assistant (2 cols) + AI & Tech Stack Matrix (2 cols) -->
  <AiAssistant />
  <AiSkills />

  <!-- Row 5-6: Featured Projects (2 cols) + Let's Connect (1 col) + Articles (1 col) -->
  <Projects />
  <Contact />
  <Blog />

  <!-- Row 7: Time Zone Clock (2 cols) + Ragusa Weather (2 cols) -->
  <TimeZone />
  <CurrentWeather colSpan="col-span-1 md:col-span-2 lg:col-span-2" rowSpan="lg:row-span-1" />

  <!-- Row 8: Footer (4 cols) -->
  <Copyright />
</template>
