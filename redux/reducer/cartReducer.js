const initialState = [];

const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDITEM": {
            const item = action.payload;
            
            const exist = state.find(x => x.id === item.id);
            if (exist) {
                
                return state.map(x =>
                    x.id === item.id ? { ...x, qty: x.qty + 1 } : x
                );
            } else {
                 
                return [...state, { ...item, qty: 1 }];
            }
        }

        case "DELITEM": {
            const item = action.payload;
            // Verifica se o item existe no carrinho
            const exist = state.find(x => x.id === item.id);
            if (exist) {
                
                if (exist.qty > 1) {
                    return state.map(x =>
                        x.id === item.id ? { ...x, qty: x.qty - 1 } : x
                    );
                } else {
                     
                    return state.filter(x => x.id !== item.id);
                }
            }
            return state;
        }

        default:
            return state;
    }
}

export default cartReducer;
