// components/mardown-viewer.tsx
// This component renders Markdown content with proper styling and support for GitHub Flavored Markdown

import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { cn } from '@/lib/utils'

/**
 * Props for the MarkdownViewer component
 * @interface MarkdownViewerProps
 * @property {string} content - The markdown content to render
 * @property {string} [className] - Additional CSS classes to apply to the container
 * @property {boolean} [isImportant=false] - Whether to style the content with additional emphasis (red border)
 */
interface MarkdownViewerProps {
  content: string
  className?: string
  isImportant?: boolean
}

/**
 * Renders markdown content with proper styling and support for GitHub Flavored Markdown
 * 
 * Features:
 * - Support for tables, checklists, and other GitHub Flavored Markdown
 * - Links open in new tabs for safety
 * - Proper styling for code blocks and inline code
 * - Special styling for important content
 * - Dark mode support
 * 
 * @example
 * <MarkdownViewer 
 *   content="# Hello World\nThis is **bold** text" 
 *   isImportant={true}
 * />
 */
export function MarkdownViewer({ 
  content, 
  className, 
  isImportant = false 
}: MarkdownViewerProps) {
  return (
    <div 
      className={cn(
        "prose dark:prose-invert max-w-full",
        isImportant && "border-l-4 border-red-500 pl-4 bg-red-50/20",
        className
      )}
    >
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={{
          a: ({node, ...props}) => (
            <a 
              {...props} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-primary hover:underline"
            />
          ),
          code: ({node, ...props}) => (
            <code 
              {...props} 
              className="bg-muted px-1 py-0.5 rounded text-sm"
            />
          ),
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  )
}