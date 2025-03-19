import React from 'react';

type ConfirmDialogProps = {
  title: string;
  message: string;
  selectedItem: string;
  onDelete: (id: string) => void;
  onCancel: () => void;
}

const ConfirmDialog = ({
  title,
  message,
  selectedItem,
  onDelete,
  onCancel,
}: ConfirmDialogProps) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/30 transition-opacity" />
      
      {/* Dialog */}
      <div className="relative z-50 w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 shadow-xl transition-all">
        {/* Title */}
        <h3 className="text-lg font-medium leading-6 text-gray-900 mb-4">
          {title}
        </h3>

        {/* Message */}
        <div className="mt-2">
          <p className="text-sm text-gray-500">
            {message}
          </p>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex justify-end space-x-3">
          <button
            type="button"
            onClick={onCancel}
            className="inline-flex justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Cancel
          </button>
          <button
            type="button"
            onClick={() => onDelete(selectedItem)}
            className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDialog;