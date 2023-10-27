import { API } from "aws-amplify";
import { listWeeks, listScores, listLinks, listUsers } from "../../graphql/queries";
import { useEffect, useState } from "react";
import '../../style/userData.css'

const UserData = () => {
    const [userData, setUserData] = useState([])

    useEffect( () => {
        async function fetchUsersData() {
          try {
            const users = await API.graphql({
              query: listUsers
            });
        
            setUserData(users.data.listUsers.items)
            console.log(users.data.listUsers.items)
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        }
        fetchUsersData();
       }, [])
console.log(userData)
    return(
        <>
        <section className="leader-section">
                <h2>Top leaders</h2>
                <div className="leader-container">
                    {
                       userData?.map((user, index) => {
                        let itemClass = "item-indexBox";
                         if(index === 0){
                          itemClass += " first-item"
                         } else if(index === 1){
                          itemClass += " second-item"
                         } else if(index === 2){
                          itemClass += " third-item"
                         }

                        return(
                            <>
                              <div className="item-board" key={user.id}>
                                <div className={itemClass}><h2>{index + 1}</h2></div>
                              <div className="image-container"><img className="item-image" src="https://cdn.pixabay.com/photo/2023/10/19/04/24/ai-generated-8325514_640.jpg" /></div>
                                <ul className="link-score">
                                    <li className="user-name">{user.name}</li>
                                    <li className="user-score">score</li>
                                </ul>
                              </div>
                            </>
                        )
                       })
                    }
                </div>
        </section>
        </>
    )
}

export default UserData;