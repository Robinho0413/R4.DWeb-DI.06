'use client';
import '../css/base.css';


export default function Card(user) {
    
    return (
        <div className="gallery__pic">
            <img src={user.image} alt={user.work} className="gallery__image"/>
                <div className="gallery__div">
                    <img src="./bgshapes.svg" alt='avatar'/>
                        <div className="gallery__txt">
                            <h2>{user.name}</h2>
                            <h3 className="gallery__work">{user.work}</h3>
                        </div>
                </div>
        </div>
    )
}