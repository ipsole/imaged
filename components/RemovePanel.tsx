/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/

import React from 'react';

interface RemovePanelProps {
  onApplyRemove: () => void;
  onClearMask: () => void;
  isLoading: boolean;
  isMaskDrawn: boolean;
}

const RemovePanel: React.FC<RemovePanelProps> = ({ onApplyRemove, onClearMask, isLoading, isMaskDrawn }) => {
  return (
    <div className="w-full bg-gray-800/50 border border-gray-700 rounded-lg p-4 flex flex-col items-center gap-4 animate-fade-in backdrop-blur-sm">
      <h3 className="text-lg font-semibold text-gray-300">Remove Object</h3>
      <p className="text-sm text-gray-400 -mt-2 text-center">Paint over any object or blemish you want to remove from the image.</p>
      
      <div className="w-full flex items-center justify-center gap-2">
        <button
            onClick={onClearMask}
            disabled={isLoading || !isMaskDrawn}
            className="w-full text-center bg-white/10 border border-white/20 text-gray-200 font-semibold py-4 px-6 rounded-lg transition-all duration-200 ease-in-out hover:bg-white/20 hover:border-white/30 active:scale-95 text-base disabled:opacity-50 disabled:cursor-not-allowed disabled:bg-white/5"
        >
            Clear Mask
        </button>
        <button
            onClick={onApplyRemove}
            disabled={isLoading || !isMaskDrawn}
            className="w-full bg-gradient-to-br from-blue-600 to-blue-500 text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 ease-in-out shadow-lg shadow-blue-500/20 hover:shadow-xl hover:shadow-blue-500/40 hover:-translate-y-px active:scale-95 active:shadow-inner text-base disabled:from-blue-800 disabled:to-blue-700 disabled:shadow-none disabled:cursor-not-allowed disabled:transform-none"
        >
            Remove Object
        </button>
      </div>
    </div>
  );
};

export default RemovePanel;
