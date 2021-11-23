import './App.css';
import React, {useState , useEffect} from 'react';
import {Counter} from "./Counter.js";
//import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import InfoIcon from '@mui/icons-material/Info';
import Button from '@mui/material/Button';
import AppBar from '@mui/material/AppBar';
//import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
//import MenuIcon from '@mui/icons-material/Menu';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { useHistory } from 'react-router-dom';
import { Switch, Route, Redirect, useParams,} from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
//import {MovieList} from "./MovieList"


function App() {

  //Movie details 

  const [movies, setMovies]= useState([]);
  const history = useHistory();
  const [mode,setMode]=useState("dark")
  ;

  const theme = createTheme({
    palette: {
      mode:mode,
    },
  });
 
  

  //useEffect(()=>{
  //async function getMovies(){
  //    const data = await fetch("https://619ba1512782760017445704.mockapi.io/movies");
  //  const mvs = await data.json();
  //     setMovies(mvs);
  //  }getMovies();
  //},[]);

  return (
    <ThemeProvider theme={theme} >
      <Paper elevation={3} style={{borderRadius:"0px", minHeight:"100vh"}} >
    <div className="App">
    
      <AppBar position="static" style ={{marginBottom: "20px"}}>
        <Toolbar variant="dense">
        <Button variant="text" color="inherit" onClick={() => history.push('/')}>
          Home
        </Button>

        <Button variant="text" color="inherit" onClick={()=> history.push('/movies')} >
          Movies</Button>
        <Button variant="text" color="inherit" onClick={()=> history.push('/add-movies')} >
          Add Movies</Button>
        <Button variant="text" color="inherit" onClick={()=> history.push('/color-game')}>
          Color Game</Button>
          <Button variant="text" color="inherit" onClick={()=> history.push('/tic-tac-toe')}>
          Tic-Tac-Toe Game</Button>
          <Button 
          startIcon={theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          style ={{ marginLeft: "auto"}} 
          variant="text" color="inherit" onClick={()=>setMode(mode==="light" ? "dark" : "light") } >
          {mode==="light" ? "dark" : "light"} Mode</Button>
        </Toolbar>
      </AppBar>
      
     
      <Switch>
      <Route exact path="/">
          <Welcome />
        </Route>
        <Route path="/films">
          <Redirect to ="/movies" />
        </Route>
        <Route path="/movies/edit:id">
          <Editmovie  /></Route>
        <Route path="/movies/:id">
        <MovieDetails movies={movies} />
        </Route>
        <Route path="/movies">
        <MovieList  />
        </Route>
        <Route path="/add-movies">
        <Editmovie movies={movies} setMovies={setMovies}/>
        </Route>
        <Route path="/color-game">
        <ColorBox />
        <AddColor />
        </Route>
        <Route path="/tic-tac-toe">
          <TicTacToe />
        </Route>
        <Route path="**">
          <NotFound />
        </Route>
        
      </Switch>
  </div>
  </ Paper >
  </ThemeProvider>
  );}
    function TicTacToe(){
      const [board, setBoard] =
       useState([
        null,null,null,
        null,null,null,
        null,null,null,
      ]);
      useState([0,1,2,3,4,5,6,7,8]);
      

      const [isXTurn, setIsXTurn]=useState(true);

      const desideWinner = (board)=> {
        const lines=[
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
        ] ;
        for (let i=0; i< lines.length; i++){
          const [a, b, c]= lines[i];

            if(board[a] !== null && board[a] === board[b] && board[b] === board[c] ){
              console.log("Winner is", board[a]);
              return board[a];
            }         
        }
        return null;
      };

      const winner = desideWinner(board);

      const handleClick=(index)=>{
        //console.log(index);
        //console.log(isXTurn ? 'X' : 'O');
        if(winner === null && !board[index]){
          const boardCopy = [...board];
        boardCopy[index]= isXTurn ? "X" : "O";
        setBoard(boardCopy);
        setIsXTurn(!isXTurn);
        }
      };
      
      
      return(
        <div className="full-game" >
          
          <div className="board">
          {board.map((val ,index)=>(
            <GameBox val={val} onPlayerClick={()=>handleClick(index)} />
            )) }
          </div>
         {winner ? <h3>Winner is: {winner}</h3> : "" }
        </div>
      );
    }

    function GameBox({onPlayerClick, val}){
      //const [val,setVal]=useState(null);
      const styles={color: val === "X" ? "green" : "red"};
      return(
      <div style={styles} 
      onClick={onPlayerClick}
      className="game-box">
        {val}</div>
  );  
  }

  function MovieDetails({movies}){
    const history=useHistory();
    const {id} = useParams();
    //const movie = movies[id];
    console.log("The id is", id);
  
    const [movie, setMovie] = useState ({ }); 
    useEffect(()=>{
      fetch(`https://619ba1512782760017445704.mockapi.io/movies/${id}`,
      {method:"GET",})
      .then((data)=> data.json())
      .then((mv)=> setMovie(mv));
    }); //<- },[]); ipdi add pannanum 

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
    <Button onClick={()=>history.goBack( ) } variant="outlined" startIcon={<KeyboardBackspaceIcon />}>
    Back </Button>
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

  function Editmovie({movies, setMovies}){
    const {id} =useParams();
    const history =useHistory();
    //const movie=movies[id];
    //console.log(movie);
   const [name, setName] = useState(" ");
    const [poster, setPoster] = useState(" ");
    const [rating, setRating] = useState(" ");
    const [summary, setSummary] = useState(" ");
    const [trailer, setTrailer] = useState(" ");
  
    const editMovie = () => {
    
      const updatedMovie={
        name,
        poster,
        rating,
        summary,
        trailer,
      };
      console.log(updatedMovie);
      //copy the movie list & add the new movis
      //setMovies([ ...movies, updatedMovie]);

    //Replace the element in the updatedmovie list-[copy]
    const copyMovieList=[...movies];
    copyMovieList[id]= updatedMovie;
    setMovies(copyMovieList);
    history.push('/movies')

    fetch("https:619ba1512782760017445704.mockapi.io/movies/",
    { method:"POST",
      body: JSON.stringify(updatedMovie),
      headers:{'Content-Type': 'application/json'  }
    }).then(()=>history.push("/movies"));
    

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

        <TextField 
         value={trailer}
         onChange={(event)=>setTrailer(event.target.value)}
        label="Trailer" 
        variant="filled" />

        <button  onClick={editMovie} variant="outlined">SAVE</button>
        </div>
       );
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
    return <div style={styles}></div>
  }

  //likes & dislikes


//MOvie-list
function MovieList() {
  const [movies, setMovies] = useState([]);

  const getMovies =() =>{
    fetch("https:619ba1512782760017445704.mockapi.io/movies/")
    .then((data)=> data.json())
    .then((mvs)=> setMovies(mvs));

  }
    
  useEffect(getMovies,[]);

  //After delete refresh
  const deleteMovie = (id) => {
    fetch(
      `https://619ba1512782760017445704.mockapi.io/movies/${id}`,
      {method:"DELETE"}
      )
      .then(()=>getMovies());
  }

  const history = useHistory();
  return(
  <section className="movie-list">

    {movies.map(({name,rating,summary,poster,id} ,index)=>(
      <Movie 
        name={name}
        rating={rating}
        summary={summary}
        poster={poster}
        id={id}

        deleteButton = {
        <IconButton 
          onClick={()=>deleteMovie(id)}
          className="movie-show-button" 
          aria-label="more-info" 
          color="error">
        <DeleteIcon />
        </IconButton>
    }
     
     
    editButton={
      <IconButton 
      style={{marginLeft:"auto"}}
      onClick={()=>history.push("/movies/edit" + index) }
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

