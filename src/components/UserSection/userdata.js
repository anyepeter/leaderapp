import { API } from "aws-amplify";
import { listWeeks, listScores, listLinks, listUsers } from "../../graphql/queries";
import { useEffect, useState } from "react";
import '../../style/userData.css';

const UserData = () => {
  const [userData, setUserData] = useState([]);
  const [weekData, setWeekData] = useState([]);
  const [scoreData, setScoreData] = useState([]);

  useEffect(() => {
    async function fetchUsersData() {
      try {
        const users = await API.graphql({
          query: listUsers
        });

        setUserData(users.data.listUsers.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchUsersData();
  }, []);

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

  useEffect(() => {
    async function fetchScoreData() {
      try {
        const scores = await API.graphql({
          query: listScores
        });

        setScoreData(scores.data.listScores.items);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchScoreData();
  }, []);

  // Calculate and sort the users by their total score in descending order
  const usersWithTotalScore = userData.map((user) => {
    const totalScore = scoreData.reduce((total, scoreItem) => {
      if (user.email === scoreItem.userID) {
        return total + scoreItem.name;
      }
      return total;
    }, 0);
    return { ...user, totalScore };
  });

  const sortedUsers = usersWithTotalScore.sort((a, b) => b.totalScore - a.totalScore);

  return (
    <>
      <section className="leader-section">
        <h2>Top leaders</h2>
        <div className="leader-container">
          {sortedUsers.map((user, index) => {
            let itemClass = "item-indexBox";
            if (index === 0) {
              itemClass += " first-item";
            } else if (index === 1) {
              itemClass += " second-item";
            } else if (index === 2) {
              itemClass += " third-item";
            }

            return (
              <div className="item-board" key={user.id}>
                <div className={itemClass}><h2>{index + 1}</h2></div>
                <div className="image-container"><img className="item-image" src="https://cdn.pixabay.com/photo/2023/10/19/04/24/ai-generated-8325514_640.jpg" alt="User" /></div>
                <ul className="link-score">
                  <li className="user-name">{user.name}</li>
                  <li className="user-score">
                    <p>{user.totalScore}</p>
                  </li>
                </ul>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default UserData;
