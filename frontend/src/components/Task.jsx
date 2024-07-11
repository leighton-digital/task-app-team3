export const TaskForm = ({title},{description},{}) => {
    return (
        <>
                <div class="task">
            <h1 class="tasktitle"> {title} </h1>
            <span class="taskdescription">
                {description}
            </span>
            <span class="taskdates"> 
                created: 01.07.07 // due: 12.7.24
            </span>
            <button class="completebutton">
                Complete
            </button>
        </div>
        </>
    );
  };