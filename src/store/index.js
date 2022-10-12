import Vue from 'vue'
import Vuex from 'vuex'
import {getFilterArray} from'/src/util/utils.js'
 
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	productList:[],
  	cartList:[]
  	
  },
  getters:{
		brands:state =>{
			const brand = state.productList.map(item => item.brand)
			//console.log(brand)
			return getFilterArray(brand)
		},
		colors:state =>{
			const color = state.productList.map(a => a.color)
			//console.log(color)
			return getFilterArray(color)
		}
  },
  
  mutations: {
  	setProductList(state,data){
  		state.productList = data
  	},
	addCart(state,productId){
		const isAdded = state.cartList.find(item => item.id == productId)
		if(isAdded){
			isAdded.count++
		}else{
			state.cartList.push({id:productId,count:1}) 
		}
	},
	editCartCount(state,payLoad){ //payLoad表示购物车中某条记录
		const product = state.cartList.find(item=>item.id === payLoad.id)
		product.count += payLoad.count
	},
	deletCart(state,payLoad){
		const index = state.cartList.findIndex(item=>item.id === payLoad.id)
		state.cartList.splice(index,1)
	}
  },
  
  actions: {
  	getProductList(context){
  		axios.get('/productData.json')
  		.then(function (response){
  			console.log(response.data);
  			context.commit('setProductList',response.data)
  		})
  		.catch(function (error){
  			console.log(error);
  		})
  	}
  },
  
  modules: {
  }
})
