import { observer } from 'mobx-react-lite';
import React from 'react';
import { Link, } from 'react-router-dom';
import { Card, Icon, Image } from 'semantic-ui-react';
import { Profile } from '../../app/models/Profile';
import FollowButton from './FollowButton';

interface Props {
    profile: Profile;
}

export default observer(function ProfileCard({profile}: Props) {

    function truncatedBio(bio: string | undefined) {
        if(bio) {
            return bio.length <= 40 ? bio : bio.substr(0, 37) + '...';
        }
    }

    return (
        <Card as={Link} to={`/profiles/${profile.userName}`}>
            <Image src={profile.image || '/assets/user.png'}/>
            <Card.Content>
                <Card.Header>{profile.displayName}</Card.Header>
                <Card.Description>{truncatedBio(profile.bio)}</Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Icon name='user' />
                {profile.followersCount} followers
            </Card.Content>
            <FollowButton profile={profile}/>

        </Card>

    );
});