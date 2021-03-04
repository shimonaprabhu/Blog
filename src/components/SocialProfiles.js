import React from 'react';
import SOCIAL_PROFILES from '../data/projects'


const SocialProfile = props => {
        const {image,link} = props.socialProfile;
        return(
            <div style={{display:'inline-block',width:300,margin:10}}>
                <a href={link}><img src={image} alt='social-profile' style={{width:35, height: 45, margin:10}}/></a>
            </div>
        )
}

const SocialProfiles = () =>(
            <div>
                <h2>Connect with me!</h2>
                <div>
                    {
                        SOCIAL_PROFILES.map( SOCIAL_PROFILE => {
                            return(
                                <SocialProfile key={SOCIAL_PROFILE.id} socialProfile={SOCIAL_PROFILE}/>
                            );
                        })
                    }
                </div>
            </div>
        )
export default SocialProfiles;