import "./application.css";
import Draggable from "react-draggable";
import { useEffect, ReactNode } from "react";

interface ApplicationProps {
  status: boolean;
  setActive: (status: boolean) => void;
  id?: string;
  title: string;
  children: ReactNode;
  style?: React.CSSProperties;
}

const Application = ({
  status,
  setActive,
  id,
  title,
  children,
  style,
}: ApplicationProps) => {
  useEffect(() => {
    setActive(status);
  }, [status, setActive]);

  return (
    <>
      {status && (
        <Draggable handle=".banner">
          <div
            className="application"
            id={id}
            style={{
              ...style,
              userSelect: "text",
              WebkitUserSelect: "text",
              touchAction: "auto",
            }}
          >
            <div className="window">
              <button
                className="CloseButton"
                onClick={() => setActive(false)}
                style={{ userSelect: "none", WebkitUserSelect: "none" }}
              >
                <b>X</b>
              </button>
              <div className={`banner banner-${title.toLowerCase()}`}>
                <div>
                  <p className="title">{title}.exe</p>
                </div>
              </div>
              <div className="app">
                <div className="content">{children}</div>
              </div>
            </div>
          </div>
        </Draggable>
      )}
    </>
  );
};

export default Application;
