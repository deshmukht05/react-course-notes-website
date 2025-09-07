export const NotesContent = ({ data }) => {
  const { title, content} = data;

  return (
    <li className="content">
      <h3>{title}</h3>
      <ul>
        {content.map((item, id) => (
          <li key={id}>
            <p>
              <strong>{item.type}</strong> {item.text}
            </p>
          </li>
        ))}
        {/* <hr /> */}
      </ul>
    </li>
  );
};
