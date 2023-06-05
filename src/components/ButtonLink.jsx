import { Link } from 'react-router-dom';

const ButtonLink = ({ text, path, width }) => {
  return (
    <Link
      to={path}
      className={`${width} bg-[#52C41A] text-white font-semibold py-2.5 px-3.5 text-center rounded-md`}
    >
      {text}
    </Link>
  );
};

export default ButtonLink;
