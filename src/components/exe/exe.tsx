import "./exe.css";
import Application from "../application/application";
import { useState } from "react";

interface ExeProps {
  id: string;
  key: string;
  name: string;
  image: string;
  link?: string;
  isOpen?: boolean;
  Content?: React.ComponentType;
}

const Exe = ({ id, key, name, image, link, isOpen, Content }: ExeProps) => {
  const [active, setActive] = useState(isOpen ? isOpen : false);

  const handleClick = () => {
    if (!link) {
      setActive(!active);
    }
  };

  return (
    <div id={id}>
      <div className="exe" onClick={handleClick}>
        {link ? (
          <a href={link}>
            <img className="icons" alt="app icon" src={image} />
            <p>{name}</p>
          </a>
        ) : (
          <>
            <img className="icons" alt="app icon" src={image} />
            <p>{name}</p>
          </>
        )}
      </div>
      {!link && (
        <Application status={active} setActive={setActive} id={id} title={name}>
          {Content && <Content />}
        </Application>
      )}
    </div>
  );
};

export default Exe;
