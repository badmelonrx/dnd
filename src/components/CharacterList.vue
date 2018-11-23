<template>
<div class="char-list">
	<h3>{{title}}</h3>
	<div v-if="loading" class="loader">
		<img src="@/assets/loading.gif"/>
		
	</div>
	<div v-if="!loading">
 <ul>
  <li v-for="char in characters"  @click="goToCharacterView(char.characterId, char.name)" class="selectable-item">
  	 {{char.name}}</li>
  </ul>
 
	</div>
	<button v-if="!loading" @click="getCharacterList"> Get List</button>
  <hello-world/>
</div>
</template>


<script>
import axios from 'axios'
import HelloWorld from './HelloWorld'

export default {
  name: 'CharacterList',
  components: {HelloWorld},
  data () {
    return {
      title: 'Character List',
      characters: '',
      loading:false
    }
  },
  methods: {
  	getCharacterList: function () {
  		this.loading = true;
  		axios.get('http://crit-fail.herokuapp.com/characters/').then((response)=> {
  			this.loading = false;
  			this.characters = response.data;
  		}, (error) => {
  			this.loading = false;
        console.log(error);
  		})
  	},
    goToCharacterView: function (charId, charName) {
        this.$router.push({name:'character', params: {id:charId, name:charName}});
    }
  }
}

</script>
<style>
	.loader{
		text-align: center;
    background-image: src('@assets/loading.gif');
	}
</style>