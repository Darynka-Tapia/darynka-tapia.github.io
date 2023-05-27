import { ref, onMounted, onUnmounted } from 'vue'
import { projectsList } from '@/utils/projectsData.js'


export function useProjects() {
  const projects = ref();
  getProjects()
  function getProjects(filter){
    console.log(filter)
    if(filter === undefined){
      projects.value = projectsList;
      return
    } 
    projects.value = projectsList.filter((project) => project.skills.includes(filter))

  }
  // expose managed state as return value
  return {
    projects,
    getProjects
  }
}