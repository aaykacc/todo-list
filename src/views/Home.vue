<template>
  <div class="flex flex-col w-[90%] md:w-1/2 mx-auto p-3 md:p-6 border rounded-lg">
    <h1 class="text-2xl md:text-3xl font-black mb-3 md:mb-6 select-none">Projects</h1>
    <FilterNav @filterChange="current = $event" :current="current" />
    <div>{{ message }}</div>
    <div v-if="projects.length" class="mt-4 md:mt-5 py-1 md:py-0">
      <div v-for="project in filteredProjects" class="mb-5 last-of-type:mb-0">
        <SingleProject :project="project" @delete="handleDelete" @complete="handleComplete"/>
      </div>
    </div>
  </div>
</template>

<script>
  import SingleProject from "@/components/SingleProject.vue";
  import FilterNav from "@/components/FilterNav.vue";
  export default {
    components: {SingleProject, FilterNav},
    data() {
      return {
        projects: [],
        current: 'all',
        message: null
      }
    },
    mounted() {
      fetch('http://localhost:3000/projects')
          .then(res => res.json())
          .then(data => this.projects = data)
          .catch(err => console.log(err.message));

    },
    methods: {
      handleDelete(id) {
        this.projects = this.projects.filter((project) => project.id != id);
      },
      handleComplete(id) {
        let p = this.projects.find(project => project.id == id)
        p.complete = !p.complete;
      }
    },
    computed: {
      filteredProjects() {

        if(this.current == 'completed') {
          return this.projects.filter(project => project.complete);
          this.message = this.projects.filter(project => project.complete).length;
        } else if(this.current == 'ongoing') {
          return this.projects.filter(project => !project.complete);
        }
        return this.projects;
      }

    }
  }
</script>