import { StyledList } from './StatList.styled';

export const StatList = ({ items: { followers, views, likes } }) => {
  return (
    <StyledList>
      <li>
        <span>Followers</span>
        <span>{followers}</span>
      </li>
      <li>
        <span>Views</span>
        <span>{views}</span>
      </li>
      <li>
        <span>Likes</span>
        <span>{likes}</span>
      </li>
    </StyledList>
  );
};