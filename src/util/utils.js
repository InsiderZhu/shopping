
export function getFilterArray(arr){
	const res = [];
	const tag = {};
	for(let i=0;i < arr.length;i++){
		let _self=arr[i]
//		console.log(_self)
//		console.log(tag)
//		console.log(tag[_self])
		if(!tag[_self]){
			res.push(_self)
			tag[_self]=1
		}
	}
	
	return res;
}

export function test(){
	return 0
}
