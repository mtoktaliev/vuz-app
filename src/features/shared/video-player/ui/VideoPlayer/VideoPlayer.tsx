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
    setTimeout(() => setOpen(false), 100);
  };

  return (
    <>
      {open && (
        <div
          className={`fixed inset-0 z-50 transition-all duration-500 ${
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
        <div style={{ position: "relative", paddingTop: "56.25%" }}>
          <iframe
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              border: "none",
            }}
            src={`https://www.youtube.com/embed/${video_id}?autoplay=1`}
            title={video_title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </Modal>
    </>
  );
};
