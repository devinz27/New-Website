import './Nav.css';
import React, {useState} from 'react'

// function Button(props){

//     return (
//         // <div className='buttonContainer'>
//             <button onClick={props.handle} className={props.class}>{props.value}</button>
//         //  </div>
//     );
// }



function Nav({handlePageSwitch}) {
  const [selected, setSelected] = useState('Home');
  function handleClick(list){
    setSelected(list.value);
    handlePageSwitch(list.value)
  }

    const buttonList  = [{value:'Home'}, {value:'About'}, {value:'Contact'}]
  return (
    <div className="Nav">
      <div className='logo'>
        <img src={require('./static/logo.png')} alt='logo' className='logo'/>
      </div>
        <div className='navbuttons'>
            {buttonList.map((list)=>(
                <button
                    onClick={()=>
                    handleClick(list)}
                    key={list.value}
                    className={(selected === list.value  ? 'pressed ' : 'notpressed ') + 'navbutton'}
                >
                    {list.value}
                </button>
            ))}
            </div>
    </div>
  );
}

export default Nav;