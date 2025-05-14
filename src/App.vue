<template>
	<Navbar />
	<router-view />
</template>

<script>
	import { defineAsyncComponent, onMounted } from "vue";
	import "particles.js";

	const Navbar = defineAsyncComponent(() => import("@/components/Navbar.vue"));
	export default {
		components: { Navbar },
		setup() {
			onMounted(() => {
				particlesJS("particles", {
					particles: {
						number: {
							value: 90,
							density: {
								enable: true,
								value_area: 800,
							},
						},
						color: {
							value: "#78ecb3",
						},
						shape: {
							type: "polygon",
							stroke: {
								width: 0,
								color: "#000000",
							},
							polygon: {
								nb_sides: 4,
							},
						},
						opacity: {
							value: 0.25,
							random: true,
							anim: {
								enable: true,
								speed: 1,
								opacity_min: 0.15,
								sync: false,
							},
						},
						size: {
							value: 10,
							random: true,
							anim: {
								enable: false,
								speed: 40,
								size_min: 1,
								sync: false,
							},
						},
						line_linked: {
							enable: true,
							distance: 100,
							color: "#ffffff",
							opacity: 0.2,
							width: 2,
						},
						move: {
							enable: true,
							speed: 6,
							direction: "none",
							random: false,
							straight: false,
							out_mode: "out",
							bounce: false,
							attract: {
								enable: false,
								rotateX: 600,
								rotateY: 1200,
							},
						},
					},
					interactivity: {
						detect_on: "window",
						events: {
							onhover: {
								enable: true,
								mode: "repulse",
							},
							onclick: {
								enable: true,
								mode: "push",
							},
							resize: true,
						},
						modes: {
							grab: {
								distance: 400,
								line_linked: {
									opacity: 1,
								},
							},
							bubble: {
								distance: 400,
								size: 40,
								duration: 2,
								opacity: 8,
								speed: 3,
							},
							repulse: {
								distance: 200,
								duration: 0.4,
							},
							push: {
								particles_nb: 4,
							},
							remove: {
								particles_nb: 2,
							},
						},
					},
					retina_detect: true,
				});
			});
		},
	};
</script>

<style>
	#particles {
		position: absolute;
		top: 0;
		left: 0;
		z-index: -100;
		height: 100%;
		width: 100%;
	}

	.app {
		height: 100%;
		width: 100%;
		position: relative;
	}

	:root {
		--primary: #212121;
		--primary-light: #484848;
		--primary-dark: #000000;

		--secundary: #42b983;
		--secundary-light: #78ecb3;
		--secundary-dark: #008856;

		--text-primary: #ffffff;
		--text-secundary: #000000;
	}

	@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

	*,
	*::before,
	*::after {
		font-family: "Quicksand", sans-serif;
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		user-select: none;
	}

	body {
		color: var(--text-primary);
		overflow-y: hidden;
		background: var(--primary-dark) bottom/contain no-repeat
			url("assets/brain.png");
	}

	@media screen and (max-width: var(--breakpoint-small)) {
		body {
			background: var(--primary-dark) bottom/150% no-repeat
				url("assets/brain.png");
		}
	}

	.container {
		height: 100vh;
		width: 100%;
		margin: 0 auto;
	}

	::selection {
		background-color: palevioletred;
		color: var(--text-primary);
	}
</style>
