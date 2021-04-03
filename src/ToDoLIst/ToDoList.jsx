import React, { useState } from "react";
import {itemArray} from "../data.js"
import  trashCan from "../image/trashCan.png";
import pen from "../image/pen.png";
import ReactLogo from "../ReactLogo/ReactLogo";
import Button from "../Button/Button";
import "./ToDoList.css"




const ToDoList = ()=>{
  
   
    const [items, setItems] = useState( itemArray )

    const [inputValue, setInputValue] = useState("")

    const [search, setSearch] = useState("")

    
    const add = ()=>{

            setItems([...items, {text:inputValue, update:false, cheked:false, lineThrough:false}])
    }

    const Delete = ( index ) =>{

        let newItems = items.filter((item, indexx)=> index !== indexx)

        setItems(newItems)

    }

    const edit = ( index ) =>{
         
     let x = items.map((item,indexx)=>{

            if(index === indexx){

               return {...item,update:true}
    
            } else return item
               
    })
    setItems(x)
    }

    const offBlur = () =>{

     let  x = items.map((item)=>{
             return {...item,update:false}
    })
           
    setItems(x)

    
   }

   const onChange =( e, index )=>{

     let x = items.map((item,indexx)=>{


        
         if(index===indexx){

             return {...item,text:e.target.value}

         }else return item

         
     })
     setItems(x)

     
   }

   const checked = ( e, index )=>{

   let x = items.map((item , indexx)=>{


      if(index===indexx && e.target.checked === true){

         return  {...item,cheked:true ,lineThrough:true}

      }else if(index===indexx && e.target.checked === false){

       return {...item,cheked:false ,lineThrough:false}   
       
      } else return item


  

   })
   setItems(x)
   }


    return <div className="main-page">
          
        <header className="header">
            
        <ReactLogo/>

        <input  className="search-bar" type="text" value={search} onChange={(e)=>{setSearch(e.target.value)}} placeholder="Search..." /> 
       
        <input  className="add-bar"   autoFocus={true} type="text" placeholder="Add..." value={inputValue} onChange={(e)=>{ setInputValue(e.target.value)}}/>

        <Button add={add}   inputValue={inputValue}/>
          
        </header>

        <main className="main-container">

        {items.filter(item=>{

        if (item.text.toLowerCase().includes(search.toLowerCase())){

            return item

        } else if( search == "" ){

            return item

        }}).map((item, index)=>{

            return <div key = { index } >

                <div className = "item" >

                {item.update ? <input  autoFocus = { true } onBlur = { offBlur } className = "item__update" type = "text" value = { item.text } onChange={(e)=>{ onChange( e,index ) }}></input> :<div style = {{ textDecoration: item.lineThrough ? "line-through"  :""}} className = "item__info"><div className="ellipsis">{ item.text }</div></div>} 

                <div className = "item__tools">

                <input className = "item__check" type = "checkbox"  onChange = {( e ) => { checked( e, index ) }} checked = { item.cheked } />

                <img src = { pen } title = "edit item" onClick={ () => { edit( index ) }}/> 

                <img src = { trashCan } onClick = { () => { Delete( index ) }}  title = "delete item"/>
                   
              </div>

            </div>

          </div>
       })}

        </main>
 
    </div>


    }
export default ToDoList