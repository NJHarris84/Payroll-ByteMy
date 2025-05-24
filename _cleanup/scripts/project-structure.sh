#!/bin/bash

# Script to display project structure excluding build artifacts and common ignored files

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

echo -e "${GREEN}Project Structure (excluding build artifacts)${NC}"
echo "================================================"

# Option 1: Simple tree with exclusions (if tree is installed)
if command -v tree &> /dev/null; then
    echo -e "${BLUE}Using tree command...${NC}"
    tree -a -I 'node_modules|.next|.git|dist|build|coverage|.cache|.turbo|.vercel|*.log|.DS_Store|out|.env*' --dirsfirst
else
    echo -e "${YELLOW}Tree command not found. Using find instead...${NC}"
    
    # Option 2: Using find command (works everywhere)
    find . -type f -o -type d | \
    grep -v -E '(node_modules|\.next|\.git|dist|build|coverage|\.cache|\.turbo|\.vercel|\.log|\.DS_Store|out|\.env)' | \
    grep -v -E '(\.svg|\.png|\.jpg|\.jpeg|\.gif|\.ico|\.webp)$' | \
    sort | \
    while read -r path; do
        # Remove leading ./
        path="${path#./}"
        
        # Skip if empty
        [ -z "$path" ] && continue
        
        # Count depth for indentation
        depth=$(echo "$path" | tr -cd '/' | wc -c)
        
        # Create indentation
        indent=""
        for ((i=0; i<depth; i++)); do
            indent="  $indent"
        done
        
        # Get just the filename/dirname
        basename=$(basename "$path")
        
        # Check if directory
        if [ -d "$path" ]; then
            echo -e "${indent}${BLUE}${basename}/${NC}"
        else
            echo -e "${indent}${basename}"
        fi
    done
fi

echo ""
echo -e "${GREEN}Summary:${NC}"
echo "================================================"

# Count files by type
echo -e "${YELLOW}File counts by extension:${NC}"
find . -type f \
    -not -path "*/node_modules/*" \
    -not -path "*/.next/*" \
    -not -path "*/.git/*" \
    -not -path "*/dist/*" \
    -not -path "*/build/*" \
    -not -path "*/coverage/*" \
    -name "*.*" | \
    sed 's/.*\.//' | \
    sort | uniq -c | \
    sort -rn | \
    head -20

echo ""
echo -e "${YELLOW}Total counts:${NC}"
echo -n "Directories: "
find . -type d \
    -not -path "*/node_modules/*" \
    -not -path "*/.next/*" \
    -not -path "*/.git/*" \
    -not -path "*/dist/*" \
    -not -path "*/build/*" | wc -l

echo -n "Files: "
find . -type f \
    -not -path "*/node_modules/*" \
    -not -path "*/.next/*" \
    -not -path "*/.git/*" \
    -not -path "*/dist/*" \
    -not -path "*/build/*" | wc -l

# Option 3: Generate a text file with the structure
echo ""
echo -e "${GREEN}Generating project-structure.txt...${NC}"

{
    echo "Project Structure Generated on $(date)"
    echo "========================================"
    echo ""
    
    if command -v tree &> /dev/null; then
        tree -a -I 'node_modules|.next|.git|dist|build|coverage|.cache|.turbo|.vercel|*.log|.DS_Store|out|.env*' --dirsfirst -F
    else
        find . -type f -o -type d | \
        grep -v -E '(node_modules|\.next|\.git|dist|build|coverage|\.cache|\.turbo|\.vercel|\.log|\.DS_Store|out|\.env)' | \
        sort
    fi
    
    echo ""
    echo "File List with Sizes:"
    echo "===================="
    find . -type f \
        -not -path "*/node_modules/*" \
        -not -path "*/.next/*" \
        -not -path "*/.git/*" \
        -not -path "*/dist/*" \
        -not -path "*/build/*" \
        -not -path "*/coverage/*" \
        -not -path "*/.cache/*" \
        -not -path "*/.turbo/*" \
        -exec ls -lh {} \; | \
        awk '{print $9, "(" $5 ")"}'
} > project-structure.txt

echo -e "${GREEN}✓ Project structure saved to project-structure.txt${NC}"

# Option 4: Create a more detailed JSON structure
echo ""
echo -e "${GREEN}Generating project-structure.json...${NC}"

node -e '
const fs = require("fs");
const path = require("path");

const ignoreDirs = [
    "node_modules", ".next", ".git", "dist", "build", 
    "coverage", ".cache", ".turbo", ".vercel", "out"
];

const ignoreFiles = [
    ".DS_Store", ".env", ".env.local", ".env.production"
];

function shouldIgnore(filePath) {
    const parts = filePath.split(path.sep);
    return parts.some(part => 
        ignoreDirs.includes(part) || 
        ignoreFiles.some(ignored => part.startsWith(ignored))
    );
}

function getDirectoryStructure(dir, baseDir = dir) {
    const stats = fs.statSync(dir);
    const info = {
        name: path.basename(dir),
        path: path.relative(baseDir, dir),
        type: stats.isDirectory() ? "directory" : "file"
    };

    if (stats.isDirectory()) {
        try {
            info.children = fs.readdirSync(dir)
                .filter(child => !shouldIgnore(path.join(dir, child)))
                .map(child => getDirectoryStructure(path.join(dir, child), baseDir))
                .filter(child => child !== null);
        } catch (e) {
            info.children = [];
        }
    } else {
        info.size = stats.size;
        info.extension = path.extname(dir);
        info.modified = stats.mtime;
    }

    return info;
}

try {
    const structure = getDirectoryStructure(".");
    fs.writeFileSync(
        "project-structure.json", 
        JSON.stringify(structure, null, 2)
    );
    console.log("✓ JSON structure saved to project-structure.json");
} catch (error) {
    console.error("Error generating JSON structure:", error.message);
}
' 2>/dev/null || echo -e "${YELLOW}Note: Node.js required for JSON generation${NC}"

echo ""
echo -e "${GREEN}Done! Check project-structure.txt and project-structure.json${NC}"