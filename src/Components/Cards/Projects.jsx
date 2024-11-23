import React from 'react'
import { projects } from '../../Constants/Projects'
const Projects = () => {
  return (
    <div className='right-card box-shadow'>
        {
            projects.map((data)=>{
                return(
                    <div className="card box-shadow">
                        <h2>{data.projectName}</h2>
                        <h3>{data.describtion}</h3>
                        <div className='tagarea'>
                            {
                                data.techUsed.map((tech)=>{
                                    return(
                                        <div className='tag box-shadow'>
                                            {tech}
                                        </div>
                                    )
                                })
                            }
                        </div>

                        <div className='projectbuttons'>
                            <a  href={data.codeurl}>
                            <button className='project-button'>Code</button>
                            </a>
                            <a href={data.url}>
                            <button className='project-button'>View Project</button>
                            </a>
                        </div>

                    </div>
                )
            })
        }
        
    </div>
  )
}

export default Projects
