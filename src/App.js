import React,{Component} from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles'


class App extends Component{
   state = {displayBio:false};
   
    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }

    render() {
        
        
        return (
            <div>
                <h1>Hello!</h1>
                <p>My name is Shimona.</p>
                <p>I'm an Engineer.</p>
                {
                    this.state.displayBio ? (
                        <div>
                            <p>I live in Bangalore</p>
                            <button onClick = {this.toggleDisplayBio}>Show Less</button>
                        </div>

                        
                    ) : (
                        <div>
                            <button onClick = {this.toggleDisplayBio}>Read More</button>
                        </div>
                    )
                }
                <hr />
                <Projects />
                <hr />
                <SocialProfiles />
            </div>
        )
    }
}

export default App;