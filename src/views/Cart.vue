<template>
	<div v-if='cartList.length'>
			<table class="table">
			  <thead>
				<tr>
				  <th scope="col"></th>
				  <th scope="col">物品信息</th>
				  <th scope="col">数量</th>
				  <th scope="col">单价</th>
				  <th scope="col">管理</th>
				</tr>
			  </thead>
			  <tbody v-for="(item,index) in cartList" :key='index'>
				<tr>
				  <th scope="row" style="vertical-align: middle">{{index+1}}</th>
				  <td class="product-img">
					  <img class="rounded-circle" :src="product[item.id-1].image"/><span>{{product[item.id-1].name}}</span>
				  </td>
				  <td>
					<button  type="button" class="btn btn-light" @click="handleCount(index,1)">+</button>
					<!-- {{item.id}} -->   {{item.count}}
					<button  type="button" class="btn btn-light" @click="handleCount(index,-1)">-</button>
				</td>
				  <td>{{product[item.id-1].cost}}</td>
				  <td><button type="button" class="btn btn-outline-danger" @click="handleDel(index)">删除</button></td>
				</tr>

			  </tbody>


			</table>
			<div class="row foot">
				<div class="col-4"></div>
				<div class="col-2">共计商品：{{countAll}}件</div>
				<div class="col-2">总价：{{costAll}}</div>
				<button type="button" class="btn btn-warning">结算</button>
			</div>
	</div>
	<div v-else style="font-weight: 500;font-size: 50px;">购物车为空</div>
</template>
<script>
	export default{
		data(){
			return{
				product:this.$store.state.productList,
				
			}
		},
		computed:{
			cartList(){
				return this.$store.state.cartList
				/* let List = [...this.product] */
				/* cartListItem =  List.filter(item => item.id == this.id) */
				/* return List */
			},
			countAll(){
				let count = 0
				this.cartList.forEach(item => count += item.count)
				return count;
			},
			costAll(){
				let cost = 0
				this.cartList.forEach(item => cost += this.product[item.id-1].cost*item.count)
				return cost
			}
		},
		methods:{
			test(){
				console.log(this.cartList)
			},
			handleCount(index,count){
				if(count<0 && this.cartList[index].count === 1)
				return;
				this.$store.commit('editCartCount',{id:this.cartList[index].id,count:count})
			},
			handleDel(index){
				this.$store.commit('deletCart',this.cartList[index])
			}
		}
	}
	
</script>

<style scoped>
	.product-img img{
		height: 100%;
	}
	.table td{
		height: 100px;
		vertical-align: middle;
		
	}
	.table td span{
		font-size: 20px;
	}
	.table td button{
		margin: 10px;
	}
	.foot{
		font-size: 30px;
	}
</style>
