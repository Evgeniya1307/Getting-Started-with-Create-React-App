export function thunk ({ getState, dispatch}) {
    return function wrapDispatch(next) {
        return function handleAction(action){ //Создает несколько редьюсеров с помощью handleAction() и объединяет их в один редуктор, который обрабатывает несколько действий. 
            if(typeof action === "function"){
                console.log(typeof action);
                action(dispatch, getState);
            } else{
                return next(action);
            }
        };
    };
}