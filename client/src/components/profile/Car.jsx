import React from 'react';


const Car =({data})=>(
<div>
    {data.map((e,index)=>{
  return <Client  selectClient={selectClient} {...e} key={index} />
})}
</div>
)


export default Car