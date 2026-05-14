import {
  Copy,
  ExternalLink
} from 'lucide-react';

import QRCode from 'react-qr-code';

import toast from 'react-hot-toast';

function UrlDetailsModal({
  url,
  onClose
}) {

  if (!url) return null;

  const copyLink = () => {

    navigator.clipboard.writeText(
      url.shortUrl
    );

    toast.success('Copied');
  };

  return (

    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-50 px-4">

      <div className="glass-card rounded-3xl w-full max-w-2xl p-8 relative">

        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white text-xl"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 gap-10">

          <div>

            <h2 className="text-3xl font-bold mb-6">
              URL Details
            </h2>

            <div className="space-y-5">

              <div>

                <p className="text-gray-400 text-sm mb-1">
                  Original URL
                </p>

                <p className="break-all">
                  {url.original_url}
                </p>

              </div>

              <div>

                <p className="text-gray-400 text-sm mb-1">
                  Short URL
                </p>

                <p className="text-indigo-400 break-all">
                  {url.shortUrl}
                </p>

              </div>

              <div className="flex gap-8">

                <div>

                  <p className="text-gray-400 text-sm mb-1">
                    Clicks
                  </p>

                  <p className="text-2xl font-bold">
                    {url.click_count}
                  </p>

                </div>

                <div>

                  <p className="text-gray-400 text-sm mb-1">
                    Created
                  </p>

                  <p>
                    {new Date(
                      url.created_at
                    ).toLocaleDateString()}
                  </p>

                </div>

              </div>

              <div className="flex gap-3 pt-4">

                <button
                  onClick={copyLink}
                  className="bg-white/5 hover:bg-white/10 transition px-5 py-3 rounded-xl flex items-center gap-2"
                >

                  <Copy size={18} />

                  Copy

                </button>

                <a
                  href={url.shortUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="bg-indigo-600 hover:bg-indigo-500 transition px-5 py-3 rounded-xl flex items-center gap-2"
                >

                  <ExternalLink size={18} />

                  Open

                </a>

              </div>

            </div>

          </div>

          <div className="flex items-center justify-center">

            <div className="bg-white p-5 rounded-3xl">

              <QRCode
                value={url.shortUrl}
                size={220}
              />

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default UrlDetailsModal;
