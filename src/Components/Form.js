import {useForm} from 'react-hook-form'

export const Form  = () => {
    return (
        <form>
            <input type="text" placeholder="Full Name..."/>
            <input type="text" placeholder="Email..."/>
            <input type="text" placeholder="Age..."/>
            <input type="password" placeholder="Passsowrd..."/>
            <input type="password" placeholder="Confirm Passsword..."/>
            <input type="submit"/>
        </form>
    );
};