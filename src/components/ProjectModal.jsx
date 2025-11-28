import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectModal = ({ project, isOpen, onClose }) => {
  const [currentMediaIndex, setCurrentMediaIndex] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setCurrentMediaIndex(0);
      setIsVideoPlaying(false);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  if (!project) return null;

  // Combine images and videos into a single media array
  const media = [
    ...(project.images || []).map(img => ({ type: 'image', url: img })),
    ...(project.videos || []).map(video => ({ 
      type: 'video', 
      url: video.embedUrl || video.url,
      originalUrl: video.url 
    }))
  ];
  
  // Add fallback single image if no media exists
  if (media.length === 0 && project.image) {
    media.push({ type: 'image', url: project.image });
  }

  const currentMedia = media[currentMediaIndex];

  const handlePrevMedia = () => {
    setCurrentMediaIndex((prev) => (prev === 0 ? media.length - 1 : prev - 1));
    setIsVideoPlaying(false);
  };

  const handleNextMedia = () => {
    setCurrentMediaIndex((prev) => (prev === media.length - 1 ? 0 : prev + 1));
    setIsVideoPlaying(false);
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            onClick={(e) => {
              if (e.target === e.currentTarget) {
                onClose();
              }
            }}
          >
            <div 
              className="surface-card rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close button */}
              <div className="sticky top-0 flex justify-end p-4 bg-inherit border-b border-surface-border z-10">
                <button
                  onClick={onClose}
                  className="text-2xl text-text hover:opacity-60 transition font-bold"
                >
                  ✕
                </button>
              </div>

              {/* Modal content */}
              <div className="flex flex-col gap-6 p-8">
                {/* Media carousel */}
                <div className="flex flex-col gap-4">
                  <div className="relative w-full h-[500px] rounded-2xl overflow-hidden bg-gray-800">
                    {currentMedia.type === 'image' ? (
                      <motion.img
                        key={currentMediaIndex}
                        src={currentMedia.url}
                        alt={`${project.name} - slide ${currentMediaIndex + 1}`}
                        className="w-full h-full object-contain"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <iframe
                          src={currentMedia.url}
                          className="w-full h-full"
                          frameBorder="0"
                          allow="autoplay; encrypted-media"
                          allowFullScreen
                          title={`${project.name} video`}
                        />
                      </div>
                    )}
                    
                    {/* Media counter badge */}
                    {media.length > 1 && (
                      <div className="absolute top-4 right-4 bg-black bg-opacity-60 px-3 py-1 rounded-lg text-white text-sm font-medium">
                        {currentMediaIndex + 1} / {media.length}
                        {currentMedia.type === 'video' && (
                          <span className="ml-2 text-xs">🎥</span>
                        )}
                      </div>
                    )}
                  </div>

                  {/* Thumbnail carousel */}
                  {media.length > 1 && (
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {media.map((item, index) => (
                        <motion.button
                          key={index}
                          onClick={() => {
                            setCurrentMediaIndex(index);
                            setIsVideoPlaying(false);
                          }}
                          className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition ${
                            index === currentMediaIndex
                              ? "border-accent"
                              : "border-surface-border opacity-60 hover:opacity-100"
                          }`}
                          whileHover={{ scale: 1.05 }}
                        >
                          {item.type === 'image' ? (
                            <img
                              src={item.url}
                              alt={`Thumbnail ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          ) : (
                            <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                              </svg>
                            </div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  )}

                  {/* Navigation buttons */}
                  {media.length > 1 && (
                    <div className="flex gap-3 justify-center">
                      <motion.button
                        onClick={handlePrevMedia}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 rounded-lg bg-accent hover:opacity-80 transition font-medium text-white"
                      >
                        ← Previous
                      </motion.button>
                      <motion.button
                        onClick={handleNextMedia}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-2 rounded-lg bg-accent hover:opacity-80 transition font-medium text-white"
                      >
                        Next →
                      </motion.button>
                    </div>
                  )}
                </div>

                {/* Description side pane */}
                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-3xl font-bold text-text mb-4">
                      {project.name}
                    </h2>

                    <p className="text-secondary text-base leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {project.longDescription && (
                      <div className="mb-6 p-4 rounded-lg bg-black bg-opacity-20">
                        <h3 className="text-lg font-semibold text-text mb-2">
                          Project Details
                        </h3>
                        <p className="text-secondary text-sm leading-relaxed">
                          {project.longDescription}
                        </p>
                      </div>
                    )}

                    {/* Tags */}
                    <div className="mb-6">
                      <h3 className="text-sm font-semibold text-text mb-3">
                        Technologies
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                          <span
                            key={`${project.name}-${tag.name}`}
                            className={`px-3 py-1 rounded-full text-xs font-medium ${tag.color}`}
                          >
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Action buttons */}
                  {project.live_demo_link && (
                    <a
                      href={project.live_demo_link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 rounded-lg bg-accent text-white font-medium text-center hover:opacity-80 transition"
                    >
                      View Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;