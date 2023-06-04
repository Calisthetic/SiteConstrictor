import { useEffect, useState, useRef } from "react";
import s from "./Projects.module.css";

const Projects = () => {
  const [addOpen, setAddOpen] = useState(false);

  const addProjectButtonRef = useRef();
  const addProjectOpenButtonRef = useRef();
  const addProjectOpenButtonTextRef = useRef();
  const addProjectFieldRef = useRef();
  const addProjectNameRef = useRef();

  const [isUpdate, setIsUpdate] = useState(false)
  const [ProjectsData, setProjectsData] = useState([{}])
  useEffect(() => {
    fetch("/api/project/" + localStorage.getItem("userID"), {method: 'GET'}).then(
      response => response.json()
    ).then(
      data => {
        setProjectsData(data)
      }
    )
  }, [isUpdate]);

  function selectProject(event) {
    localStorage.setItem("projectID", event.target.dataset.id)
    window.location.href = "/main";
  }

  function addProjectButtonClick() {
    if (!addOpen) {
      addProjectFieldRef.current.style.width = "214px";
      addProjectFieldRef.current.style.marginLeft = "30px";
      addProjectOpenButtonTextRef.current.textContent = "−";
      addProjectOpenButtonRef.current.style.transform = "rotate(180deg)";
      addProjectOpenButtonRef.current.style.color = "#ff0000";
      setAddOpen(!addOpen);
    } else {
      addProjectFieldRef.current.style.width = "0px";
      addProjectFieldRef.current.style.marginLeft = "0px";
      addProjectOpenButtonTextRef.current.textContent = "+";
      addProjectOpenButtonRef.current.style.transform = "rotate(0deg)";
      addProjectOpenButtonRef.current.style.color = "#00ff00";
      setAddOpen(!addOpen);
    }
  }
  async function addProject() {
    if (addProjectNameRef.current.value.length > 2) {
      let block = {
        user_id: localStorage.getItem("userID"),
        name: addProjectNameRef.current.value,
      }
      let response = await fetch('/api/project', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(block)
      });
      if (response.status === 200) {
        setIsUpdate(!isUpdate)
        addProjectNameRef.current.value = "";
        addProjectButtonClick();
      } else {
        alert("Не удалось создать новый проект...")
      }
    } else {
      addProjectButtonRef.current.style.color = "#ff0000";
      setTimeout(() => {
        addProjectButtonRef.current.style.color = "lime";
      }, 500);
    }
  }

  return (
    <div className={s.background_projects}>
    <div className={s.projects_field}>
      <div className={s.cages_back}>
        <div title="Click to edit your project" className={s.cage_title}>
          ВАШИ ПРОЕКТЫ
        </div>
        <div className={s.cages}>
          {(typeof ProjectsData[0] == "undefined") ? (
            <p>Loading...</p>
            ) : (
              ProjectsData.map((item, index) => (
                <div className={s.cage_back} key={index}>
                  <div id={item.id} data-id={item.id} className={s.cage} onClick={selectProject}>
                    <div data-id={item.id} className={s.cage_name}>{item.name}</div>
                    <div 
                      data-id={item.id}
                      className={s.cage_blocks_count} 
                      title="Количество элементов на странице">{item.blocks_count}
                    </div>
                  </div>
                </div>
              ))
          )}
        </div>
      </div>
      <div ref={addProjectFieldRef} className={s.add_project}>
        <div className={s.add_title}>НОВЫЙ ПРОЕКТ</div>
        <input
          maxLength="32"
          placeholder="название проекта"
          type="text"
          ref={addProjectNameRef}
          className={s.add_input_name}
        ></input>
        <div
          className={s.add_button}
          ref={addProjectButtonRef}
          onClick={addProject}
        >
          Создать
        </div>
      </div>
    </div>
    <div
      className={s.add_open_button}
      ref={addProjectOpenButtonRef}
      onClick={addProjectButtonClick}
    >
      <div ref={addProjectOpenButtonTextRef} style={{marginTop: "-17px"}}>+</div>
    </div>
  </div>
  )   
}
export default Projects