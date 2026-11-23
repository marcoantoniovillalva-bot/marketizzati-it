# SEO automation

The production cron runs daily at 06:15 UTC and submits sitemap URLs modified within the previous 26 hours to IndexNow. Static page dates come from the deployment's sitemap module; article dates come from the posts. The route also resubmits the sitemap to the existing URL-prefix Search Console property when configured.

- `CRON_SECRET`: secret used by Vercel to authorize cron requests with a bearer token. Set it in the production environment.
- `GOOGLE_SEO_SA_JSON`: optional complete Google service account JSON string. Grant the service account access to the site's Search Console property.
- `INDEXNOW_KEY`: optional override for the public IndexNow key. Its matching verification file must be available at the site root.
