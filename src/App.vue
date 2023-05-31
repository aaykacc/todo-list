<script>
	import { RouterView } from 'vue-router';
	import Navbar from "@/components/Navbar.vue";
	import Footer from "@/components/Footer.vue";
	
	export default {
		components: {Navbar, Footer}
	}
</script>

<template>
  <header>
    <div>
      <nav class="w-2/3 md:w-1/2 mx-auto h-10 mt-2 mb-4 md:mb-8">
        <Navbar />
      </nav>
    </div>
  </header>

  <RouterView />

  <footer class="fixed bottom-3 left-1/2 -translate-x-1/2 w-full">
    <Footer />
  </footer>
</template>



