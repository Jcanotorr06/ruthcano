declare global {
    interface Window {
    __REACT_DEVTOOLS_GLOBAL_HOOK__: any;
    }
}

const disableReactDevTools = () => {
    if(typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__ !== "object") {
        return
    }

    for(const prop in window.__REACT_DEVTOOLS_GLOBAL_HOOK__) {
        if(prop === "renderers") {
            window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = new Map()
        } else {
            window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] = 
            typeof window.__REACT_DEVTOOLS_GLOBAL_HOOK__[prop] === "function" ? () => {} : null
        }
    }
}

export default disableReactDevTools