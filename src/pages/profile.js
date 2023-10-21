import React, { useEffect, useState } from 'react';
import "@aws-amplify/ui-react/styles.css";
import {
  withAuthenticator,
  Button,
  Heading,
  SelectField,
  TextField,
  View,
  Card,
} from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import {createWeek, createLink} from '../graphql/mutations';
import { listWeeks } from "../graphql/queries";
import '../style/profile.css'
const Profile = ({ signOut, user}) => {
    const [weeks, setWeeks] = useState([]);
    const [selectedWeek, setSelectedWeek] = useState('');

async function createLinks(event) {
  event.preventDefault();
  const form = new FormData(event.target);
  const week = selectedWeek
  const youtube = form.get('youtube');
  const hashnode = form.get('hashnode');
  const github = form.get('github');
  const linkedin = form.get('linkedin');

  // try {
  //   const newWeek = await API.graphql({
  //     query: createWeek,
  //     variables: {
  //       input: {
  //         "name": data,
  //       }
  //     }
  //   });
  //   console.log(newWeek);
  //   event.target.reset();
  // } catch (error) {
  //   console.error("GraphQL API call error:", error);
  // }
}

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
 
      console.log(selectedWeek)
    
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
        fetchAllWeeks();
      }, []);

    return (<>
    <section className='profile-section'>
        <View className="App">
            <Card>
                <Heading level={1}>We now have Auth!</Heading>
            </Card>
            <Button onClick={signOut}>Sign Out</Button>
        </View>

            <section className='welcome-section'>
                <h1 className='intro-greeting'>Wellcome {user.username}!</h1>
                <div>
                    <p className='score-value'>Total score: <span className='span-1'>0</span></p>
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
          
            required
          />
           <TextField
            name="github"
            placeholder="Note Name"
            label="Note Name"
            
            required
          /> 
           <TextField
            name="linkedin"
            placeholder="Note Name"
            label="Note Name"
           
            required
          /> 
            <TextField
            name="hashnode"
            placeholder="Note Name"
            label="Note Name"
            color="red.10"
            required
          />
            </div>
         <Button type="submit" alignSelf="center" variation="primary">
            Create Note
          </Button>
      </View>
      </section>

      <section className='links-display'>
        <div className='container-items'>
             <div className='weeks-section'>
                <div className='week-name'>
                    <h2>Week two</h2> 
                </div>
                <ul className='links-items'>
                    <li><p>Youtufre</p></li>
                    <li><p>Youtufre</p></li>
                    <li><p>Youtufre</p></li>
                    <li><p>Youtufre</p></li>

                </ul>
                <div className='score-name'>
                    <h4>score: 0</h4>
                </div>
             </div>

             <div className='weeks-section'>
                <div className='week-name'>
                    <h2>Week two</h2> 
                </div>
                <ul className='links-items'>
                    <li><p>Youtufre</p></li>
                    <li><p>Youtufre</p></li>
                    <li><p>Youtufre</p></li>
                    <li><p>Youtufre</p></li>

                </ul>
                <div className='score-name'>
                    <h4>score: 0</h4>
                </div>
             </div>

             <div className='weeks-section'>
                <div className='week-name'>
                    <h2>Week two</h2> 
                </div>
                <ul className='links-items'>
                    <li><p>Youtufre</p></li>
                    <li><p>Youtufre</p></li>
                    <li><p>Youtufre</p></li>
                    <li><p>Youtufre</p></li>

                </ul>
                <div className='score-name'>
                    <h4>score: 0</h4>
                </div>
             </div>
        </div>
      </section>
      </section>
        </>);
}

export default withAuthenticator(Profile);
