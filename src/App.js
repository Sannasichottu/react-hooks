import './App.css';
import React, {useState} from 'react';
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
  const history = useHistory();
  const [mode,setMode]=useState("dark")
  ;

  const theme = createTheme({
    palette: {
      mode:mode,
    },
  });
 
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
          <Editmovie movies={movies} setMovies={setMovies} /></Route>
        <Route path="/movies/:id">
        <MovieDetails movies={movies} />
        </Route>
        <Route path="/movies">
        <MovieList movies={movies} setMovies={setMovies} />
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
    const movie=movies[id];
    console.log(movie);
   const [name, setName] = useState(movie.name);
    const [poster, setPoster] = useState(movie.poster);
    const [rating, setRating] = useState(movie.rating);
    const [summary, setSummary] = useState(movie.summary);
    const [trailer, setTrailer] = useState(movie.trailer);
    
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
    return <div style={styles}></div>
  }

  //likes & dislikes


//MOvie-list
function MovieList({movies, setMovies}) {
  const history = useHistory();
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

