import React, { useState, useEffect } from 'react';
import { API } from "aws-amplify";
import { listWeeks, listScores, listUsers } from "../../graphql/queries";

const WeekDetail = () => {
  const [weekData, setWeekData] = useState([]);
  const [selectedWeek, setSelectedWeek] = useState("4cbabe26-64b5-4c81-85f3-39b0ce209d86");
  const [scoresForSelectedWeek, setScoresForSelectedWeek] = useState([]);
  const [userData, setUserData] = useState([])


  useEffect(() => {
    async function fetchWeekData() {
      try {
        const weeks = await API.graphql({
          query: listWeeks
        });

        setWeekData(weeks.data.listWeeks.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchWeekData();
  }, []);

  const handleListItemClick = (value) => {
    setSelectedWeek(value);
  };
console.log(selectedWeek)
  useEffect(() => {
    if (selectedWeek) {
      async function fetchScoresForWeek() {
        try {
          const scores = await API.graphql({
            query: listScores,
            variables: {
              filter: {
                weekID: { eq: selectedWeek }
              }
            }
          });

          setScoresForSelectedWeek(scores.data.listScores.items);
        } catch (error) {
          console.error('Error fetching scores for the week:', error);
        }
      }
      async function fetchUsers() {
         try {
          const users = await API.graphql({
            query: listUsers
          });
          setUserData(users.data.listUsers.items)

         } catch(error) {
          console.error('Error fetching scores for the week:', error);
         }
      }
      fetchUsers()
      fetchScoresForWeek();
    }
  }, [selectedWeek]);

  return (
    <>
     <div className="leader-section">
      <div>
        <div className="leader-container">
          <div className="weeksection">
            <ul>
              {weekData?.map((element) => (
                <li
                  key={element.id}
                  className={selectedWeek === element.id ? 'nav-text1' : 'nav2-text'}
                  onClick={() => handleListItemClick(element.id)}
                >
                  {element.name}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="leader-container">
        {scoresForSelectedWeek.length > 0 &&
          scoresForSelectedWeek
            .sort((a, b) => b.score - a.score)
            .map((score, index) => {
              let itemClass = "item-indexBox";
              if (index === 0) {
                itemClass += " first-item";
              } else if (index === 1) {
                itemClass += " second-item";
              } else if (index === 2) {
                itemClass += " third-item";
              }
              return(
              <div className="item-board" key={score.id}>
                <div className={itemClass}>
                  <h2>{index + 1}</h2>
                </div>
                <div className="image-container">
                  <img
                    className="item-image"
                    src="https://cdn.pixabay.com/photo/2023/10/19/04/24/ai-generated-8325514_640.jpg"
                    alt="User"
                  />
                </div>
                <ul className="link-score">
                  <li className="user-name">{
                    userData?.map((elem) => {
                      if(elem.email === score.userID){
                        return(
                          <>
                          <p>{elem.name}</p>
                          </>
                        )
                      }
                    })
                  }</li>
                  <li className="user-score">{score.name}</li>
                </ul>
              </div>)
            })}
        {scoresForSelectedWeek.length === 0 && (
          <p>No scores available for the selected week.</p>
        )}
      </div>
      </div>
    </>
  );
};

export default WeekDetail;
