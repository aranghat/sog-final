import {useContext} from 'react'
import {StyleContext} from './StyleContext'
import {AuthStatusContext} from './AuthStatusContext'

export default function NewsArticle({children}){
    const style = useContext(StyleContext);
    const isuserloggedin = useContext(AuthStatusContext);
    
    console.debug(style);
    return (
        <div style={style}>
           {isuserloggedin && <div>
                {children}
                 Published On : {new Date().toLocaleDateString()}
           </div>
           
           }
        </div>
    )
}