import PropTypes from 'prop-types';
import * as S from './Profile.styled';
import { StatList } from './ProfileStat/StatList';

export const Profile = ({
  user: { username, tag, location, avatar, stats },
}) => {
  return (
    <S.Container>
      <S.Wrapper>
        <S.Avatar src={avatar} alt={username} />
        <S.Name>{username}</S.Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </S.Wrapper>
      <StatList items={stats} />
    </S.Container>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.object.isRequired,
  }).isRequired,
};