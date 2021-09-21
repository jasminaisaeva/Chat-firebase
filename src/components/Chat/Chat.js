import React, { useContext, useState } from "react";
import { Context } from "../../index";
import { useAuthState } from "react-firebase-hooks/auth";
import { Container, Grid, TextField, Button ,Avatar} from "@material-ui/core";
import firebase from 'firebase'
import { useCollectionData } from "react-firebase-hooks/firestore";
import { Loader } from "../../Loader/Loader";

export const Chat = () => {
  const { auth, firestore } = useContext(Context);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState("");
  const [messages, loading] = useCollectionData(
    firestore.collection("messages").orderBy("createdAt")
  );

 console.log(messages)
  const sendMessage = async () => {
   firestore.collection('messages').add({
       uid:user.uid,
       displayName: user.displayName,
       photoURL : user.photoURL,
       text:value,
       createdAt : firebase.firestore.FieldValue.serverTimestamp()

   })
   setValue('')
  };

  function onDelete(event) {
    event.currentTarget.remove();
  }
  

  if (loading) {
    return <Loader />;
  }
  return ( 
    <Container>
      <Grid
        container
        style={{ height: window.innerHeight - 50, marginTop: 20 }}
        justify={"center"}
      >
        <div
          style={{
            width: "88%",
            height: "70vh",
            border: "1px solid gray",
            overflow: "auto",
          }}
        >
            {messages.map(message => 
                <div style={{margin:10,
                border:user.uid === message.uid ? '1px solid green' : '2px dashed red',
                marginLeft:user.uid === message.uid ? 'auto' : '10px',
                width: 'fit-content',
                padding:5,
               }}    onClick={onDelete}>
                    <Grid  container>
                    <Avatar src={message.photoURL} />
                    <div>{message.displayName}</div>
                    </Grid>
                    <div>{message.text}</div>
                    <button >delete</button>
                </div>
            )}
        </div>
        <Grid
          container
          direction={"column"}
          alignItems={"flex-end"}
          style={{ width: "88%" }}
        >
          <TextField
            fullWidth
            variant={"outlined"}
            rowsMax={2}
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Button onClick={sendMessage} variant={"outlined"}>
            Send
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
};
