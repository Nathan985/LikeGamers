import { ReactNode, createContext, useEffect, useState } from 'react';

interface InputContextProps {
  setShowError: React.Dispatch<React.SetStateAction<boolean>>
  showError: boolean,
  possitionIcon: 'left' | 'right',
  setPositionIcon: React.Dispatch<React.SetStateAction<'left' | 'right'>>
  setAddOnIsIcon: React.Dispatch<React.SetStateAction<boolean>>,
  addOnIsIcon: boolean
  classNameSetter: keyof ClassNameType;
  useAddIcon: boolean;
  setUseAddIcon: React.Dispatch<React.SetStateAction<boolean>>,
}
export const InputContext = createContext({} as InputContextProps);

export type ClassNameType = {
  'left': string,
  'left-iconed': string,
  'right': string,
  'right-iconed': string
}

interface InputProviderProps {
  children: ReactNode
}
export const InputProvider = ({ children }: InputProviderProps) => {
  const [showError, setShowError] = useState(false);
  const [possitionIcon, setPositionIcon] = useState<'left' | 'right'>('left');
  const [addOnIsIcon, setAddOnIsIcon] = useState(false);
  const [useAddIcon, setUseAddIcon] = useState(false);
  const [classNameSetter, setClassNameSetter] = useState<keyof ClassNameType>('left');

  useEffect(() =>{
    const sufix = addOnIsIcon ? '-iconed' : '';
    setClassNameSetter(`${possitionIcon}${sufix}`);
  },[possitionIcon, addOnIsIcon]);

  return (
    <InputContext.Provider
      value={{
        showError,
        setShowError,
        possitionIcon,
        setPositionIcon,
        addOnIsIcon,
        setAddOnIsIcon,
        classNameSetter,
        setUseAddIcon,
        useAddIcon
      }}
    >
      {children}
    </InputContext.Provider>
  );
};