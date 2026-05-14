import { Copy, ExternalLink } from "lucide-react";

import { motion } from "framer-motion";

import toast from "react-hot-toast";

import { useState } from "react";

import QrModal from "./QrModal";

import { Trash2 } from "lucide-react";

import DeleteModal from "./DeleteModal";

import api from "../api/axios";

import UrlDetailsModal from "./UrlDetailsModal";

function UrlList({ urls }) {
  const [selectedQr, setSelectedQr] = useState(null);

  const [copiedId, setCopiedId] = useState(null);

  const [selectedUrl, setSelectedUrl] = useState(null);

  const copyToClipboard = (text, id) => {
    navigator.clipboard.writeText(text);

    setCopiedId(id);

    toast.success("Copied to clipboard");

    setTimeout(() => {
      setCopiedId(null);
    }, 2000);
  };

  const [deleteOpen, setDeleteOpen] = useState(false);

  const [selectedDeleteId, setSelectedDeleteId] = useState(null);

  const [deleteLoading, setDeleteLoading] = useState(false);

  if (!urls.length) {
    return (
      <div className="glass-card rounded-3xl p-12 mt-8 text-center">
        <div className="text-6xl mb-4">🔗</div>

        <h2 className="text-2xl font-bold mb-3">No URLs Yet</h2>

        <p className="text-gray-400 max-w-md mx-auto">
          Start by creating your first short URL to track clicks and analytics.
        </p>
      </div>
    );
  }

  const handleDelete = async () => {
    try {
      setDeleteLoading(true);

      await api.delete(`/url/${selectedDeleteId}`);

      toast.success("URL deleted");

      window.location.reload();
    } catch (error) {
      toast.error(error.response?.data?.message || "Delete failed");
    } finally {
      setDeleteLoading(false);

      setDeleteOpen(false);
    }
  };

  return (
    <div className="glass-card rounded-3xl p-6 mt-8">
      <h2 className="text-2xl font-bold mb-6">Your URLs</h2>

      <div className="space-y-4">
        {urls.map((url) => (
          <motion.div
            key={url.id}
            whileHover={{
              y: -4,
            }}
            onClick={() => setSelectedUrl(url)}
            className="bg-white/5 border border-white/5 rounded-2xl p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4 cursor-pointer"
          >
            <div className="flex-1 overflow-hidden">
              <p className="text-gray-400 text-sm mb-1">Original URL</p>

              <p className="truncate">{url.original_url}</p>

              <p className="text-indigo-400 mt-2">{url.shortUrl}</p>
            </div>

            <div className="flex items-center gap-3">
              <div className="text-center">
                <p className="text-gray-400 text-sm">Clicks</p>

                <p className="font-bold">{url.click_count}</p>
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();

                  setSelectedQr(url.shortUrl);
                }}
                className="bg-cyan-600 hover:bg-cyan-500 transition px-4 py-3 rounded-xl text-sm font-semibold"
              >
                QR
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();

                  copyToClipboard(url.shortUrl, url.id);
                }}
                className={`transition p-3 rounded-xl ${
                  copiedId === url.id
                    ? "bg-green-600"
                    : "bg-white/5 hover:bg-white/10"
                }`}
              >
                {copiedId === url.id ? "\u2713" : <Copy size={18} />}
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();

                  setSelectedDeleteId(url.id);

                  setDeleteOpen(true);
                }}
                className="bg-red-500/10 hover:bg-red-500/20 transition p-3 rounded-xl text-red-400"
              >
                <Trash2 size={18} />
              </button>

              <a
                href={url.shortUrl}
                target="_blank"
                rel="noreferrer"
                onClick={(e) => {
                  e.stopPropagation();
                }}
                className="bg-indigo-600 hover:bg-indigo-500 transition p-3 rounded-xl"
              >
                <ExternalLink size={18} />
              </a>
            </div>
          </motion.div>
        ))}
      </div>
      <QrModal url={selectedQr} onClose={() => setSelectedQr(null)} />
      <UrlDetailsModal url={selectedUrl} onClose={() => setSelectedUrl(null)} />
      <DeleteModal
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={handleDelete}
        loading={deleteLoading}
      />
    </div>
  );
}

export default UrlList;
