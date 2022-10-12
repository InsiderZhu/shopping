<template>
<div>
		<div class="list-control">
			<div class="list-control-filter">
				<span>品牌</span>
				<span class="list-control-filter-item" v-for="(brand,index) in brands" :key="index" @click="handleFilterBrand(brand)" :class="{on:selectBrand==brand}">{{brand}}</span>
			</div>
			<div class="list-control-filter">
				<span>颜色</span>
				<span class="list-control-filter-item" v-for="(color,index) in colors" :key="index" @click="handleFilterColor(color)" :class="{on:selectColor==color}">{{color}}</span>
			</div>
			<div>
				<span>排序：</span>
				<span class="list-control-filter-item" :class="{on:order == ''}" @click="handleOrderDefault">默认</span>
				<span class="list-control-filter-item" :class="{on:order == 'sales'}" @click="handleOrderSales">销量</span>
				<span class="list-control-filter-item" :class="{on:order.indexOf('cost')>-1}"  @click="handleOrderCost">价格</span>
				<template v-if="order === 'cost-asc'">↑</template>
				<template v-if="order === 'cost-desc'">↓</template>
			</div>
	</div>
	<div class="list-product">
		<!-- <button @click="test">1</button> -->
		<product-item v-for="item in filteredAndOrderList" :key="item.id" :productItem='item'></product-item>
	</div>
</div>
</template>

<script>
	
	import productItem from '../components/product.vue'
	
	export default{
		name:'list',
		data(){
			return{
				selectBrand:'',
				selectColor:'',
				order:''
			}
		},
		components:{
			productItem
		},
		mounted(){
			this.$store.dispatch('getProductList')
		},
		computed:{
			productList(){
				return this.$store.state.productList
			},
			brands(){
				return this.$store.getters.brands
			},
			colors(){
				return this.$store.getters.colors
			},
			filteredAndOrderList(){
				let List = [...this.productList]
				if(this.order !== ''){
					if(this.order == 'sales'){
						List.sort((a,b) => b.sales-a.sales)
					}else if(this.order == 'cost-desc'){
						List.sort((a,b) => b.cost-a.cost)
					}else if(this.order == 'cost-asc'){
						List.sort((a,b) => a.cost-b.cost)
					}
				}
				if(this.selectBrand !== ''){
					List =  List.filter(item => item.brand == this.selectBrand)
				}
				if(this.selectColor !== ''){
					List =  List.filter(item => item.color == this.selectColor)
				}
				return List
			},
			
		},
		methods:{
			test(){
				console.log(this.$store.state.cartList)
			},
			handleFilterBrand(brand){
				if(this.selectBrand==brand)
				this.selectBrand = ''
				else
				this.selectBrand = brand
			},
			handleFilterColor(color){
				if(this.selectColor==color)
				this.selectColor = ''
				else
				this.selectColor = color
			},
			handleOrderDefault(){
				this.order = ''
			},
			handleOrderSales(){
				this.order = 'sales'
			},
			handleOrderCost(){
				if(this.order == 'cost-asc'){
					this.order = 'cost-desc'
				}else{
					this.order = 'cost-asc'
				}
			}
		},

	}
</script>

<style>
	.list-product{
		display: flex;
		flex-wrap: wrap;
	}
	.list-control{
		margin: 18px;
		padding: 20px;
		border: 1px solid #ccc;
		border-radius: 3px;
		box-shadow: 0 1px 1px rgb(0,0,0,0.2);
		background-color: #fff;
		font-size: 4px;
	}
	.list-control-filter{
		margin: 16px 0;
	}
	.list-control-filter-item{
		margin-right: 6px;
		padding: 2px 8px;
		border: 1px solid #ccc;
		border-radius: 5px;
		cursor: pointer;
	}
	.on{
		background-color: #222;
		color: #fff;
	}
</style>