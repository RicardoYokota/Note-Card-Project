import React from "react";

interface Link {
  url: string;
  text: string;
}

interface LinkListProps {
  links: Link[];
}

const LinkList: React.FC<LinkListProps> = ({ links }) => {
  return (
    <div>
      {links.map((link, index) => (
        <a key={index} href={link.url}>
          {link.text}
        </a>
      ))}
    </div>
  );
};

export default LinkList;
