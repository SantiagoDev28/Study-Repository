
type OrderState = 'pending' | 'processing' | 'completed';

function order(state: OrderState){

  if (state === 'pending'){
    console.log(`Your order is ${state}`)
  }else if(state === 'processing'){
    console.log(`Your order is ${state}`)
  }
  console.log(`Your order is ${state}`)
}

order('completed');
//order('finished');
