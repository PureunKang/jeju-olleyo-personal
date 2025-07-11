import { PATH } from '@/constants/path.constants';
import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

  if (!baseUrl) {
    throw new Error(
      'NEXT_PUBLIC_SITE_URL environment variable is required for robots.txt generation',
    );
  }
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: [
        PATH.FORGOT_PASSWORD,
        PATH.RESET_PASSWORD,
        PATH.SIGNIN,
        PATH.SIGNUP,
        PATH.ACCOUNT,
        PATH.BOOKMARKS,
        PATH.COMMENTS,
        PATH.LIKES,
        PATH.RESERVATIONS,
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
