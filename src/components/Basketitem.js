import React from 'react'

const Basketitem = ({item,products}) => {
  return (
    <div>
<ul class="list-group list-group-flush">
  <li class="list-group-item"> {products.title}  x {item.amount}</li>

</ul>

  

       
    </div>
  )
}

export default Basketitem