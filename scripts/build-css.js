import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// FeatureのCSS結合
function buildFeatureCSS(featureName) {
  const featureDir = path.join(__dirname, '..', 'public', 'style', 'feature', featureName)
  const componentsDir = path.join(featureDir, 'components')
  const styleFile = path.join(featureDir, 'style.css')
  
  if (!fs.existsSync(styleFile)) {
    console.log(`Style file not found for ${featureName}, skipping...`)
    return
  }

  console.log(`Building CSS for ${featureName}...`)
  
  let combinedCSS = ''
  
  // Google Fontsインポート
  combinedCSS += '/* Google Fonts */\n'
  combinedCSS += '@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@100..900&display=swap");\n\n'
  
  // Componentsディレクトリが存在する場合
  if (fs.existsSync(componentsDir)) {
    const componentFiles = fs.readdirSync(componentsDir).filter(file => file.endsWith('.css'))
    
    for (const file of componentFiles) {
      const filePath = path.join(componentsDir, file)
      const content = fs.readFileSync(filePath, 'utf8')
      const componentName = path.basename(file, '.css')
      
      combinedCSS += `/* ===== ${componentName.toUpperCase()} COMPONENT ===== */\n`
      combinedCSS += content + '\n\n'
    }
  }
  
  // 元のstyle.cssからGoogle Fontsと@importを除いた内容を追加
  const originalContent = fs.readFileSync(styleFile, 'utf8')
  const contentWithoutImports = originalContent
    .split('\n')
    .filter(line => !line.trim().startsWith('@import'))
    .join('\n')
    .trim()
  
  if (contentWithoutImports) {
    combinedCSS += `/* ===== ${featureName.toUpperCase()} MAIN STYLES ===== */\n`
    combinedCSS += contentWithoutImports + '\n'
  }
  
  // 結合されたCSSを出力
  const outputFile = path.join(featureDir, 'style.css')
  fs.writeFileSync(outputFile, combinedCSS)
  
  console.log(`✓ Combined CSS written to: ${outputFile}`)
}

// すべてのfeatureディレクトリを取得
const featureBaseDir = path.join(__dirname, '..', 'public', 'style', 'feature')
const featureDirs = fs.readdirSync(featureBaseDir).filter(dir => {
  const fullPath = path.join(featureBaseDir, dir)
  return fs.statSync(fullPath).isDirectory() && dir !== 'common'
})

console.log('Found features:', featureDirs)

// 各featureのCSSを結合
for (const featureName of featureDirs) {
  buildFeatureCSS(featureName)
}

console.log('CSS build completed!')