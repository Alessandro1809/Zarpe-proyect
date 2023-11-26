import { useState, createContext} from "react";
import EnMessages from '../Lang/en-US.json';
import SpMessages from '../Lang/es-MX.json';
import { IntlProvider } from "react-intl";

const langContext= createContext();

// eslint-disable-next-line react/prop-types
const LangProvider = ({children}) => {

       let DefaultLocale;
       let DefaultMessages;
       const lang =localStorage.getItem('lang');

       if (lang) {
           DefaultLocale= lang;

           if (lang==='es-MX') {
               DefaultMessages=SpMessages;
           }else if (lang==='en-US') {
               DefaultMessages=EnMessages;
           }else{
               DefaultLocale='en-US'
               DefaultMessages=EnMessages;
           }
       }

   const [messages,setMessages]= useState(DefaultMessages);
   const [locale,setLocale]= useState(DefaultLocale);

       const setLang=(lang)=>{
          
           switch(lang){
               case 'es-MX':
                   setMessages(SpMessages);
                   setLocale('es-MX');
                   localStorage.setItem('lang','es-MX');
                   break;
                   case 'en-US':
                   setMessages(EnMessages);
                   setLocale('en-US');
                   localStorage.setItem('lang','en-US');
                   break;

                   default:
                   setMessages(EnMessages);
                   setLocale('en-US');
                   localStorage.setItem('lang','en-US');
                   break;
           }
       
       }


 return (
   <langContext.Provider
   value={{
      
       messages,
       locale,
       setLang
   }}>
       <IntlProvider locale={locale} messages={messages}>
       {children}
       </IntlProvider>
   </langContext.Provider>
 )
}



export{
   LangProvider
}

// eslint-disable-next-line react-refresh/only-export-components
export default langContext;
