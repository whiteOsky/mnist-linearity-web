'use client';
import { useState } from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function CodeBlock({ title, code }: { title: string; code: string }) {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {}
  };

  return (
    <div className="bg-gray-900 rounded-xl shadow-lg overflow-hidden mb-6 border border-gray-700">
      <div className="flex justify-between items-center bg-gray-800 px-4 py-2">
        <button
          className="text-left text-sm font-semibold text-gray-300 cursor-pointer"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? '▼' : '▶'} {title}
        </button>
        <button
          onClick={onCopy}
          className="text-xs px-2 py-1 rounded bg-gray-700 hover:bg-gray-600 text-gray-200"
        >
          {copied ? 'Copied' : 'Copy'}
        </button>
      </div>
      {expanded && (
        <SyntaxHighlighter language="python" style={vscDarkPlus} showLineNumbers>
          {code}
        </SyntaxHighlighter>
      )}
    </div>
  );
}

