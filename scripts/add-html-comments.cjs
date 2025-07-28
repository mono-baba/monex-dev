const fs = require('fs')
const path = require('path')

function addHtmlComments() {
  const distDir = path.join(__dirname, '../dist')
  
  // Get all HTML files in dist directory recursively
  function getHtmlFiles(dir) {
    const files = []
    const items = fs.readdirSync(dir)
    
    for (const item of items) {
      const fullPath = path.join(dir, item)
      const stat = fs.statSync(fullPath)
      
      if (stat.isDirectory()) {
        files.push(...getHtmlFiles(fullPath))
      } else if (item.endsWith('.html')) {
        files.push(fullPath)
      }
    }
    
    return files
  }
  
  const htmlFiles = getHtmlFiles(distDir)
  
  for (const filePath of htmlFiles) {
    let content = fs.readFileSync(filePath, 'utf8')
    
    // Extract and rebuild the head section with proper comments
    const headStart = content.indexOf('<head>')
    const headEnd = content.indexOf('</head>') + 7
    
    if (headStart === -1 || headEnd === -1) continue
    
    const beforeHead = content.substring(0, headStart + 6)
    const afterHead = content.substring(headEnd)
    const headContent = content.substring(headStart + 6, headEnd - 7)
    
    // Parse head content and reorganize
    const lines = headContent.split('\n').map(line => line.trim()).filter(line => line)
    
    const metaTags = []
    const commonCSS = []
    const commonJS = []
    const featureCSS = []
    const featureJS = []
    const other = []
    
    for (const line of lines) {
      if (line.includes('<meta') || line.includes('<title') || line.includes('favicon')) {
        metaTags.push(line)
      } else if (line.includes('href="/style/feature/common/')) {
        commonCSS.push(line)
      } else if (line.includes('src="/javascript/js2_8/common/') || line.includes('src="/javascript/feature/common/')) {
        commonJS.push(line)
      } else if (line.includes('href="/style/feature/') && !line.includes('/common/')) {
        featureCSS.push(line)
      } else if (line.includes('src="/javascript/feature/') && !line.includes('/common/')) {
        featureJS.push(line)
      } else {
        other.push(line)
      }
    }
    
    // Rebuild head content
    let newHeadContent = '\n'
    
    // Add meta tags first
    metaTags.forEach(tag => {
      newHeadContent += `    ${tag}\n`
    })
    
    // Add common section with comments
    if (commonCSS.length > 0 || commonJS.length > 0) {
      newHeadContent += `\n    <!-- 特設サイト共通 START -->\n`
      commonCSS.forEach(css => {
        newHeadContent += `    ${css}\n`
      })
      commonJS.forEach(js => {
        newHeadContent += `    ${js}\n`
      })
      newHeadContent += `    <!-- 特設サイト共通 END -->\n`
    }
    
    // Add feature-specific section with comments
    if (featureCSS.length > 0 || featureJS.length > 0) {
      newHeadContent += `\n    <!-- 特設サイト固有 START（新規作成のcss、jsファイルはこちらに記述ください） -->\n`
      featureCSS.forEach(css => {
        newHeadContent += `    ${css}\n`
      })
      featureJS.forEach(js => {
        newHeadContent += `    ${js}\n`
      })
      newHeadContent += `    <!-- 特設サイト固有 END -->\n`
    }
    
    // Add any other tags
    other.forEach(tag => {
      newHeadContent += `    ${tag}\n`
    })
    
    newHeadContent += '  '
    
    let newContent = beforeHead + newHeadContent + afterHead
    
    // Convert JSX comments to HTML comments for disclaimer sections
    newContent = newContent.replace(/\{\/\*\s*(<!--\s*disclaimer_num\[[^\]]+\]\s*[^>]*-->\s*)\*\/\}/g, '$1')
    
    // Clean up div wrapper around disclaimer comments
    newContent = newContent.replace(/<div>(<!-- disclaimer_num\[[^\]]+\]  [^>]*-->)<\/div>/g, '$1')
    
    fs.writeFileSync(filePath, newContent, 'utf8')
  }
  
  console.log('HTML comments added to all files')
}

addHtmlComments()