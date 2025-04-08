import React from 'react';

export default function CursorUIMap() {
  return (
    <div className="space-y-4 sm:space-y-6">
      {/* Main Map */}
      <div className="relative bg-[#1E1E1E] rounded-xl overflow-hidden border border-white/10">
        {/* Window Controls */}
        <div className="h-5 sm:h-7 bg-[#2D2D2D] flex items-center px-2 sm:px-3">
          <div className="flex space-x-1.5 sm:space-x-2">
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FF5F56]"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#FFBD2E]"></div>
            <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-[#27C93F]"></div>
          </div>
        </div>

        <div className="aspect-video relative p-0.5 sm:p-1">
          {/* File Explorer */}
          <div className="absolute top-0 left-0 bottom-0 w-1/5 bg-[#252526] rounded border border-white/10">
            <div className="p-1 sm:p-2 text-[10px] xs:text-xs text-gray-400 truncate">File Explorer</div>
          </div>

          {/* Editor Area */}
          <div className="absolute top-0 left-[21%] right-[21%] bottom-24 sm:bottom-32 bg-[#252526] rounded border border-white/10">
            <div className="p-1 sm:p-2 text-[10px] xs:text-xs text-gray-400 truncate">Editor</div>
          </div>

          {/* Chat Panel */}
          <div className="absolute top-0 right-0 bottom-0 w-1/5 bg-[#252526] rounded border border-white/10">
            <div className="p-1 sm:p-2 text-[10px] xs:text-xs text-gray-400 truncate">AI Chat</div>
          </div>

          {/* Terminal */}
          <div className="absolute left-[21%] right-[21%] bottom-0 h-20 sm:h-28 bg-[#252526] rounded border border-white/10">
            <div className="p-1 sm:p-2 text-[10px] xs:text-xs text-gray-400 truncate">Terminal</div>
          </div>

          {/* Keyboard Shortcut Labels */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-8 sm:top-12 left-[10%] bg-black/90 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] xs:text-xs text-white whitespace-nowrap">
              ⌘/Ctrl+B
            </div>
            <div className="absolute top-8 sm:top-12 right-[10%] bg-black/90 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] xs:text-xs text-white whitespace-nowrap">
              ⌘/Ctrl+L
            </div>
            <div className="absolute bottom-10 sm:bottom-14 left-1/2 -translate-x-1/2 bg-black/90 px-1.5 sm:px-2 py-0.5 sm:py-1 rounded text-[10px] xs:text-xs text-white whitespace-nowrap">
              ⌘/Ctrl+`
            </div>
          </div>
        </div>
      </div>

      {/* Legend */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 p-3 sm:p-4 bg-[#252526] rounded-xl border border-white/10">
        <div className="min-w-0">
          <h3 className="text-white text-xs sm:text-sm font-medium mb-2">Navigation</h3>
          <ul className="space-y-1.5 sm:space-y-2">
            <li className="text-gray-400 text-[10px] sm:text-sm flex items-center space-x-2">
              <kbd className="text-blue-400 font-mono whitespace-nowrap">⌘/Ctrl+B</kbd>
              <span>-</span>
              <span className="truncate">Toggle File Explorer</span>
            </li>
            <li className="text-gray-400 text-[10px] sm:text-sm flex items-center space-x-2">
              <kbd className="text-blue-400 font-mono whitespace-nowrap">⌘/Ctrl+P</kbd>
              <span>-</span>
              <span className="truncate">Quick File Open</span>
            </li>
          </ul>
        </div>
        <div className="min-w-0">
          <h3 className="text-white text-xs sm:text-sm font-medium mb-2">AI Features</h3>
          <ul className="space-y-1.5 sm:space-y-2">
            <li className="text-gray-400 text-[10px] sm:text-sm flex items-center space-x-2">
              <kbd className="text-blue-400 font-mono whitespace-nowrap">⌘/Ctrl+L</kbd>
              <span>-</span>
              <span className="truncate">AI Chat Panel</span>
            </li>
            <li className="text-gray-400 text-[10px] sm:text-sm flex items-center space-x-2">
              <kbd className="text-blue-400 font-mono whitespace-nowrap">⌘/Ctrl+K</kbd>
              <span>-</span>
              <span className="truncate">Quick Actions</span>
            </li>
          </ul>
        </div>
        <div className="min-w-0">
          <h3 className="text-white text-xs sm:text-sm font-medium mb-2">Development</h3>
          <ul className="space-y-1.5 sm:space-y-2">
            <li className="text-gray-400 text-[10px] sm:text-sm flex items-center space-x-2">
              <kbd className="text-blue-400 font-mono whitespace-nowrap">⌘/Ctrl+`</kbd>
              <span>-</span>
              <span className="truncate">Toggle Terminal</span>
            </li>
            <li className="text-gray-400 text-[10px] sm:text-sm flex items-center space-x-2">
              <kbd className="text-blue-400 font-mono whitespace-nowrap">⌘/Ctrl+S</kbd>
              <span>-</span>
              <span className="truncate">Save File</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
