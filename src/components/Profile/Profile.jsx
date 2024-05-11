import css from './Profile.module.css'

 const Profile = ({ name, tag, location, image, stats }) => {
    return  (<div className={css.conteiner}>
        <div className={css.data}>
            <img
                className={css.foto}
                src={image}
                alt={name}
            />
            <p className={css.name}>{name}</p>
            <p className={css.nik}>@{tag}</p>
            <p className={css.adress}>{location}</p>
        </div>

        <ul className={css.stats}>
            <li className={css.inform}>
                <span>Followers</span>
                <span className={css.span}>{stats.followers}</span>
            </li>
            <li className={css.inform}>
                <span>Views</span>
                <span className={css.span}>{stats.views}</span>
            </li>
            <li className={css.inform}>
                <span>Likes</span>
                <span className={css.span}>{stats.likes}</span>
            </li>
        </ul>
    </div>);
   

};
export default Profile;
