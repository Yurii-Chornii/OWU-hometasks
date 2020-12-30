const initialState = {
    users: [],
    isModalVisible: false,
    selectedUser: null
};

export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_USER': {
            return {...state, users: [...state.users, action.payload]}
        }
        case 'DELETE_USER': {
            // return state.filter((user) => user.id !== +action.payload);
            const filteredUsers = state.users.filter((user) => user.id !== +action.payload);
            return {...state, users: filteredUsers}
        }
        case 'TOGGLE_MODAL': {
            return {...state, isModalVisible: !state.isModalVisible}
        }
        case 'SELECT_USER': {
            console.log(action.payload);
            return {...state, selectedUser: action.payload}
        }
        case 'SAVE_USER': {

            return {...state, selectedUser: {...state.selectedUser, name: action.payload.name, age: action.payload.age}}
        }
        default: {
            return state;
        }
    }
}
