import './App.css';
import React, {useState} from 'react';
import {Counter} from "./Counter.js";
//import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useHistory } from 'react-router-dom';
import { Switch, Route, Link ,Redirect, useParams,} from "react-router-dom";
//import {MovieList} from "./MovieList"


function App() {

  //Movie details
  const INITIAL_MOVIES = [
   {
     name:"Master",
     poster:"https://m.media-amazon.com/images/M/MV5BNmU1OTYzYzAtMDcyOS00MDI0LTg2ZmQtYTEyMDdmMmQ0MjY5XkEyXkFqcGdeQXVyOTk3NTc2MzE@._V1_FMjpg_UX1000_.jpg",
     rating:7.8,
     summary:"JD, an alcoholic professor, is enrolled to teach at a juvenile facility, unbeknownst to him. He soon clashes with a ruthless gangster, who uses the children as scapegoats for his crimes.",
     trailer:"https://www.youtube.com/embed/1_iUFT3nWHk",
   },
   {
    name:"Ratatouille",
    poster:"https://images-na.ssl-images-amazon.com/images/S/pv-target-images/2b18044415b238c004e702aaf1dc693daf886d9dadf4b78e1b1bcc0b9df10f8c._RI_V_TTW_.jpg",
    rating:8,
    summary:"Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
    trailer:"https://www.youtube.com/embed/NgsQ8mVkN8w",
  },
  {
    name:"Pokkiri",
    poster:"https://qqcdnpictest.mxplay.com/pic/4e008988567d93c8edd379a374ec461f/en/2x3/320x480/test_pic1635764386337.webp",
    rating:7.5,
    summary:"Tamizh, a hardened criminal who does dirty jobs for money, falls in love with Shruthi, a charming girl, who hates his violent nature. His true purpose and identity are revealed after a turn of events.",
    trailer:"https://www.youtube.com/embed/wj0GjTQshaw",
  },
  {
    name:"Jai Bhim",
    poster:"https://moviegalleri.net/wp-content/uploads/2021/07/Actor-Suriya-Jai-Bhim-Movie-First-Look-Poster-HD.jpg",
    rating:9.6,
    summary:"A pregnant woman from a primitive tribal community, searches desperately for her husband, who is missing from police custody. A High Court advocate rises in support to find her husband and seek justice for them.",
    trailer:"https://www.youtube.com/embed/Gc6dEDnL8JA",
  },
  {
    name:"The Conjuring",
    poster:"https://m.media-amazon.com/images/M/MV5BOWRkOTYzZTQtMzQwNi00NDYwLTk4NjUtN2FjYTI4Y2UzM2RjXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_.jpg",
    rating:7.5,
    summary:"The Perron family moves into a farmhouse where they experience paranormal phenomena. They consult demonologists, Ed and Lorraine Warren, to help them get rid of the evil entity haunting them.",
    trailer:"https://www.youtube.com/embed/tUc8BEuxAKY",
  },
  {
    name:"Doctor",
    poster:"https://images.cinemaexpress.com/uploads/user/imagelibrary/2021/3/11/original/Doctor.PNG",
    rating:7.9,
    summary:"An army surgeon assembles a team to help him track down his fiancee's kidnapped niece.",
    trailer:"https://www.youtube.com/embed/oQiH_Iw0kDs",
  },
  {
    name:"Ratsasan",
    poster:"https://www.nettv4u.com/uploads/10-05-2018/raatchasan-movie-poster-.jpg",
    rating:8.4,
    summary:"Arun gives up on his dream of becoming a filmmaker and takes up the job of a police officer after his father's death. He then attempts to track down a psychotic killer who targets schoolgirls.",
    trailer:"https://www.youtube.com/embed/GsrN7rNch9Y",
  },
  {
    name:"Money Heist",
    poster:"https://flxt.tmsimg.com/assets/p14100007_b_v9_au.jpg",
    rating:8.2,
    summary:"A criminal mastermind who goes by 'The Professor' has a plan to pull off the biggest heist in recorded history -- to print billions of euros in the Royal Mint of Spain. To help him carry out the ambitious plan, he recruits eight people with certain abilities and who have nothing to lose. The group of thieves take hostages to aid in their negotiations with the authorities, who strategize to come up with a way to capture The Professor. As more time elapses, the robbers prepare for a showdown with the police.",
    trailer:"https://www.youtube.com/embed/DqZHAHwTwKY",
  },
  ];
 
  

  const [movies, setMovies]= useState(INITIAL_MOVIES);
  
 
  return (
    <div className="App">

      <nav>
      <Link to="/" >Home</Link>
      <Link to="/movies">Movies</Link>
      <Link to="/add-movies">Add Movies</Link>
      <Link to="/color-game">Color Game</Link>
      </nav>
      <Switch>
      <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/films">
          <Redirect to ="/movies" />
        </Route>
        <Route path="/movies/:id">
        <MovieDetails movies={movies} />
        </Route>
        <Route path="/movies">
        <MovieList movies={movies} setMovies={setMovies} />
        </Route>
        <Route path="/add-movies">
        <Addmovie movies={movies} setMovies={setMovies}/>
        </Route>
        <Route path="/color-game">
        <ColorBox />
        <AddColor />
        </Route>
        <Route path="**">
          <NotFound />
        </Route>
        
      </Switch>
  </div>
  );}

  function MovieDetails({movies}){
    const {id} = useParams();
    const movie = movies[id];
    const styles = {
      Color: movie.rating < 8 ? "crimson" : "green",
     fontWeight:"bold",};
    console.log(movie); 
    return (
      <div><iframe 
      width="100%" 
      height="800" 
      src={movie.trailer} 
      title="YouTube video player" 
      frameborder="0" 
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      

      <div className="movie-container">
        
    <div className="movie-specs">
    <h3 className="movie-name">{movie.name} </h3>
    <p className="movie-rating" style={styles} >⭐ {movie.rating} </p>
    </div>  
    <p className="movie-summary"> {movie.summary} </p>   
  </div>
  </div>);
  }

  function NotFound(){
    return(
    <div className="not-found-container">Not Found 404
      <img className="not-found-container" src="https://kfg6bckb.media.zestyio.com/yalantis-interactive-404.gif" alt=" " />
    </div>)
  }

  function Welcome(){
    return <h2>Welcome to SANNASI 🤩 CHOTTU 🏍️</h2>;  
  }

  function Addmovie({movies, setMovies}){
   const [name, setName] = useState(" ");
    const [poster, setPoster] = useState(" ");
    const [rating, setRating] = useState(" ");
    const [summary, setSummary] = useState(" ");
    
    const addMovie = () => {
    
      const newMovie={
        name,
        poster,
        rating,
        summary,
      };
      console.log(newMovie);
      //copy the movie list & add the new movis
      setMovies([ ...movies, newMovie]);
    };
   
    return(  <div className="add-movie-form">
      <TextField 
         value={name}
         onChange={(event)=>setName(event.target.value)}
        label="Name" 
        variant="filled" />

        <TextField 
         value={poster}
         onChange={(event)=>setPoster(event.target.value)}
        label="Poster" 
        variant="filled" />

        <TextField 
         value={rating}
         onChange={(event)=>setRating(event.target.value)}
        label="Rating" 
        variant="filled" />

        <TextField 
         value={summary}
         onChange={(event)=>setSummary(event.target.value)}
        label="Summary" 
        variant="filled" />

        <button  onClick={addMovie} variant="outlined">Add movie</button>
        </div>
     

    )
  }

  function AddColor (){

    const [color ,setColor] = useState(" ");
    const styles= {backgroundColor: color}
    //const colors =["teal","orange", "blue",];

    const[colors,setColors]= useState(["red", "orange", "yellow", "green", "blue", "indigo", "violet",]) 
    return(
      <div className="add-color-form">
      <TextField 
         value={color}
         onChange={(event)=>setColor(event.target.value)}
         style={styles}
         label="Enter a color" variant="standard" />
         <button onClick={()=>setColors([...colors,color])} variant="outlined">Add color</button>
        
        {colors.map((clr, index)=>(
          <ColorBox key={index} color={clr} />
        ))}
        
      </div>
    )
  }
  function ColorBox({color }){
    const styles={
      backgroundColor: color ,height:"25px", width:"243px", marginTop:"10px",
    }
    return <div style={styles}>

    </div>
  }

  //likes & dislikes


