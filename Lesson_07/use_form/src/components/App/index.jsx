import React from "react";
import FormItem from "../FormItem";

function App() {
  return (
    <div>
      <FormItem 
         title={'Регистрация'}
         button={{submit: 'Регистрация', redirect: 'Войти'}}
         info_text={'Регистрируясь на сайте, вы соглашаетесь с нашими Правилами и Политикой конфедициальности и соглашаетесь на информационную рассылку.'}
         form_type={'registration'}
      />

       <FormItem 
         title={'Войти'}
         button={{submit: 'Войти', redirect: 'Регистрация'}}
         info_text={'Восстановить пароль'}
         form_type={'login'}
      />

       <FormItem 
         title={'Восстановление пароля'}
         button={{submit: 'Отправить'}}
         info_text={'Срок действия временного пароля 24 ч.'}
         form_type={'reset passwort'}
         info_text_add={'Для получения временного пароля необходимо ввести email указанный при регистрации.'}
      />
        
    </div>
  );
}

export default App;
