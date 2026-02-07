import { readdir, writeFile, mkdir } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CONTENT_DIR = join(__dirname, '..', 'src', 'content', 'blog');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const question = (query) => new Promise((resolve) => rl.question(query, resolve));

async function getNextDevlogNumber() {
  try {
    const files = await readdir(CONTENT_DIR);
    const devlogFiles = files.filter(f => f.startsWith('devlog-'));

    if (devlogFiles.length === 0) return 1;

    const numbers = devlogFiles
      .map(f => {
        const match = f.match(/devlog-(\d+)-(\d+)/);
        return match ? parseInt(match[1]) * 100 + parseInt(match[2]) : 0;
      })
      .filter(n => n > 0);

    const maxNum = Math.max(...numbers);
    const month = Math.floor(maxNum / 100);
    const day = maxNum % 100;

    return { month, day };
  } catch (error) {
    return { month: 1, day: 1 };
  }
}

async function createDevlog() {
  console.log('\n📝 Create a new DevLog entry\n');

  // Get suggested date based on last devlog
  const lastDate = await getNextDevlogNumber();
  const today = new Date();
  const suggestedMonth = today.getMonth() + 1;
  const suggestedDay = today.getDate();

  // Prompt for date
  const monthInput = await question(`Month [${suggestedMonth}]: `);
  const month = monthInput.trim() || suggestedMonth;

  const dayInput = await question(`Day [${suggestedDay}]: `);
  const day = dayInput.trim() || suggestedDay;

  // Prompt for title and description
  const defaultTitle = `DevLog ${month}-${day}`;
  const titleInput = await question(`Title [${defaultTitle}]: `);
  const title = titleInput.trim() || defaultTitle;

  const descriptionInput = await question(`Description [${title}]: `);
  const description = descriptionInput.trim() || title;

  // Generate filename
  const filename = `devlog-${month}-${day}.md`;
  const filepath = join(CONTENT_DIR, filename);

  // Format date for frontmatter (YYYY-MM-DD)
  const year = today.getFullYear();
  const pubDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

  // Create content
  const content = `---
title: '${title}'
description: '${description}'
pubDate: '${pubDate}'
---

## Outcomes

Write your devlog content here...

`;

  try {
    // Ensure directory exists
    await mkdir(CONTENT_DIR, { recursive: true });

    // Write file
    await writeFile(filepath, content, 'utf-8');

    console.log(`\n✅ Created: ${filename}`);
    console.log(`📁 Location: ${filepath}\n`);
  } catch (error) {
    console.error('❌ Error creating devlog:', error.message);
    process.exit(1);
  }

  rl.close();
}

createDevlog();
