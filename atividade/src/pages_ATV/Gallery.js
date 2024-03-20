// import './Gallery.css';
import Profile from './Profile';

function Gallery() {
  return (
    <div className="Gallery">
      <section>
        <h1>Notable Scientists</h1>
        <Profile
          name=''
          image_url=''
          image_alt=''
          profession=''
          qdd_awards=''
          awards=''
          discovered_text=''
          discovered=''
        />
      </section>
    </div>
  );
}

export default Gallery;