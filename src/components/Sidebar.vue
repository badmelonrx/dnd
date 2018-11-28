<template>
	<nav id="sidebar">
		<div class="sidebar-header">
			Characters
		</div>

		<ul class="nav flex-column list">
			<li>
				<router-link
				tag="a"
				class="nav-link"
				v-for="char in getCharacters"
				:key="char.characterId"
				:to="'/characters/' +char.characterId">
				{{char.name}}
				</router-link>
			</li>
        </ul>
	</nav>
</template>

<script>
	import store from '../store';

	export default{
		name:'sidebar',
		computed:{
			getCharacters(){
				return store.state.characters;
			}
		},
		created: function () {
			store.commit('getCharacterList');
		}
	}

</script>
<style>
.nav-link{
	color:black;
	border-top-left-radius: 10px;
	border-bottom-left-radius: 10px;
	padding:5px !important;
}
.nav-link:hover{
	color:black;
	background-color:#d9f7f7 !important;
}

#sidebar{
	border-right: solid  rgb(211,211,211, 0.5) 1px;
	background-color: rgb(211,211,211, 0.2);
	height: 100vh;
	
}
.sidebar-header{
	background-color: rgb(211,211,211, 0.5);
	font-size: 1.5em;
}

.list{
	padding: 5px 0px 0px 10px;
	
}
</style>