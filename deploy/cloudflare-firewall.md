Cloudflare Bot Management / Firewall recommendations

1) Allow Googlebot and Google-Extended

Create a Firewall rule (Action: Allow) with expression:

(http.user_agent contains "Googlebot") or (ip.src in {66.249.64.0/19,64.233.160.0/19,66.102.0.0/20,66.249.64.0/19})

Place this rule above any blocking rules.

2) Block or challenge specific bots (example: GPTBot, ClaudeBot)

Create a Firewall rule (Action: Block) with expression:

(http.user_agent contains "GPTBot") or (http.user_agent contains "ClaudeBot") or (http.user_agent contains "Meta-externalAgent")

3) Allow sitemap and robots access

Ensure there are no firewall rules blocking requests to `/sitemap.xml`, `/sitemap.html`, or `/robots.txt`.

4) Rate limiting

If you experience abusive scanning, enable Cloudflare Rate Limiting for suspicious endpoints, but do not block Google IP ranges or common crawlers.

5) Testing

Use curl to simulate Googlebot and verify 200:

curl -I -A "Mozilla/5.0 (compatible; Googlebot/2.1; +http://www.google.com/bot.html)" https://www.memoinfotech.com/

If you get anything other than 200 (or 301 → 200 after redirects), check firewall rules and Cloudflare logs.
