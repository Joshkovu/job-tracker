import React from 'react'

const Tasks = () => {
  return (
    <>
    <nav className="tasks-container">
        <div className="tasks">
            <img src="" alt="" />
            <h5>Tasks</h5>
        </div>
        <div className="search-task">
            <input type="text" placeholder='Search tasks, jobs,reminders'/>
            <img src="" alt="" />
            <img src="" alt="" />
            <img src="" alt="" />
        </div>
    </nav>
    <main className="tasks-overview">
        <h1 className="title">Tasks overview</h1>
        <div className="tasks-done">
            <div className="total-tasks">
                <h4 className="tasks-head">Total tasks</h4> <br />
                 <span className='total'></span>
                 <p>All tasks across job applications</p>
            </div>
             <div className="total-tasks">
                <h4 className="tasks-head">Due this week</h4> <br />
                 <span className='due'></span>
                 <p>Pending tasks with upcoming deadlines</p>
            </div>
             <div className="total-tasks">
                <h4 className="tasks-head">Completed tasks</h4> <br />
                 <span className='completed'></span>
                 <p>Tasks successfully finished</p>
            </div>
        </div>
        <div className="new-task">
            <div className="add-task">
              <input type="text" placeholder='Task title'/>
              <input type="date" placeholder='Pick a due date' />
              <select name="Medium Priority" id="">
                <option value="">Yes</option>
                <option value="">No</option>
              </select>
              <input type="text" placeholder='tags'/>
              <button className="add-task">Add task</button>
            </div>
             <div className="upcoming-reminders">
                <h2>Upcoming reminders</h2>
                <ul className="list">
                    <li>Interview with</li>
                    <li>Portfolio</li>
                    <li>Networking</li>
                </ul>
                
            </div>
        </div>
        <div className="filter-tasks">
            <div className='filtering'>
                <h1 className="heading">Filter Tasks</h1>
                <p className="paragraph">Related Job</p>
                <select name="All Jobs" id="">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <p className="tags">Tags</p>
                <select name="All tags" id="">
                    <option value=""></option>
                    <option value=""></option>
                    <option value=""></option>
                </select>
                <p>Due date range</p>
                <input type="date" />
            </div>
            <div>
               <div className="toDo">
                <p><img src="" alt="" />To Do</p>
                <span className='number'></span>
                </div> 
                <ul className="list-toDo">
                    <li></li>
                </ul>
            </div>
            <div>
                  <div className="in-progress">
                <p><img src="" alt="" />In progress</p>
                <span className='number'></span>
                </div> 
                <ul className="list-progress">
                    <li></li>
                </ul>
            </div>
            <div>
                  <div className="Completed">
                <p><img src="" alt="" />Completed</p>
                <span className='number'></span>
                </div> 
                <ul className="list-completed">
                    <li></li>
                </ul>
            </div>
        </div>
    </main>
    <footer>
        <p>@2025 <span>Job tracker</span> All rights reserved</p>
    </footer>
    </>
  )
}

export default Tasks