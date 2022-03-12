/**
 * @type {import('next').NextConfig}
 */

module.exports = {
  i18n : {
    // locales supported by this applications
    locales: ['ja-JP','en-US'],
    // default locale used when non-locale path visited
    defaultLocale: "ja-JP"
  },
  images: {
    domains: ['via.placeholder.com','cdn.sanity.io','scontent-nrt1-1.cdninstagram.com']
  },
}