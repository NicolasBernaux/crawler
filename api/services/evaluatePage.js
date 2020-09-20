module.exports = async () => {
  try {
    let domainParts = location.host.split('.')
    const domain2level = domainParts.slice(domainParts.length - 2).join('.')
    const canonical = $('link[rel="canonical"]').attr('href')
    const result = {
      request_time:
        window.performance.timing.responseEnd -
        window.performance.timing.requestStart,
      prev: $('title').text(),
      title: $('title').text(),
      h1: $('h1').text().trim(),
      h1_count: $('h1').length,
      h2_count: $('h2').length,
      h3_count: $('h3').length,
      h4_count: $('h4').length,
      canonical_count: $('link[rel="canonical"]').length,
      dom_size: document.getElementsByTagName('*').length,
      head_size: document.head.innerHTML.length,
      body_size: document.body.innerHTML.length,
      html_size:
        document.head.innerHTML.length + document.body.innerHTML.length,
      text_ratio_percent: Math.round(
        (document.body.innerText.length / document.body.innerHTML.length) * 100
      ),
      images: $('img').length,
      images_without_alt: $('img:not([alt]').length,
      images_alt_empty: $('img[alt=""]').length,
      images_outer: $(
        'img[src^="http"]:not([src^="/"]):not([src*="' + domain2level + '"])'
      ).length,
      links: $('a[href]:not([href^="javascript"]):not([href^="#"])').length,
      links_inner: $('a[href^="/"], a[href*="' + domain2level + '"]').length,
      links_outer: $(
        'a[href]:not([href^="javascript"]):not([href^="#"]):not([href^="/"]):not([href*="' +
          domain2level +
          '"])'
      ).length,
      links_target_blank: $('a[target="_blank"]').length,
      description:
        ($('meta[name="description"]').attr('content') &&
          $('meta[name="description"]')
            .attr('content')
            .split('\n')
            .join(' ')) ||
        '',
      keywords: {
        body: document.body.innerText,
        title: ` ${$('title').text()} `,
        h1: ` ${$('h1').append(' ').text()} `,
        h2: ` ${$('h2').append(' ').text()} `,
        lang: document.documentElement.lang,
      },
      canonical: canonical,
      is_canonical: canonical
        ? canonical == decodeURI(window.location.href)
          ? 1
          : 0
        : '',
      og_title: $('meta[property="og:title"]').attr('content'),
      og_image: $('meta[property="og:image"]').attr('content'),
      schema_types: $.unique(
        $('[itemtype]').map((i, item) =>
          $(item)
            .attr('itemType')
            .replace(/https?:\/\/schema\.org\//, '')
        )
      )
        .toArray()
        .join(', '),
    }

    return result
  } catch (e) {
    return {
      error: JSON.stringify(e),
    }
  }
}
