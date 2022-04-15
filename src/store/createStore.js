export function createStore(reducer, initialState) {
    let state = initialState;
    let listeners = [];
  
    function getState() {
      return state;
    }
  
    function dispatch(action) {//dispatchявляется функцией магазина Redux. Вы звоните store.dispatch, чтобы отправить действие. Это единственный способ вызвать изменение состояния.
      state = reducer(state, action);
      for (let i = 0; i < listeners.length; i++) {
        const listener = listeners[i];
        listener();
      }
    }
  
    function subscribe(listener) {
      listeners.push(listener);
    }
  
    return { getState, dispatch, subscribe };
}
