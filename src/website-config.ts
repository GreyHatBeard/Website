export interface WebsiteConfig {
  title: string;
  description: string;
  coverImage: string;
  logo: string;
  /**
   * Specifying a valid BCP 47 language helps screen readers announce text properly.
   * See: https://dequeuniversity.com/rules/axe/2.2/valid-lang
   */
  lang: string;
  /**
   * blog full path, no ending slash!
   */
  siteUrl: string;
  /**
   * full url, no username
   */
  facebook?: string;
  /**
   * full url, no username
   */
  twitter?: string;
  /**
   * create a list on mailchimp and then create an embeddable signup form. this is the form action
   */
  mailchimpAction?: string;
  /**
   * this is the hidden input field name
   */
  mailchimpName?: string;
  /**
   * name and id of the mailchimp email field
   */
  mailchimpEmailFieldName?: string;
  /**
  /**
   * Meta tag for Google Webmaster Tools
   */
  googleSiteVerification?: string;
  /**
  /**
   * Appears alongside the footer, after the credits
   */
  footer?: string;
}

const config: WebsiteConfig = {
  title: 'GreyHatBeard',
  description: 'GreyHatBeard - The Modern Workplace Podcast',
  coverImage: 'img/microphone.jpg',
  logo: 'img/GreyHatBeardAvatars.png',
  lang: 'en',
  siteUrl: 'https://www.greyhatbeard.com/',
  facebook: 'https://www.facebook.com/greyhatbeard',
  twitter: 'https://twitter.com/greyhatbeard',
  googleSiteVerification: 'GoogleCode',
  footer: 'is based on Gatsby Casper. Photo by Matt Botsford on Unsplash',
};

export default config;
