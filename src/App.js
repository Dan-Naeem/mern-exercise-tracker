import React from 'react';
import { Browser as Router, Route } from "react-router-dom";
import "boostrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <Navbar />
      <br />

      <Route path='/' exact component={ExercisesList} />
      <Route path='/edit/:id' component={EditExercise} />
      <Route path='/create' component={CreateExercise} />
      <Route path='/user' component={CreateUser} />
    </Router>
  );
}

export default App;
