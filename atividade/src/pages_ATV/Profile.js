// import './Profile.css';

function Profile(props) {
  return (
    <div className="Profile">
      <h2>{props.name}</h2>
      <img
        className="avatar"
        src={props.image_url}
        alt={props.image_alt}
        width={70}
        height={70}
      />
      <ul>
        <li>
          <b>Profession: </b>
          {props.profession}
        </li>
        <li>
          <b>Awards: {props.qdd_awards} </b> 
          ({props.awards})
        </li>
        <li>
          <b>Discovered: </b>
          {props.discovered_text} ({props.discovered})
        </li>
      </ul>
    </div>
  );
}
  
export default Profile;