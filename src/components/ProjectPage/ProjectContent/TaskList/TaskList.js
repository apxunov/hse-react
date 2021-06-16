import React from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import {Task} from './Task/Task'

const mapStateToProps = (state) => {
    return({
        tasks: state.applicationData.tasksByIds,
        projects: state.applicationData.projectsByIds
    })
}

const TaskListComponent = ( {projectId, projects, tasks} ) => {
    const searchForTask = (tasksIds, tasksList) => {
        const specificTasksList = {}
        Object.values(tasksIds)?.map( taskId => {
            return Object.values(tasksList).map( (task) => {
                return task.id.toString() === taskId.toString() 
                ? specificTasksList[taskId] = task
                : null
            })
        })
        return specificTasksList
    }

    if (projects[projectId]) {
        const projectTasksIds = projects[projectId]?.tasksIds
        const projectTasks = searchForTask(projectTasksIds, tasks)
        return (
            Object.values(projectTasks).map( task => {
                return (
                    <Task
                        key={task.id}
                        id={task.id}
                    />
                )
            })
        )
    }
    else {
        return (<Redirect to='/404'/>)
    }
}

export const TaskList = connect(mapStateToProps)(TaskListComponent)