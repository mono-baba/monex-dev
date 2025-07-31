#!/usr/bin/env node

import { readdir, readFile, writeFile } from 'fs/promises'
import { join } from 'path'

async function convertToCRLF(filePath) {
  try {
    const content = await readFile(filePath, 'utf8')
    const crlfContent = content.replace(/(?<!\r)\n/g, '\r\n')
    await writeFile(filePath, crlfContent, 'utf8')
    console.log(`Converted: ${filePath}`)
  } catch (error) {
    console.error(`Error converting ${filePath}:`, error.message)
  }
}

async function processDirectory(dir) {
  const entries = await readdir(dir, { withFileTypes: true })
  
  for (const entry of entries) {
    const fullPath = join(dir, entry.name)
    
    if (entry.isDirectory()) {
      await processDirectory(fullPath)
    } else if (entry.isFile()) {
      // Convert text files only
      if (fullPath.match(/\.(html|css|js|json|txt|xml|svg)$/i)) {
        await convertToCRLF(fullPath)
      }
    }
  }
}

// Main execution
const distPath = './dist'

try {
  await processDirectory(distPath)
  console.log('Line ending conversion completed!')
} catch (error) {
  console.error('Error:', error.message)
  process.exit(1)
}