//MOvie-list
function MovieList({movies, setMovies}) {
  return(
  <section className="movie-list">

    {movies.map(({name,rating,summary,poster} ,index)=>(
    <Movie 
    name={name}
    rating={rating}
    summary={summary}
    poster={poster}
    id={index}

    deleteButton = {
      <IconButton 
      onClick={()=>{
        console.log("Deleting..." ,index);
         const deleteIdx = index;
         const remainingMovies = movies.filter(
           (mv,idx)=> idx !== deleteIdx
         );
         console.log("Remaining ", remainingMovies);
         setMovies(remainingMovies);
      }}
      className="movie-show-button" 
      aria-label="more-info" 
      color="error">
     <DeleteIcon />
     </IconButton>
    }
     
     
    editButton={
      <IconButton 
      onClick={()=>{}}
      className="movie-edit-button"
      aria-label="edit movie"
      color="secondary">
        < EditIcon />
     </IconButton>
    }
    />
    ))},
  </ section> 
  );
  }


//Movie view details

function Movie({name,rating,summary,poster,id, deleteButton,editButton}) {

  const [show, setShow] = useState(true)
  const history = useHistory();
  
  //Rateing color
  const styles = {
    color: rating < 8 ? "crimson" : "green" ,
    fontWeight:"bold", };
  //description Hide &  Show
  //const summaryStyles = {display: show ? "block" : "none" ,};


  return (
  <Card className="movie-container">
    <img 
    src={poster} 
    alt="Master"
    className="movie-poster" 
    />
    <CardContent>
    <div className="movie-specs">
    <h3 className="movie-name">{name} 
    
    <IconButton 
      onClick={()=>{
        console.log(id);
         // /movies/0 or /movies/1
        history.push("/movies/"+ id);
      }}
      className="movie-show-button" aria-label="more-info" color="success">
     <InfoIcon />
     </IconButton>

    <IconButton onClick={()=>setShow(!show)} className="movie-show-button" aria-label="hide" color="primary">
     {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}   
    </IconButton> </h3>
    <p className="movie-rating" style ={styles} >⭐ {rating} </p>
    </div>

    
    {show ? <p className="movie-summary">{summary}</p> : ""}
    {/*<p style={summaryStyles} className="movie-summary"> {summary} </p> */} 
    <CardActions>
    <Counter /> {editButton} {deleteButton}
    </CardActions>
    </CardContent>
  </Card>
  );
    }   
export default App;



 /*jsx - Javascript xml*/

