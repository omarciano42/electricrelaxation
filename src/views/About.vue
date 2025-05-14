<template>
	<div class="container">
		<div class="about">
			<div class="title">
				<h1>About me</h1>
			</div>
			<div class="banner">
				<img
					src="../assets/about-banner.jpg"
					alt="banner"
					title="that's my room!"
				/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		name: "About",
	};
</script>

<style scoped>
	.about {
		display: flex;
		flex-direction: column;
		color: var(--text-primary);
		width: 50%;
		height: 75%;
		margin: 0 auto;
	}

	.title {
		background: var(--secundary);
		width: 100%;
		padding: 6px 6px;
	}

	@media screen and (max-width: 425px) {
		.about {
			width: 85%;
		}
		.title {
			font-size: 0.75em;
		}
	}

	.banner {
		margin: 12px 0px;
		display: flex;
		justify-content: center;
	}

	.banner img {
		width: 100%;
		text-align: center;
		border: 2px solid var(--secundary-light);
	}

	@media screen and (max-width: 1024px) {
		.about {
			flex-direction: column;
		}

		.title {
			padding: 28px 28px;
		}

		.title h1 {
			transform: rotate(0deg);
		}
	}
</style>
