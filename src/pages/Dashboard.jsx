import TicketCard from "../components/TicketCard";
// import avatar1 from "../images/avatar1.jpg";
const Dashboard = () => {
  const tickets = [
    {
      category: "Q1 2022",
      color: "red",
      title: "NFT Salary 101 Video",
      owner: "Ania Kubow",
      avatar: "https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-kubow-gravatar.jpeg",
      status: "done",
      priority: 5,
      progress: 100,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae laborum repellendus quibusdam saepe eius temporibus fuga assumenda, aspernatur facere soluta.",
      timestamp: "2022-02-11T07:36:17+0000",
    },
    {
      category: "Q1 2022",
      color: "green",
      title: "NFT Salary 102 Video",
      owner: "Ania Kubow",
      avatar:  "https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-kubow-gravatar.jpeg",
      status: "working on it",
      priority: 4,
      progress: 84,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae laborum repellendus quibusdam saepe eius temporibus fuga assumenda, aspernatur facere soluta.",
      timestamp: "2022-02-11T07:36:17+0000",
    },
    {
      category: "Q3 2022",
      color: "red",
      title: "NFT Salary 101 Video",
      owner: "Ania Kubow",
      avatar: "https://www.freecodecamp.org/news/content/images/size/w150/2021/05/ania-kubow-gravatar.jpeg",
      status: "working on it",
      priority: 3,
      progress: 54,
      description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae laborum repellendus quibusdam saepe eius temporibus fuga assumenda, aspernatur facere soluta.",
      timestamp: "2022-02-11T07:36:17+0000",
    },
  ];

  const colors = [
    'rgb(255,179,186)',
    'rgb(255,223,186)',
    'rgb(255,255,186)',
    'rgb(186,255,201)',
    'rgb(186,255,255)'
  ]

  const uniqueCategories = [
    ...new Set(tickets?.map(({ category }) => category)),
  ];

  console.log(uniqueCategories);

  return (
    <div className="dashboard">
      <h1>My Project</h1>
      <div className="ticket-container">
        {tickets && uniqueCategories?.map((uniqueCategory, categoryIndex) => (
            <div key={categoryIndex}>
              <h3>{uniqueCategory}</h3>
              {tickets.filter(ticket => ticket.category === uniqueCategory)
                .map((filteredTicket, _index) => (
                  <TicketCard 
                  id={_index}
                  color={colors[categoryIndex] || colors[0]}
                  ticket={filteredTicket}
                  />

                ))
              }
            </div>
          ))}
      </div>
    </div>
  );
};

export default Dashboard;
