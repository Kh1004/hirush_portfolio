import { NextResponse } from 'next/server';
import JSZip from 'jszip';
import path from 'path';
import fs from 'fs';

function addFolderToZip(zip: JSZip, folderPath: string, zipFolder: string) {
  if (!fs.existsSync(folderPath)) return;
  let entries: fs.Dirent[];
  try {
    entries = fs.readdirSync(folderPath, { withFileTypes: true });
  } catch {
    return;
  }
  for (const entry of entries) {
    const fullPath = path.join(folderPath, entry.name);
    const zipPath = zipFolder ? `${zipFolder}/${entry.name}` : entry.name;
    if (entry.isDirectory()) {
      // Skip node_modules and .next
      if (entry.name === 'node_modules' || entry.name === '.next') continue;
      addFolderToZip(zip, fullPath, zipPath);
    } else {
      try {
        const content = fs.readFileSync(fullPath);
        zip.file(zipPath, content);
      } catch {
        // skip unreadable files
      }
    }
  }
}

export async function GET() {
  try {
    const projectRoot = process.cwd();
    const zip = new JSZip();

    // Add src and public directories
    addFolderToZip(zip, path.join(projectRoot, 'src'), 'src');
    addFolderToZip(zip, path.join(projectRoot, 'public'), 'public');

    // Add root config files
    const configFiles = [
      'package.json',
      'next.config.mjs',
      'tailwind.config.js',
      'tsconfig.json',
      'postcss.config.js',
      '.eslintrc.json',
      '.prettierrc',
      'image-hosts.config.mjs',
      'README.md',
      'next-env.d.ts',
    ];

    for (const file of configFiles) {
      const filePath = path.join(projectRoot, file);
      if (fs.existsSync(filePath)) {
        try {
          zip.file(file, fs.readFileSync(filePath));
        } catch {
          // skip unreadable config files
        }
      }
    }

    const buffer = await zip.generateAsync({
      type: 'uint8array',
      compression: 'DEFLATE',
      compressionOptions: { level: 6 },
    });

    if (!buffer || buffer.length === 0) {
      return NextResponse.json({ error: 'Generated zip is empty' }, { status: 500 });
    }

    const blob = new Blob([buffer], { type: 'application/zip' });

    return new NextResponse(blob, {
      status: 200,
      headers: {
        'Content-Type': 'application/zip',
        'Content-Disposition': 'attachment; filename="project-export.zip"',
        'Content-Length': buffer.length.toString(),
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error';
    console.error('Export error:', message);
    return NextResponse.json({ error: `Failed to export project: ${message}` }, { status: 500 });
  }
}
