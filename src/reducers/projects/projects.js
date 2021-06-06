import { PROJECT_ADD } from '../../actions/projects/projects'
import projectsAndTasks from '../../components/ProjectsData/projectsData';
import normalizeProjectsAndTasks from '../../components/ProjectsData/stateNormalizer';

const { projectsById } = normalizeProjectsAndTasks(projectsAndTasks)

const initialState = {
  projects: projectsById,
}

export const projectsReducer = (state = initialState, action) => {
        switch (action.type) {
          case PROJECT_ADD: {
            const newProjId = action.id
            const newProjectsList = {...state.projects}
            newProjectsList[newProjId] = {
                id: action.id,
                name: action.name,
                description: action.description,
                tasksIds: []
            }
            console.log('projectsReducer - покажи стейт', state);
            return {
              ...state,
              projects: newProjectsList
            }
          }
          default:
            return state;
        }
      };
    

// export const projectsReducer = (state = initialState, action) => {
//     switch (action.type) {
//       case PROJECT_NAME_CHANGE: {
//         return { ...state,  
//             projectToAdd: { ...state.projectToAdd, name: action.name }
//         } 
//       }
//       case PROJECT_DESCRIPTION_CHANGE: {
//         return { ...state, 
//             projectToAdd: { ...state.projectToAdd, description: action.description }
//         } 
//       }
//       default:
//         return state;
//     }
//   };
