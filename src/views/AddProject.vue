<template>
  <div class="flex flex-col space-y-6 w-[90%] md:w-1/2 mx-auto p-3 md:p-6 border rounded-lg">
    <h1 class="text-2xl md:text-3xl font-black mb-3 md:mb-6 select-none">Add Project</h1>
    <form @submit.prevent="sendData" method="post" class="space-y-3">
      <div class="flex flex-col space-y-1">
        <label class="font-medium">Title:</label>
        <input v-model="title" type="text" name="title" class="p-3 bg-white text-black border outline-0 rounded transition-all dark:border-slate-500 dark:border-slate-700 dark:text-slate-300 dark:bg-slate-800" placeholder="Enter title" required>
      </div>
      <div class="flex flex-col space-y-1">
        <label class="font-medium">Details</label>
        <textarea v-model="details" name="details" class="p-3 bg-white text-black border outline-0 rounded transition-all dark:border-slate-500 dark:border-slate-700 dark:text-slate-300 dark:bg-slate-800"  cols="30" rows="5" placeholder="Enter details" required></textarea>
      </div>
      <div class="flex justify-start">
        <input type="submit" class="w-max px-10 py-2 bg-black text-white rounded cursor-pointer transition-all dark:bg-slate-300 dark:text-black" value="Add">
      </div>
    </form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        details: '',
        uri: 'http://localhost:3000/projects'
      }
    },
    methods: {
      sendData() {
        let project = {
          title: this.title,
          details: this.details,
          complete: false
        };
        fetch(this.uri, { method: 'POST', headers: {'Content-Type': 'application/json'}, body: JSON.stringify(project) })
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err.message))
      }
    }
  }
</script>
