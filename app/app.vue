<template>
  <div style="
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	font-family: Helvetica, Arial, sans-serif;
	line-height: 0;
  ">
	<p>Hello, I'm Christian Gingco.</p>
	<p>This website is still under construction, check back soon!</p>
	<p>In the meantime, you can find me on <a href="https://www.linkedin.com/in/christian-gingco/" target="_blank" rel="noopener noreferrer">LinkedIn</a> or <a href="https://github.com/cgingco" target="_blank" rel="noopener noreferrer">GitHub</a>.</p>
  </div>
</template>

<script setup lang="ts">

useHeadSafe({
  title: 'Christian Gingco',
  meta: [
    { name: 'description', content: 'Personal website of Christian Gingco' }
  ]
})

</script>