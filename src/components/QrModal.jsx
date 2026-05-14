import QRCode from 'react-qr-code';

function QrModal({
  url,
  onClose
}) {

  if (!url) return null;

  return (

    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">

      <div className="glass-card rounded-3xl p-8 w-full max-w-md text-center relative">

        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          ✕
        </button>

        <h2 className="text-3xl font-bold mb-6">
          QR Code
        </h2>

        <div className="bg-white p-5 rounded-2xl inline-block">

          <QRCode
            value={url}
            size={220}
          />

        </div>

        <p className="text-gray-400 mt-6 break-all">
          {url}
        </p>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 bg-indigo-600 hover:bg-indigo-500 transition px-6 py-3 rounded-xl font-semibold"
        >
          Open URL
        </a>

      </div>

    </div>
  );
}

export default QrModal;