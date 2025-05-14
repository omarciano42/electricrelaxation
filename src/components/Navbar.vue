<template>
	<nav class="navbar">
		<div class="navbar--right">
			<router-link to="/">home</router-link>
			<router-link to="/about">about</router-link>
		</div>
		<div class="navbar--left">
			<a
				href="https://www.youtube.com/channel/UCpjYIkeClWb0dnFuyD7eH7Q"
				target="_blank"
			>
				youtube
			</a>
		</div>
	</nav>
</template>

<style scoped>
	.navbar {
		padding: 18px 12px;
		display: flex;
		flex-direction: row;
		justify-content: space-between;
	}

	.navbar a {
		font-weight: 700;
		font-size: 1.12em;
		color: var(--secundary-dark);
		text-decoration: none;

		transition: ease-in 0.65s;

		margin-right: 12px;
	}
	.navbar a.exact-active {
		color: var(--secundary);
		border-bottom: 1px solid var(--secundary);
	}

	.navbar a:hover {
		color: var(--secundary-light);
		transition: ease 0.1s;
	}
</style>
