import reducer, { add, initialState } from '../taks';

describe('task slice', () => {
  it('debe retornar el estado inicial por defecto', () => {
    expect(reducer(undefined, { type: '' })).toEqual({
      tasks: [],
    });
  });

  it('debe agregar una nueva tarea al estado', () => {
    const previousState = { tasks: ['Primera tarea'] };
    const action = add('Nueva tarea');
    const nextState = reducer(previousState, action);

    expect(nextState.tasks).toEqual(['Primera tarea', 'Nueva tarea']);
  });

  it('debe agregar múltiples tareas en secuencia', () => {
    const state = reducer(initialState, add('Tarea 1'));
    const updatedState = reducer(state, add('Tarea 2'));

    expect(updatedState.tasks).toEqual(['Tarea 1', 'Tarea 2']);
  });
});