import React from 'react';

export default function CursorUIMap() {
  return (
    <div className="space-y-6">
      {/* Main Map */}
      <div className="relative bg-[#1E1E1E] rounded-xl overflow-hidden border border-white/10">
        {/* Window Controls */}
        <div className="h-7 bg-[#2D2D2D] flex items-center px-3">
          <div className="flex space-x-2">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-3 h-3 rounded-full bg-[#27C93F]"></div>
          </div>
        </div>

        <div className="aspect-video relative p-1">
          {/* File Explorer */}
          <div className="absolute top-0 left-0 bottom-0 w-1/5 bg-[#252526] rounded border border-white/10">
            <div className="p-2 text-xs text-gray-400">File Explorer</div>
          </div>

          {/* Editor Area */}
          <div className="absolute top-0 left-[21%] right-[21%] bottom-32 bg-[#252526] rounded border border-white/10">
            <div className="p-2 text-xs text-gray-400">Editor</div>
          </div>

          {/* Chat Panel */}
          <div className="absolute top-0 right-0 bottom-0 w-1/5 bg-[#252526] rounded border border-white/10">
            <div className="p-2 text-xs text-gray-400">AI Chat</div>
          </div>

          {/* Terminal */}
          <div className="absolute left-[21%] right-[21%] bottom-0 h-28 bg-[#252526] rounded border border-white/10">
            <div className="p-2 text-xs text-gray-400">Terminal</div>
          </div>

          {/* Keyboard Shortcut Labels */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-12 left-[10%] bg-black/90 px-2 py-1 rounded text-xs text-white">
              ⌘/Ctrl + B
            </div>
            <div className="absolute top-12 right-[10%] bg-black/90 px-2 py-1 rounded text-xs text-white">
              ⌘/Ctrl + L
            </div>
            <div className="absolute bottom-14 left-1/2 -translate-x-1/2 bg-black/90 px-2 py-1 rounded text-xs text-white">
              ⌘/Ctrl + `
            </div>
          </div>
        </div>
      </div>

      {/* Updated Legend */}
      <div className="grid grid-cols-3 gap-6 p-4 bg-[#252526] rounded-xl border border-white/10">
        <div>
          <h3 className="text-white text-sm font-medium mb-2">Navigation</h3>
          <ul className="space-y-2">
            <li className="text-gray-400 text-sm whitespace-nowrap">
              <kbd className="text-blue-400 font-mono">⌘/Ctrl+B</kbd>
              <span className="mx-2">-</span>
              Toggle File Explorer
            </li>
            <li className="text-gray-400 text-sm whitespace-nowrap">
              <kbd className="text-blue-400 font-mono">⌘/Ctrl+P</kbd>
              <span className="mx-2">-</span>
              Quick File Open
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-sm font-medium mb-2">AI Features</h3>
          <ul className="space-y-2">
            <li className="text-gray-400 text-sm whitespace-nowrap">
              <kbd className="text-blue-400 font-mono">⌘/Ctrl+L</kbd>
              <span className="mx-2">-</span>
              AI Chat Panel
            </li>
            <li className="text-gray-400 text-sm whitespace-nowrap">
              <kbd className="text-blue-400 font-mono">⌘/Ctrl+K</kbd>
              <span className="mx-2">-</span>
              Quick Actions
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-white text-sm font-medium mb-2">Development</h3>
          <ul className="space-y-2">
            <li className="text-gray-400 text-sm whitespace-nowrap">
              <kbd className="text-blue-400 font-mono">⌘/Ctrl+`</kbd>
              <span className="mx-2">-</span>
              Toggle Terminal
            </li>
            <li className="text-gray-400 text-sm whitespace-nowrap">
              <kbd className="text-blue-400 font-mono">⌘/Ctrl+S</kbd>
              <span className="mx-2">-</span>
              Save File
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
