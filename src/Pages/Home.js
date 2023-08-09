import React, { useContext, useState } from "react";
import Axios from "axios";

import { 
    Row , 
    Container , 
    Col , 
    Input , 
    Button , 
    InputGroup , 
 } from "reactstrap";

import Repos from "../components/Repos";
import UserCard from "../UserCard"; 
import { UserContext } from "../Context/Usercontext";
import { redirect } from "react-router-dom";
import {toast} from "react-toastify";


const Home = ()=>{
    const Context =  useContext(UserContext)
    const [query , setQuery] = useState('')
    const [user , setUser] = useState(null) 

    const fetchDetails = async () => {
        try {
            const { data } = await Axios.get(`https://api.github.com/users/${query}`);
            setUser(data)
            console.log({data})

        } catch (error) {
            toast("Not able to locate user", { type: 'error' });
        }
    };

    if(!Context.user?.uid){
        return <redirect to='/signin'/>
    }

    return (
        <Container>
          <Row className=" mt-3">
            <Col md="5">
              <InputGroup>
                <Input
                  type="text"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  placeholder="Please provide the username"
                />
                <Button onClick={fetchDetails} color="primary">
                  Fetch User
                </Button>
              </InputGroup>
              {user ? <UserCard user={user} /> : null}
            </Col>
            <Col md="7">{user ? <Repos repos_url={user.repos_url} /> : null}</Col>
          </Row>
        </Container>
      );
      


}


export default Home 