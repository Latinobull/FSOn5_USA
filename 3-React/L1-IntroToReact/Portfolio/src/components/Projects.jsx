import p1 from '../img/project1.jpg';
import p2 from '../img/project2.jpg';
import p3 from '../img/project3.jpg';
import Card from './Card';
export default function Projects() {
  const projectList = [
    { title: 'Project 1', description: 'Description for project 1', img: p1 },
    { title: 'Project 2', description: 'Description for project 2', img: p2 },
    { title: 'Project 3', description: 'Description for project 3', img: p3 },
  ];
  projectList.map(item => {
    console.log(item.title);
  });
  return (
    <div>
      <h1>Projects</h1>
      <div
        className="project-container"
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
        }}
      >
        {projectList.map(item => (
          // ? This way is for passing props directly into the component
          //   <Project title={item.title} img={item.img} desc={item.description} />
          // ? vv This way is for passing in the data directly into the parent
          <Card>
            <h4>{item.title}</h4>
            <img src={item.img} alt="" width={400} />
            <p>{item.description}</p>
          </Card>
        ))}
        {/* <Project>
          <h4>{projectList[0].title}</h4>
          <img src={projectList[0].img} alt="" width={400} />
          <p>{projectList[0].description}</p>
        </Project>
        <Project>
          <h4>{projectList[1].title}</h4>
          <img src={projectList[1].img} alt="" width={400} />
          <p>{projectList[1].description}</p>
        </Project>
        <Project>
          <h4>{projectList[2].title}</h4>
          <img src={projectList[2].img} alt="" width={400} />
          <p>{projectList[2].description}</p>
        </Project> */}
      </div>
    </div>
  );
}
