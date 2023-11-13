/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDiceD20} from '@fortawesome/free-solid-svg-icons';




export default function Dice({ value,rollStr}) {
    let numbers = rollStr.split('d');
    let classD = 'd' + numbers.slice(-1)[0];
    console.log(classD);
    console.log(value);

    return (<>
        <div
          className={' w-10 h-10 flex justify-center text-2xl items-center text-center p-2 m-1 bg-slate-950 text-white dice-animation'}
        >

          {value}
          <p> <FontAwesomeIcon icon={faDiceD20} size="1x" /> </p>
        </div>
    </>)
}