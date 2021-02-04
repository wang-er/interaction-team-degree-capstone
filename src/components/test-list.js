import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { db } from '../config';

//styled components, super simple example
export const Container = styled.div`
  color: red;
  font-size: 100px;
`

//functional components?
const TestList = () => {
    const [messageList, setMessageList] = React.useState([]);
    const [name, setName] = useState("");

    useEffect(() => {
        // Update the document title using the browser API
        db.ref('todos/').on('value', snapshot => {
            const message = snapshot.val();
            console.log(message)

            const testArray = [];
            for (var key in message) {
                testArray.push({ id: key, object: message[key] });
            }
            console.log(testArray)
            setMessageList(testArray);
        });
    }, []);

    //helper to send test data to firebase
    const sendData = () => {
        db.ref('todos/').push({
            done: false,
            todoItem: "what",
        });
        console.log("data has been sent?")
    }

    //helper to clear last entry in data
    const clearData = () => {
        //geting the last node
        if(messageList.length > 0) {
        var id = messageList[messageList.length - 1].id;
        var lastObject = db.ref('todos/' + id);
        console.log(lastObject)
        lastObject.remove();
        }
    }

    //send text vals
    const submitValue = () => {
        if(name !== "") {
        const deets = {
            done: false,
            todoItem: name,
        }
        db.ref('todos/').push(deets);
        setName('')
        console.log(deets);
    }
    }

    //rendering
    return <>
        <button onClick={sendData}> press for data to be sent! </button>
        <button onClick={clearData}> clear last entry</button>

        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
        <button onClick={submitValue}>Submit name</button>
        <Container>THE LIST:</Container>
        {messageList.map((test) => {
            return (
                <div>{test.object.todoItem}</div>
            )
        })}
    </>
}

export default TestList
