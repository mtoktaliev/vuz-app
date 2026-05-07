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

  return (
    <>
      {actionSlot && actionSlot(setOpen)}

      <Modal
        open={open}
        onCancel={() => setOpen(false)}
        footer={null}
        width={860}
        centered
        destroyOnHidden
        styles={{
          body: { padding: 0 },
          wrapper: { padding: 0, overflow: "hidden", borderRadius: 16 },
        }}
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
