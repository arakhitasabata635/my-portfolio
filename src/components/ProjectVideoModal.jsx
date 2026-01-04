const ProjectVideoModal = ({ videoLink, onClose }) => {
  if (!videoLink) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center">
      <div className="bg-black rounded-lg w-[90%] md:w-[70%] h-[60vh] relative">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-xl"
        >
          ✕
        </button>

        <iframe
          src={videoLink}
          title="Project Demo"
          className="w-full h-full rounded-lg"
          allowFullScreen
        />
      </div>
    </div>
  );
};

export default ProjectVideoModal;
