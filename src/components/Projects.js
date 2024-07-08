import React from 'react';
import "./project.css";
const Projects = () => {
  return (
    <section className='container '>
        <h1 className='text-primary text-center mb-5 mt-5'> PRO<span className='text-warning'>JECT </span></h1>
        <div className="row row-cols-1 row-cols-md-3 g-4">
            <div className="col">
                <div className="card h-100 hover:scale-110 transform transition-all duration:300 hover:-rotate-6">
                <img src="../portfolio.png" className="card-img-top object-fit-fill" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-info">My Portfolio</h5>
                </div>
                <div className="card-footer bg-warning">
                    <small className="text-body-secondary">jyotiranjanmohanty1997.github.io/my-portfolio/</small>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src="../Ecom.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-info">Shopping App</h5>
                </div>
                <div className="card-footer bg-warning">
                    <small className="text-body-secondary">jyotiranjanmohanty1997.github.io/React-shoppingapp/</small>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src="../redux.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-info">React-Redux</h5>
                </div>
                <div className="card-footer bg-warning">
                    <small className="text-body-secondary"> jyotiranjanmohanty1997.github.io/Reactredux/ </small>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100 hover:scale-110 transform transition-all duration:300 hover:-rotate-6">
                <img src="../validation.png" className="card-img-top object-fit-fill" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-info">React Validation</h5>
                </div>
                <div className="card-footer bg-warning">
                    <small className="text-body-secondary">jyotiranjanmohanty1997.github.io/react-validation/</small>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src="../Banner2.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-info">Project</h5>
                </div>
                <div className="card-footer bg-warning">
                    <small className="text-body-secondary">jyotiranjanmohanty1997.github.io/project3/</small>
                </div>
                </div>
            </div>
            <div className="col">
                <div className="card h-100">
                <img src="../redux.jpg" className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-info">React-TodoApp</h5>
                </div>
                <div className="card-footer bg-warning">
                    <small className="text-body-secondary"> jyotiranjanmohanty1997.github.io/React-Todo-App/ </small>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Projects
