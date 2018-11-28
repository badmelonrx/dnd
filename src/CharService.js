import Api from '@/services/Api'

export default {
    getCharacterList () {
        return Api().get('/characters/');
    },
    getCharacterInfo (params) {
    	return Api().get('/characters/' + params);
    }
}