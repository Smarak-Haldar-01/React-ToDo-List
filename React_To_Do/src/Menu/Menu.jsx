import styles from './Menu.module.css'

export function Menu({addToDo}){
  let name="Smarak Haldar";
  return <>
    <div className="offcanvas offcanvas-start show bg-dark" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
      <div className="offcanvas-header">
        <h5 className="offcanvas-title text-primary" id="offcanvasLabel">To Do Lists Are Fun</h5>
      </div>
      <div className="offcanvas-body text-danger">
        {/* Hello {name}! There is no Functionality added here till now! :( Try afterwards... */}
        <ul className="list-group">
          <a onClick={addToDo} className={styles.a+' list-group-item'}>
            Add To Do
          </a>
          <a className={styles.a+' list-group-item'}>
            Delete All To Do
          </a>
        </ul>
      </div>
    </div>
  </>
}