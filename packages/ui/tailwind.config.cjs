// tailwind.config.cjs
import path from 'path'
import { fileURLToPath } from 'url'
import { dirname } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export default {
  content: [path.join(__dirname, 'src/**/*.{js,ts,jsx,tsx}')],
  theme: { extend: {} },
}
