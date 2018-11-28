<template>
	<div>Character {{$route.params.id}}
		<p>
			{{getCharacter}}
		</p>
	</div>
</template>
<script>
	import store from '../store';
	export default{
		name:'character-view',
		computed:{
			getCharacter(){
				return store.state.charInfo;
			}
		},
		created:
			function(){
				store.commit('getNewChar', this.$route.params.id);
			}
		
	}

</script>