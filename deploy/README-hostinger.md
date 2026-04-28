# Deploy en VPS Hostinger (Sitio Estatico)

Este proyecto es un sitio estatico (`index.html`, `cursos.html`, `src/`, `assets/`), asi que la forma mas simple y robusta es:

1. VPS Ubuntu + Nginx
2. Subida por `rsync`
3. SSL con Certbot

## 1) Preparar VPS (una sola vez)

Conectate por SSH:

```bash
ssh <usuario>@<ip-del-vps>
```

Instala Nginx y Certbot:

```bash
sudo apt update
sudo apt install -y nginx certbot python3-certbot-nginx
```

Crea directorio web:

```bash
sudo mkdir -p /var/www/factos
sudo chown -R $USER:$USER /var/www/factos
```

## 2) Configurar Nginx (una sola vez)

Copia la plantilla `deploy/nginx-factos.conf.template` a:

`/etc/nginx/sites-available/factos`

Edita `server_name` con tu dominio real.

Activa sitio:

```bash
sudo ln -s /etc/nginx/sites-available/factos /etc/nginx/sites-enabled/factos
sudo nginx -t
sudo systemctl reload nginx
```

## 3) Deploy de archivos (cada vez que actualices)

Desde tu equipo local, ejecuta:

```bash
./deploy/deploy-hostinger.sh <usuario>@<ip-del-vps> /var/www/factos
```

Ejemplo:

```bash
./deploy/deploy-hostinger.sh root@31.220.12.34 /var/www/factos
```

En Windows PowerShell:

```powershell
.\deploy\deploy-hostinger.ps1 -Target "root@31.220.12.34" -RemoteDir "/var/www/factos"
```

## 4) Activar HTTPS (una sola vez, con dominio apuntando al VPS)

```bash
sudo certbot --nginx -d factossolutions.com -d www.factossolutions.com
```

## 5) Verificacion rapida

```bash
curl -I http://factossolutions.com
curl -I https://factossolutions.com
```

Deberias ver `200` o redireccion a HTTPS.

