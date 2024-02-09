export type State = {
  'SIDEBAR_MODAL': boolean
}

export type ISidebarActionState = {
  type: 'SIDEBAR_MODAL',
  payload: boolean
}

export type IAction = ISidebarActionState;

export const reducer = (state: State, action: IAction) => {
  return { ...state, [action.type]: action.payload }
}

export const initialState: State = {
  SIDEBAR_MODAL: false
}