/*
javascript has events object at its core, which can be seen in case of events like onClick, onChange etc.

## But React has its own events called synthetic events.

1. react combines all events from all browsers and makes its own event object which will be uniform on all browsers, so it will boost performance of web apps.
2. we have e.preventDefault() and e.stopPropagation() methods to take benefits from.
 */

const App = (props) =>{

    const handleFormSubmit = (e) =>{
        e.preventDefault() //this is synthetic event handler to stop default behaviour, its stops page refresh.
    }


    return <>
    <form type="submit" onSubmit={handleFormSubmit}>
        <input type="text"/>
        <button type="submit" ></button>
    </form>
    </>

}