import { useEffect, useState } from "react";
import s from "./Pages.module.css"

const Projects = () => {
  const [ProjectsData, setProjectsData] = useState([{}])
  useEffect(() => {
    fetch("/api/project/" + localStorage.getItem("userID"), {method: 'GET'}).then(
      response => response.json()
    ).then(
      data => {
        setProjectsData(data)
      }
    )
  }, []);

  return (
    <div className={s.background}>
      <div className={s.cages}>
        {(typeof ProjectsData[0] == "undefined") ? (
          <p>Loading...</p>
          ) : (
            ProjectsData.map((item, index) => (
              <div key={index} id={item.id} data-id={item.id} className={s.cage}>{item.name}</div>
            ))
        )}
      </div>
    </div>
  )   
}
export default Projects