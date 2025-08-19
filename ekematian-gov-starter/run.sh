set -euo pipefail

# 1) Cari ZIP projek (ambil yang pertama dalam folder)
ZIP=$(ls -1 *.zip 2>/dev/null | head -n1 || true)
if [ -z "${ZIP}" ]; then
  echo "❌ Tiada .zip ditemui dalam folder ini. Letak ZIP projek dulu."
  exit 1
fi
echo "📦 ZIP ditemui: $ZIP"

# 2) Bersih & unzip ke folder 'app'
rm -rf app
unzip -q "$ZIP" -d app

# 3) Masuk projek & pastikan keadaan bersih
cd app
rm -rf node_modules package-lock.json

# 4) Install dependency (ikut package.json projek)
echo "📥 npm install…"
npm install

# 5) Selaraskan versi Expo SDK & modul (baiki mismatch)
echo "🩺 expo install --fix…"
npx expo install --fix || true

# 6) Semak kesihatan asas projek (tak blok run walaupun ada amaran)
npx expo-doctor@latest || true

# 7) Mula Metro bundler dengan tunnel (senang scan QR dari phone)
echo "🚀 Start dengan tunnel…"
npx expo start --tunnel
