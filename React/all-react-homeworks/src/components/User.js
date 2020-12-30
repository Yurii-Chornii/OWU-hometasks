import {useDispatch, useSelector} from "react-redux";


export default function User ({user}){
    const dispatch = useDispatch();
    // const isModalVisible = useSelector((state) => state.isModalVisible);
    // console.log(isModalVisible)

    const modalToggler = () => {
        dispatch({type: 'TOGGLE_MODAL'})
    }
    const deleteUser = () => {
        dispatch({type: 'DELETE_USER', payload: user.id});
        dispatch({type: 'SELECT_USER', payload: user});
    }

    return (
        <div className={'card m-3 p-3'}>
            {user.name} - {user.age}
            <div>
                <button className={'btn btn-info'} onClick={modalToggler}>Edit</button>
                <button className={'btn btn-dark'} onClick={deleteUser}>Delete</button>
            </div>





        </div>
    );
}
