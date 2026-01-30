Redirects & canonical host — how to enforce https://www.memoinfotech.com

1) Cloudflare (recommended if you're using Cloudflare):

- In the Cloudflare Dashboard → Rules → Redirects, add a rule:
  Source: https://Memoinfotech.com/*
  Destination: https://www.memoinfotech.com/$1
  Status: 301 (Permanent Redirect)

- Also enable "Always Use HTTPS" in SSL/TLS → Edge Certificates.

2) Nginx example (copy to your server config):

server {
  listen 80;
  server_name Memoinfotech.com;
  return 301 https://www.memoinfotech.com$request_uri;
}

server {
  listen 443 ssl;
  server_name Memoinfotech.com;
  # ssl_certificate ... ssl_certificate_key ...
  return 301 https://www.memoinfotech.com$request_uri;
}

# Preferred site block (www)
server {
  listen 80; listen 443 ssl;
  server_name www.memoinfotech.com;
  # ssl config, root, proxy etc.
}

3) Vercel / Netlify

- Vercel: In Project Settings → Domains, set `www.memoinfotech.com` as primary domain and enable automatic non-www redirects.
- Netlify: In Site settings → Domain management, set primary domain to `www.memoinfotech.com` and enable the 'Force HTTPS' option.

4) Apache .htaccess (if using Apache+mod_rewrite):

RewriteEngine On
RewriteCond %{HTTP_HOST} !^www\. [NC]
RewriteRule ^(.*)$ https://www.memoinfotech.com/$1 [L,R=301]


Verification commands (run from terminal):

curl -I -L http://Memoinfotech.com/
curl -I -L https://Memoinfotech.com/
curl -I -L http://www.memoinfotech.com/
curl -I -L https://www.memoinfotech.com/

Each should resolve/redirect to https://www.memoinfotech.com/ and return a final 200.
