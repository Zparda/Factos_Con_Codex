#!/usr/bin/env bash
set -euo pipefail

# Usage:
# ./deploy/deploy-hostinger.sh <user>@<vps-ip> [/var/www/factos]
#
# Example:
# ./deploy/deploy-hostinger.sh root@31.220.12.34 /var/www/factos

TARGET="${1:-}"
REMOTE_DIR="${2:-/var/www/factos}"

if [[ -z "$TARGET" ]]; then
  echo "Missing target. Usage: $0 <user>@<vps-ip> [/var/www/factos]"
  exit 1
fi

echo "Deploying site to ${TARGET}:${REMOTE_DIR}"

# Ensure remote directory exists
ssh "$TARGET" "mkdir -p '$REMOTE_DIR'"

# Sync static website files
rsync -avz --delete \
  --exclude ".git" \
  --exclude ".superpowers" \
  --exclude "docs" \
  --exclude "deploy" \
  --exclude "factos-homepage-mockup-a-logo.html" \
  --exclude "factos-homepage-mockups.html" \
  index.html cursos.html src assets \
  "$TARGET:$REMOTE_DIR"

echo "Deploy complete."
echo "Now run on VPS (once):"
echo "  1) Install Nginx"
echo "  2) Copy deploy/nginx-factos.conf.template to /etc/nginx/sites-available/factos"
echo "  3) Edit server_name to your domain"
echo "  4) ln -s /etc/nginx/sites-available/factos /etc/nginx/sites-enabled/factos"
echo "  5) nginx -t && systemctl reload nginx"
echo "  6) certbot --nginx -d yourdomain -d www.yourdomain"

