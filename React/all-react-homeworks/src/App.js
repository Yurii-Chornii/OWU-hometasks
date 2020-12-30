import React from 'react';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import User from "./components/User";

export default function App() {
    const dispatch = useDispatch();
    const users = useSelector((users) => users.users);
    const isModalVisible = useSelector((state) => state.isModalVisible);
    const selectedUser = useSelector((state) => state.selectedUser);
    const formNewUser = React.createRef();


    const form1Handler = (e) => {
        e.preventDefault();
        const name = e.target[0].value;
        const age = e.target[1].value;
        const id = new Date().getTime();
        dispatch({type: 'ADD_USER', payload: {name, age, id}})
    }

    const modalToggler = () => {
        dispatch({type: 'TOGGLE_MODAL'})
    }

    const saveUser = () => {
        const newUser = {
            name: formNewUser.current[0].value,
            age: formNewUser.current[1].value
        }
        dispatch({type: 'SAVE_USER', payload: newUser});
        modalToggler();
        console.log(selectedUser)
        console.log(users)
    }

    return (
        <div>
            <form onSubmit={form1Handler}>
                <div className={'inputs-wrapper'}>
                    <h5>name</h5>
                    <input className={'form-control'} type="text"/>
                    <h5>age</h5>
                    <input className={'form-control'} type="number"/>
                    <button className={'btn btn-info mt-3'}>Submit</button>
                </div>
            </form>

            {users.map(user => <User key={user.id} user={user}/>)}


            {
                isModalVisible &&
                (<div className={'modal-background'}>
                    <div className={'card myModal'}>
                            <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title">Type new data</h5>
                                    <button type="button" className="btn-close" onClick={modalToggler}></button>
                                </div>
                                <div className="modal-body">
                                    <form ref={formNewUser}>
                                        <h5>name</h5>
                                        <input className={'form-control'} type="text"/>
                                        <h5>age</h5>
                                        <input className={'form-control'} type="number"/>
                                    </form>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" onClick={modalToggler}>Close
                                    </button>
                                    <button type="button" className="btn btn-primary" onClick={saveUser}>Save changes</button>
                                </div>
                            </div>
                    </div>
                </div>)

            }




            {/*<form>*/}
            {/*    <select onChange={selectHandler}>*/}
            {/*        {store.map(user => <option onClick={selectHandler} value={user.id}>{user.name}</option>)}*/}
            {/*    </select>*/}
            {/*</form>*/}
        </div>
    );
}
