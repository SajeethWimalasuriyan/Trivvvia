import React, { Component } from 'react'
import '../ComponentCSS/TriviaCardStyle.css'
import axios from 'axios'
import TriviaQueueCard from './TriviaQueueCard'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export class TriviaCard extends Component {
    constructor(){
        super()
   
        this.state = {
            triviaQuestions : [{"category":"Entertainment: Video Games","type":"multiple","difficulty":"easy","question":"What&#039;s the best selling video game to date?","correct_answer":"Tetris","incorrect_answers":["Wii Sports","Minecraft","Super Mario Bros"]}],
            whichQuestion: 0,
            score: 0,
            promt: '',
            count: 0
        }
    }
    componentWillReceiveProps (){
        console.log("running")
    
        if(this.props.cat != this.state.promt){
            var templist = []
            axios.get('https://opentdb.com/api.php?amount=20'+this.props.cat)
            
            .then(data => {
                //Code below filters out undesirable trivia
                data.data.results.forEach((ind) =>{
                    if (!ind.question.includes('&')){
                        templist.push(ind);
                    }
                    
                })
               
            })
            .then(()=>{
               this.setState({triviaQuestions: templist,whichQuestion:0})
            })
            
        }
        
    }
     getTriviaInfo = async () =>{
        console.log(this.props.cat)
        axios.get('https://opentdb.com/api.php?amount=20'+this.props.cat)
        .then(data => {
            //Code below filters out undesirable trivia
            data.data.results.forEach((ind) =>{
                if (!ind.question.includes('&')){
                   this.state.triviaQuestions.push(ind);
                }
                
            })
           
        })
        
        .then(()=>{
            this.setState({whichQuestion: this.state.whichQuestion + 1})
        })
        .then(()=>{
            return true;
        })
    }
    notifyCorrect = () => toast.success('Great Job', {
        position: "top-right",
        autoClose: 1111,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });;
    notifyFalse = () => toast.error('The correct answer is ' + this.state.triviaQuestions[this.state.whichQuestion].correct_answer, {
        position: "top-right",
        autoClose: 1111,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        });;

    componentDidMount(){
        this.getTriviaInfo();

    }
    next = (count) =>{

        console.log(this.state.triviaQuestions)
            
            this.setState({whichQuestion: this.state.whichQuestion + 1});
            if (this.state.whichQuestion%5 == 0){
                console.log("worked");
                this.getTriviaInfo();
               
               
            }
   
         
            
        
        
           
            
        
    }
    correct = () =>{
        this.setState({score: this.state.score + 1});
        this.notifyCorrect();
        this.next(1);
        console.log(this.state.triviaQuestions[this.state.whichQuestion].question);
        
    }
    inCorrect = () =>{
        this.setState({score: this.state.score - 1});
        this.notifyFalse()
        this.next(1);
        console.log(this.state.triviaQuestions[this.state.whichQuestion].question);

    }
    shuffleArray = (array) => {
        //This function randomizes the available inputs.
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }
    render() {
        var answers = this.state.triviaQuestions[this.state.whichQuestion].incorrect_answers
        var listItems = []
        var randomOP = ['options o1','options o2','options o3','options o4']
        this.shuffleArray(randomOP)
        if (answers.length > 2 ){
            listItems.push(<button className={randomOP[0]} onClick={() => this.inCorrect()}>{answers[0]}</button>)
            listItems.push(<button className={randomOP[1]} onClick={() => this.inCorrect()}>{answers[1]}</button>)
            listItems.push(<button className={randomOP[2]} onClick={() => this.inCorrect()}>{answers[2]}</button>)
      listItems.push(<button className={randomOP[3]} onClick={() => this.correct()}>{this.state.triviaQuestions[this.state.whichQuestion].correct_answer}</button>)
      this.shuffleArray(listItems)
      
        }
        else{
            var randomOP = ['options o1','options o2','options o3','options o4']
            this.shuffleArray(randomOP)
            listItems.push(<button className={randomOP[0]} onClick={() => this.inCorrect()}>{answers[0]}</button>)
            listItems.push(<button className={randomOP[1]} onClick={() => this.correct()}>{this.state.triviaQuestions[this.state.whichQuestion].correct_answer}</button>)
        }
        
       
      console.log(answers)
        console.log(this.state.triviaQuestions[this.state.whichQuestion])
        return (
            <div className="trivia-container">
            <div className="trivia-card">
                <ToastContainer
                    position="top-right"
                    autoClose={1111}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    />
                <div className="top-container">
                <div className="function-bar">
                    <div className="function-bar-text">Type: {this.state.triviaQuestions[this.state.whichQuestion].type.charAt(0).toUpperCase() + this.state.triviaQuestions[this.state.whichQuestion].type.slice(1)}</div>
                    <div className="function-bar-text">
                 Category: {this.state.triviaQuestions[this.state.whichQuestion].category.charAt(0).toUpperCase() + this.state.triviaQuestions[this.state.whichQuestion].category.slice(1)}
                </div>
                <div className="function-bar-text">
                  Difficuly: {this.state.triviaQuestions[this.state.whichQuestion].difficulty.charAt(0).toUpperCase() + this.state.triviaQuestions[this.state.whichQuestion].difficulty.slice(1)}
                </div>
                </div>
                <div className="beside-function-bar">
                <div className="score">Score: <div className="score-number">{this.state.score}</div></div>
                </div>
                </div>

                

                <h2 className="question">
                {this.state.triviaQuestions[this.state.whichQuestion].question}
                </h2>

                
               
                  <div className="choices">
                  { listItems}
                  
                  </div>
                 
            </div>
            </div>
        )
    }
}

export default TriviaCard
