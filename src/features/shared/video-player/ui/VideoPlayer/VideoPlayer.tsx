import { useState } from "react";
import { Modal } from "antd";

export interface IVideoPlayerProps {
  video_id: string;
  video_title: string;
  actionSlot?: (setOpen: (open: boolean) => void) => React.ReactNode;
}

export const VideoPlayer: React.FC<IVideoPlayerProps> = ({
  video_id,
  video_title,
  actionSlot,
}) => {
  const [open, setOpen] = useState(false);
  const [blurred, setBlurred] = useState(false);

  const handleOpen = () => {
    setOpen(true);
    // Небольшая задержка, чтобы transition успел сработать после mount
    requestAnimationFrame(() => {
      requestAnimationFrame(() => setBlurred(true));
    });
  };

  const handleClose = () => {
    setBlurred(false);
    setTimeout(() => setOpen(false), 300);
  };

  return (
    <>
      {open && (
        <div
          className={`fixed inset-0 z-50 transition-all duration-1000 ${
            blurred ? "backdrop-blur-md" : "backdrop-blur-none"
          }`}
        />
      )}

      {actionSlot && actionSlot(handleOpen)}

      <Modal
        open={open}
        onCancel={handleClose}
        footer={null}
        width={860}
        centered
        destroyOnHidden
      >
        <iframe
          className="aspect-video rounded"
          src={`https://www.youtube.com/embed/${video_id}?autoplay=1`}
          title={video_title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </Modal>
    </>
  );
};
