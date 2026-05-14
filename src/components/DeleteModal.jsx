function DeleteModal({
  open,
  onClose,
  onConfirm,
  loading
}) {

  if (!open) return null;

  return (

    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">

      <div className="glass-card rounded-3xl w-full max-w-md p-8 border border-red-500/10">

        <div className="text-center">

          <div className="text-6xl mb-5">
            🗑️
          </div>

          <h2 className="text-3xl font-bold mb-3">
            Delete URL?
          </h2>

          <p className="text-gray-400 mb-8">
            This action cannot be undone.
          </p>

          <div className="flex gap-4">

            <button
              onClick={onClose}
              className="flex-1 bg-white/5 hover:bg-white/10 transition py-3 rounded-xl"
            >
              Cancel
            </button>

            <button
              onClick={onConfirm}
              disabled={loading}
              className="flex-1 bg-red-500 hover:bg-red-400 transition py-3 rounded-xl font-semibold disabled:opacity-50"
            >

              {loading
                ? 'Deleting...'
                : 'Delete'}

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default DeleteModal;