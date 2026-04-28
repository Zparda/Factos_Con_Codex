param(
  [Parameter(Mandatory = $true)]
  [string]$Target,
  [string]$RemoteDir = "/var/www/factos"
)

$ErrorActionPreference = "Stop"

Write-Host "Deploying to $Target:$RemoteDir"

ssh $Target "mkdir -p '$RemoteDir'"

rsync -avz --delete `
  --exclude ".git" `
  --exclude ".superpowers" `
  --exclude "docs" `
  --exclude "deploy" `
  --exclude "factos-homepage-mockup-a-logo.html" `
  --exclude "factos-homepage-mockups.html" `
  index.html cursos.html src assets `
  "$Target:$RemoteDir"

Write-Host "Deploy complete."

