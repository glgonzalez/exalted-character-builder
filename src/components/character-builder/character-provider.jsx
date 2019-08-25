import React, {createContext, useReducer, useContext} from 'react';

export const CharacterContext = createContext();

export const initialState = {
  attributes: {
    strength: 1,
    dexterity: 1,
    stamina: 1,
    charisma: 1,
    manipulation: 1,
    appearance: 1,
    perception: 1,
    intelligence: 1,
    wits: 1
  }
};

function reducer(state, action) {
  console.log('strength set', state.attributes.strength);
  switch(action.type) {
    case 'attributes':
      return {attributes: action.attributes, ...state};
    default:
      return state;
  }
}

export function CharacterProvider({children}) {
  const value = useReducer(reducer, initialState);
  return (
    <CharacterContext.Provider value={value}>
      {children}
    </CharacterContext.Provider>
  );
}

export function useCharacterContext() {
  return useContext(CharacterContext);
}