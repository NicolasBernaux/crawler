module.exports = [
  {
    name: 'response.url',
    comment: 'URL',
  },
  {
    name: 'result.mixed_content_url',
    comment: 'URL of mixed content',
    validate: {
      error: '== 0',
    },
  },
  {
    name: 'result.canonical',
    comment: 'Canonical URL',
  },
  {
    name: 'result.is_canonical',
    comment: 'Is canonical',
    validate: {
      error: '== 0',
    },
    type: 'boolean',
  },
  {
    name: 'previousUrl',
    comment: 'Previous URL',
  },
  {
    name: 'depth',
    comment: 'Scan depth',
    type: 'integer',
  },
  {
    name: 'response.status',
    comment: 'HTTP answer code',
    validate: {
      error: '!= 200',
    },
    type: 'integer',
  },
  {
    name: 'result.request_time',
    comment: 'Request time (without js)',
    validate: {
      warning: '> 500',
      error: '> 1000',
    },
    type: 'integer',
  },
  {
    name: 'result.title',
    comment: 'Title',
    /*validate: {
        error: 'len() == 0' // TODO:
    },*/
    align: 'right',
  },
  {
    name: 'result.h1',
    comment: 'h1',
  },
  {
    name: 'result.description',
    comment: 'Description',
    /*validate: {
        warning: 'len() > 256',
    },*/
  },
  {
    name: 'result.keywords',
    comment: 'Keywords',
  },
  {
    name: 'result.og_title',
    comment: 'og:title',
  },
  {
    name: 'result.og_image',
    comment: 'og:image',
    type: 'image',
  },
  {
    name: 'result.schema_types',
    comment: 'Schema_types microformats',
  },
  {
    name: 'result.h1_count',
    comment: 'h1 count',
    validate: {
      warning: '== 0',
      error: '> 1',
    },
    type: 'integer',
  },
  {
    name: 'result.h2_count',
    comment: 'h2 count',
    type: 'integer',
  },
  {
    name: 'result.h3_count',
    comment: 'h3 count',
    type: 'integer',
  },
  {
    name: 'result.h4_count',
    comment: 'h4 count',
    type: 'integer',
  },
  {
    name: 'result.canonical_count',
    comment: 'Canonicals on page',
    validate: {
      warning: '> 1',
    },
    type: 'integer',
  },
  {
    name: 'result.images',
    comment: 'img on page',
    type: 'integer',
  },
  {
    name: 'result.images_without_alt',
    comment: 'img without alt',
    validate: {
      warning: '> 0',
    },
    type: 'integer',
  },
  {
    name: 'result.images_alt_empty',
    comment: 'img with empty alt',
    validate: {
      warning: '> 0',
    },
    type: 'integer',
  },
  {
    name: 'result.images_outer',
    comment: 'img with outer URL',
    validate: {
      warning: '> 0',
    },
    type: 'integer',
  },
  {
    name: 'result.links',
    comment: 'Links',
    type: 'integer',
  },
  {
    name: 'result.links_inner',
    comment: 'Links inner',
    type: 'integer',
  },
  {
    name: 'result.links_outer',
    comment: 'Links outer',
    type: 'integer',
  },
  {
    name: 'result.links_target_blank',
    comment: 'Links target blank',
    type: 'integer',
  },
  {
    name: 'result.text_ratio_percent',
    comment: 'Text ratio',
    validate: {
      warning: '< 5',
    },
    type: 'integer',
  },
  {
    name: 'result.dom_size',
    comment: 'DOM elements count',
    validate: {
      warning: '> 1500',
      error: '> 3000',
    },
    type: 'integer',
  },
  {
    name: 'result.html_size',
    comment: 'HTML size, bytes',
    validate: {
      warning: '> 500000',
      error: '> 1000000',
    },
    type: 'integer',
  },
  // Lighthouse fields
  {
    name: 'lighthouse_scores_performance',
    comment: 'Lighthouse: Performance',
    type: 'integer',
  },
  {
    name: 'lighthouse_scores_pwa',
    comment: 'Lighthouse: PWA',
    type: 'integer',
  },
  {
    name: 'lighthouse_scores_accessibility',
    comment: 'Lighthouse: Accessibility',
    type: 'integer',
  },
  {
    name: 'lighthouse_scores_best-practices',
    comment: 'Lighthouse: Best-practices',
    type: 'integer',
  },
  {
    name: 'lighthouse_scores_seo',
    comment: 'Lighthouse: SEO',
    type: 'integer',
  },

  {
    name: 'lighthouse_first-contentful-paint',
    validate: {
      warning: '> 2000',
      error: '> 4000',
    },
    type: 'integer',
  },
  {
    name: 'lighthouse_speed-index',
    validate: {
      warning: '> 4300',
      error: '> 5800',
    },
    type: 'integer',
  },
  {
    name: 'lighthouse_largest-contentful-paint',
    validate: {
      warning: '> 2000',
      error: '> 4000',
    },
    type: 'integer',
  },
  {
    name: 'lighthouse_interactive',
    validate: {
      warning: '> 3800',
      error: '> 7300',
    },
    type: 'integer',
  },
  {
    name: 'lighthouse_total-blocking-time',
    validate: {
      warning: '> 300',
      error: '> 600',
    },
    type: 'integer',
  },
  {
    name: 'lighthouse_cumulative-layout-shift',
    validate: {
      warning: '> 100',
      error: '> 250',
    },
    type: 'integer',
  },
]
