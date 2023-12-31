import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Flex,
  SelectField,
  TextField,
  View,
} from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import {createWeek, createLink, createScore } from '../graphql/mutations';
import { listWeeks, listScores, listLinks, listUsers } from "../graphql/queries";
import '../style/profile.css';


const Profile = ({ signOut, user}) => {
    const [weeks, setWeeks] = useState([]);
    const [selectedWeek, setSelectedWeek] = useState('');
    const [totalScore, setTotalScore] = useState(0)
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [LinkData, setLinkData] = useState(null);
    const [scoreData, setscoreData] = useState(null)
console.log(user)
const userEmail = user.attributes.email

    async function createLinks(event) {
      event.preventDefault();
      const form = new FormData(event.target);
      const week = selectedWeek;
      const youtube = form.get('youtube');
      const hashnode = form.get('hashnode');
      const github = form.get('github');
      const linkedin = form.get('linkedin');
      const blogTwo = form.get('blogTwo');
      const blogThree = form.get('blogThree');
      const userId = user.attributes.email

  
      try {
        const newLink = await API.graphql({
          query: createLink,
          variables: {
            input: {
              "hashnode": hashnode,
              "linkedin": linkedin,
              "youtube": youtube,
              "blogTwo": blogTwo,
              "blogThree": blogThree,
              "github": github,
              "weekID": week,
              "userID": userId

            }
          }
        });
        console.log(newLink);
  
        /* create score */
        async function createScores() {
          let score = 0;
          if (hashnode !== "") {
            score += 10;
          }
          if (linkedin !== "") {
            score += 10;
          }
          if (youtube !== "") {
            score += 10;
          }
          if (github !== "") {
            score += 10;
          }
          if (blogThree !== "") {
            score += 10;
          }
          if (blogTwo !== "") {
            score += 10;
          }
  
          const newScore = await API.graphql({
            query: createScore,
            variables: {
              input: {
                "name": score,
                "weekID": selectedWeek,
                "userID": userEmail
              }
            }
          });
  
          console.log("New score:", newScore);
          return newScore;
        }
  
        await createScores();
        setFormSubmitted(true)
        event.target.reset();
      } catch (error) {
        console.error("GraphQL API call error:", error);
      }
    }
  
    async function createWeekLink(event) {
      event.preventDefault();
      const form = new FormData(event.target);
      console.log(form.get('name'));
      const data = form.get("name");
      try {
        const newWeek = await API.graphql({
          query: createWeek,
          variables: {
            input: {
              "name": data,
            }
          }
        });
        console.log(newWeek);
        event.target.reset();
      } catch (error) {
        console.error("GraphQL API call error:", error);
      }
    }
  
    useEffect(() => {
      async function fetchAllWeeks() {
        try {
          const result = await API.graphql({ query: listWeeks });
          const allWeeks = result.data.listWeeks.items;
          setWeeks(allWeeks);
          console.log(allWeeks);
        } catch (error) {
          console.error("GraphQL API call error:", error);
        }
      }
      if (formSubmitted) {
        fetchAllWeeks();
      }
      fetchAllWeeks()
    }, [formSubmitted]);
  
    useEffect(() => {
      async function fetchAllScores() {
        try {
          const result = await API.graphql({ query: listScores });
          const allScore = result.data.listScores.items;
          let score = 0;
           setscoreData(allScore)
          allScore.map(element => {
            if(element.userID === userEmail){
              score += element.name;
            }
          });
          setTotalScore(score);
        } catch (error) {
          console.error("GraphQL API call error:", error);
        }
      }
      if (formSubmitted) {
        fetchAllScores();
      }
      fetchAllScores()
    }, [formSubmitted]);

    useEffect( () => {
      async function fetchLinksData() {
        try {
          const week = await API.graphql({
            query: listLinks
          });
      
          setLinkData(week.data.listLinks.items)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      if (formSubmitted) {
        fetchLinksData();
      }
      
      fetchLinksData();
     }, [formSubmitted])

     useEffect( () => {
      async function fetchUsersData() {
        try {
          const users = await API.graphql({
            query: listUsers
          });
      
          console.log(users)
        } catch (error) {
          console.error('Error fetching data:', error);
        }
      }
      if (formSubmitted) {
        fetchUsersData();
      }
      
      fetchUsersData();
     }, [formSubmitted])

  
    /*create weeks */
    async function createWeekLink(event) {
        event.preventDefault();
        const form = new FormData(event.target);
        console.log(form.get('name'));
        const data =form.get("name")
        try {
            const newWeek = await API.graphql({
              query: createWeek,
              variables: {
                input: {
                  "name": data,
                }
              }
            });
            console.log(newWeek);
            event.target.reset();
          } catch (error) {
            console.error("GraphQL API call error:", error);
          }
      }

      const navigate = useNavigate();

      const nextpage = () => {
        navigate("/editAccount");
      }
 

    return (<>
    <section className='profile-section'>
        <Flex className="App">
            <Button
            backgroundColor="blue"
            className='hover-button'
            color="#fff"
            border="none"
            onClick={()=> {navigate('/')}}
            >
              Home
            </Button>
            <Button 
              backgroundColor="blue"
              color="#fff"
              className='fadeout hover-button'
              border="none"
            onClick={signOut}>Sign Out</Button>
        </Flex>
            <section className='welcome-section'>
                <h1 className='intro-greeting'>Wellcome {user.attributes.name}!</h1>
                <div>
                    <p className='score-value'>Total score: <span className='span-1'>{totalScore}</span></p>
                </div>
            </section>

        <section className="form-section">
            <p>Submit your links </p>
        <View as="form"
         width="100%"
         maxWidth="900px" 
         padding="1rem"
         borderRadius="10px"
         display="flex"
         justify="center"
         direction="column"
         backgroundColor="rgb(235, 236, 236)"
         gap="1rem"
          onSubmit={createLinks}>
            <div>
             <SelectField
                name='weekId'
                placeholder='Select week'
                value={selectedWeek}
                onChange={(e) => setSelectedWeek(e.target.value)}
              >
                {weeks.map((week) => (
                  <option key={week.id} value={week.id}>
                    {week.name}
                  </option>
                ))}
              </SelectField>
            </div>
            <div className='link-input'>
          <TextField
            name="youtube"
            placeholder="Youtube link"
            label="Youtube"
          
          />
           <TextField
            name="github"
            placeholder="Github link"
            label="Note Name"
           
          /> 
           <TextField
            name="linkedin"
            placeholder="Linkedin link"
            label="Note Name"
           
            required
          /> 
            <TextField
            name="hashnode"
            placeholder="{ e.g hashnode link }"
            label="Blog post link 1st"
            color="red.10"
          />

             <TextField
            name="blogTwo"
            placeholder="{ e.g medium link }"
            label="Blog post link 2nd"
            color="red.10"
          />

            <TextField
            name="blogTwo"
            placeholder="{ e.g blog link }"
            label="Blog post link 3th"
            color="red.10"
          />
            </div>
         <Button type="submit" alignSelf="center" variation="primary">
            Submit links
          </Button>
      </View>
      </section>

      <section className='links-display'>
        <div className='container-items'>
             {
              LinkData?.map((element) => {
                if(element.userID === userEmail){
                  
                return(
                  <>
                    <div className='weeks-section'>
                <div className='week-name'>
                   {
                     weeks?.map(elem => {
                      if(element.weekID == elem.id){
                        return(<div>
                          <h1>{elem.name}</h1>
                        </div>)
                      }
                   })
                  }
                </div>
                <ul className='links-items'>
                    <li><a href={element.youtube}>Youtube</a></li>
                    <li><a href={element.linkedin}>Linkedin</a></li>
                    <li><a href={element.github}>Github</a></li>
                    <li className='blogPost-link'>
                    <a href={element.hashnode}>blogOne</a>
                    <a href={element.blogTwo}>blogTwo</a>
                    <a href={element.blogThree}>BlogThree</a>
                    </li>

                </ul>
                <div className='score-name'>
                    {
                      scoreData?.map((item) => {
                        if(element.weekID == item.weekID && item.userID === userEmail){
                          return(<div>
                            <h1>Score: {item.name}</h1>
                            </div>
                          )
                        }
                    })
                  }
                </div>
             </div>
                  </>
                )}
              })
             }
        </div>
      </section>
      </section>
        </>);
}

export default withAuthenticator(Profile);
