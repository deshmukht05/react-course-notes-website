import './Header.css';

export const Header = () => {
  return (
    <>
      <nav className='navbar'>
        <ul className='ul-bar'>
          <li className='li-bar'>
            <a href="./NotesContent.jsx" className='a-bar'>Notes</a>
          </li>
          <li className='li-bar'>
            <a href="./MiniProject.jsx" className='a-bar'>Mini Project</a>
          </li>
        </ul>
      </nav>
    </>
  );
};
