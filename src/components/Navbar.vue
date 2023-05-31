<template>
	<div class="flex items-center justify-center">
		<div class="flex items-center justify-center w-full gap-4">
			<RouterLink :to="{name: 'Home'}" class="border-b border-transparent hover:border-b hover:border-black transition-all hover:dark:border-slate-300">Projects</RouterLink>
			<RouterLink :to="{name: 'AddProject'}" class="border-b border-transparent hover:border-b hover:border-black transition-all hover:dark:border-slate-300">Add Project</RouterLink>
		</div>
		<div class="flex items-center justify-center ml-auto">
			<div>
				<div v-if="mode === 'light'" @click="changeMode('dark')" class=" p-1.5 rounded-full cursor-pointer hover:bg-gray-200">
					<Dark />
				</div>
				<div v-else @click="changeMode('light')" class="p-1.5 rounded-full cursor-pointer hover:bg-slate-800">
					<Light />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { RouterLink } from 'vue-router';
	import Dark from "@/components/icons/Dark.vue";
	import Light from "@/components/icons/Light.vue";
	
	console.log(localStorage.theme)
	
	if (localStorage.theme === 'dark') {
		document.documentElement.classList.add('dark')
	} else {
		document.documentElement.classList.remove('dark')
	}
	
	export default {
		name: "Navbar",
		components: {Dark, Light},
		data() {
			return {
				mode: localStorage.theme
			}
		},
		methods: {
			changeMode(fxx) {
				if(fxx == 'dark') {
					this.mode = 'dark';
					document.documentElement.classList.add('dark');
					localStorage.theme = 'dark'
				} else {
					this.mode = 'light';
					document.documentElement.classList.remove('dark');
					localStorage.theme = 'light'
				}
			}
		}
	}
</script>





<style>

</style>