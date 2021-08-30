import React from 'react';

const AppContext = React.createContext({
    setCodeEditorValue: () => {}
})

const useEditorContext = () => {
    const { setCodeEditorValue } = React.useContext(AppContext)
    const { Provider } = AppContext
    return {
        Provider,
        setCodeEditorValue
    }
}

export default useEditorContext