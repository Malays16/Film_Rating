import Star from './Star';
import { Count } from '../App';

const Stars = ({ count }: { count: Count }) => {
  if (count < 1 || count > 5 || typeof count !== 'number') {
    return null;
  }
  return (
    <ul className="card-body-stars u-clearfix">
      {[...Array(count)].map((_, index) => (
        <Star key={index} />
      ))}
    </ul>
  );
};

export default Stars;