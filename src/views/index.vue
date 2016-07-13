<template>
<div id="home">
	hello world~
	<a v-link="{ path: '/inner' }">内页</a>
</div>
</template>

<style>

#home{
	a{
		color: red;
		display: flex;
	}
}
</style>
