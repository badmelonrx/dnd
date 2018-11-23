<template>
	<div  id="char-view">
	
	<button  @click="getCharInfo($route.params.id)">Get Info for {{$route.params.id}} </button>
	<p>{{charInfo}}</p>


	</div>

</template>
<script>
	import axios from 'axios'
	export default{
		name:'CharacterView',
		data: function(){
			return {
				charId:"",
				charInfo: {},
				loaded:false,
			}
		},
		props:['character'],
		methods:{
			getCharInfo(id){
				this.loading = true;
				axios.get('http://crit-fail.herokuapp.com/characters/'+id).then((response)=> {
	        	this.loading = false;
	        	this.charInfo = response.data;
	        	this.loaded = true;
	      }, (error) => {
	        this.loading = false;
	        console.log(error);
	      })
			}
		}
	}
</script>