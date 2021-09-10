import React, { useEffect, useRef } from "react";
import "./SchoolModal.css";

const SchoolModal = ({
  items,
  setOpenSchool,
  openSchoolOnClick,
  SCHOOL_DATA,
  ...otherSectionProps
}) => {
  let SchoolMenuRef = useRef();

  useEffect(() => {
    let clickHandler = (event) => {
      if (
        SchoolMenuRef.current &&
        !SchoolMenuRef.current.contains(event.target)
      ) {
        setOpenSchool(false);
      }
    };

    document.addEventListener("mousedown", clickHandler);

    return () => {
      document.removeEventListener("mousedown", clickHandler);
    };
  });

  const schoolItems = SCHOOL_DATA.map((data, i) => {
    return data.subItems[i];
  });

  console.log(schoolItems);

  return (
    <div className="SchoolModal">
      <div ref={SchoolMenuRef}>
        {schoolItems.map((data) => {
          return (
            <p>
              <a href={data.url}>{data.name}</a>
            </p>
          );
        })}
      </div>
    </div>
  );
};
export default SchoolModal;
